import type { APIRoute } from 'astro';

export const prerender = false;

const allowedAudiences = new Set(['government', 'investor', 'university', 'general']);
const audienceLabels: Record<string, string> = {
  government: 'Government',
  investor: 'Investor',
  university: 'University',
  general: 'General',
};
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const readServerEnv = (key: string) => process.env[key]?.trim() || (import.meta.env as Record<string, string | undefined>)[key]?.trim();
const json = (body: Record<string, string>, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' },
  });
const escapeHtml = (value: string) => value.replace(/[&<>"']/g, (char) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
}[char] ?? char));

export const POST: APIRoute = async ({ request }) => {
  const maxBodyBytes = 12_000;
  const contentLengthHeader = request.headers.get('content-length');
  const contentLength = contentLengthHeader ? Number(contentLengthHeader) : 0;
  if (contentLengthHeader && (!Number.isSafeInteger(contentLength) || contentLength < 0)) {
    return json({ message: 'The request could not be read. Please try again.' }, 400);
  }
  if (contentLength > maxBodyBytes) return json({ message: 'The message is too large. Please shorten it and try again.' }, 413);
  const origin = request.headers.get('origin');
  const host = request.headers.get('host');
  const forwardedHosts = (request.headers.get('x-forwarded-host') || '').split(',').map((value) => value.trim().toLowerCase()).filter(Boolean);
  const acceptedHosts = new Set([host?.toLowerCase(), new URL(request.url).host.toLowerCase(), ...forwardedHosts].filter((value): value is string => Boolean(value)));
  if (origin && acceptedHosts.size) {
    try {
      if (!acceptedHosts.has(new URL(origin).host.toLowerCase())) return json({ message: 'The request could not be verified.' }, 403);
    } catch {
      return json({ message: 'The request could not be verified.' }, 403);
    }
  }
  if (request.headers.get('content-type')?.split(';')[0].trim().toLowerCase() !== 'application/json') {
    return json({ message: 'The request could not be read. Please try again.' }, 415);
  }
  const reader = request.body?.getReader();
  if (!reader) return json({ message: 'The request could not be read. Please try again.' }, 400);
  const chunks: Uint8Array[] = [];
  let bodySize = 0;
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      bodySize += value.byteLength;
      if (bodySize > maxBodyBytes) {
        await reader.cancel();
        return json({ message: 'The message is too large. Please shorten it and try again.' }, 413);
      }
      chunks.push(value);
    }
  } catch {
    return json({ message: 'The request could not be read. Please try again.' }, 400);
  }
  const bodyBytes = new Uint8Array(bodySize);
  let offset = 0;
  for (const chunk of chunks) {
    bodyBytes.set(chunk, offset);
    offset += chunk.byteLength;
  }
  let body: Record<string, unknown>;
  try {
    const parsed: unknown = JSON.parse(new TextDecoder().decode(bodyBytes));
    if (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed)) throw new Error('Expected a JSON object');
    body = parsed as Record<string, unknown>;
  } catch {
    return json({ message: 'The request could not be read. Please try again.' }, 400);
  }
  const name = typeof body.name === 'string' ? body.name.trim() : '';
  const email = typeof body.email === 'string' ? body.email.trim() : '';
  const organisation = typeof body.organisation === 'string' ? body.organisation.trim() : '';
  const audience = typeof body.audience === 'string' ? body.audience : '';
  const message = typeof body.message === 'string' ? body.message.trim() : '';
  const companyWebsite = typeof body.companyWebsite === 'string' ? body.companyWebsite.trim() : '';
  const startedAt = Number(body.formStartedAt);

  // Honeypot submissions are quietly discarded without contacting the mail provider.
  if (companyWebsite) return json({ message: 'Thank you. Your enquiry has been sent.' });
  if (!name || name.length > 100 || !emailPattern.test(email) || email.length > 254 ||
      organisation.length > 120 || !allowedAudiences.has(audience) || message.length < 10 || message.length > 4000) {
    return json({ message: 'Please check the form fields and try again.' }, 400);
  }
  if (!Number.isFinite(startedAt) || Date.now() - startedAt < 1800 || Date.now() - startedAt > 86_400_000) {
    return json({ message: 'Please refresh the page and try again.' }, 400);
  }

  const categoryKey = `CONTACT_TO_EMAIL_${audience.toUpperCase()}`;
  const destination = readServerEnv(categoryKey) || readServerEnv('CONTACT_TO_EMAIL');
  const sender = readServerEnv('CONTACT_FROM_EMAIL');
  const apiKey = readServerEnv('RESEND_API_KEY');
  if (!destination || !sender || !apiKey || !emailPattern.test(destination) || !emailPattern.test(sender)) {
    return json({ message: 'The contact form is not available yet. Please try again later.' }, 503);
  }

  const label = audienceLabels[audience];
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeOrganisation = escapeHtml(organisation || 'Not provided');
  const safeMessage = escapeHtml(message).replace(/\r?\n/g, '<br>');
  let providerResponse: Response;
  try {
    providerResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: sender,
        to: [destination],
        reply_to: email,
        subject: `[${label}] Website enquiry — ${name.slice(0, 80)}`,
        text: `Audience: ${label}\nName: ${name}\nEmail: ${email}\nOrganisation: ${organisation || 'Not provided'}\n\n${message}`,
        html: `<p><strong>Audience:</strong> ${escapeHtml(label)}</p><p><strong>Name:</strong> ${safeName}</p><p><strong>Email:</strong> ${safeEmail}</p><p><strong>Organisation:</strong> ${safeOrganisation}</p><p>${safeMessage}</p>`,
      }),
      signal: AbortSignal.timeout(8_000),
    });
  } catch {
    return json({ message: 'We could not deliver your enquiry just now. Please try again later.' }, 502);
  }
  if (!providerResponse.ok) {
    return json({ message: 'We could not deliver your enquiry just now. Please try again later.' }, 502);
  }
  return json({ message: 'Your enquiry has been sent.' });
};
