import type { APIRoute } from 'astro';
import { pageRoutes } from '../content/site';

export const prerender = false;

export const GET: APIRoute = () => {
  const configuredSite = process.env.PUBLIC_SITE_URL?.trim() || import.meta.env.PUBLIC_SITE_URL?.trim();
  let origin: URL;
  try {
    if (!configuredSite) throw new Error('PUBLIC_SITE_URL is not configured');
    origin = new URL(configuredSite);
    if (origin.protocol !== 'https:' || origin.username || origin.password || origin.pathname !== '/' || origin.search || origin.hash) throw new Error('PUBLIC_SITE_URL must be an HTTPS origin');
  } catch {
    const empty = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><!-- Configure PUBLIC_SITE_URL to include canonical page locations. --></urlset>';
    return new Response(empty, { status: 200, headers: { 'Content-Type': 'application/xml; charset=utf-8', 'Cache-Control': 'public, max-age=300' } });
  }
  const entries = pageRoutes.map((route) => `<url><loc>${new URL(route, origin).toString()}</loc></url>`).join('');
  const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${entries}</urlset>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8', 'Cache-Control': 'public, max-age=300' } });
};
