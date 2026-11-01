# Elimu Africa website

A static-first corporate site built with Astro and the Vercel adapter. Public pages are prerendered as HTML; the contact and sitemap endpoints use Vercel-compatible serverless functions. Copy is based on the supplied corporate profile and website-copy draft; those source documents are not in the public site. The visual system uses editorial typography and hand-authored diagrams rather than stock or generated building imagery.

## Requirements and local development

Use Node.js 22.23.4 or later and pnpm 11.25.0 (pinned by the `packageManager` field):

```sh
pnpm install --frozen-lockfile
pnpm dev
```

The local server listens on `0.0.0.0:3000`. Run `pnpm check` for Astro/TypeScript diagnostics and `pnpm build` for the production output. The Astro Vercel adapter creates `.vercel/output`; do not commit generated output.

## Content, diagrams and identity

Page copy, navigation, the five commitments, team entries and public route list are in `src/content/site.ts`. Content pages use `src/pages/[slug].astro`; Home and Contact have dedicated files. Leadership entries intentionally contain only names, roles and cities. The diagram components keep the PPP allocation, investor capital pathway, three-city presence and concession lifecycle separate. The city diagram is schematic, not a geographic map or a statement of branch offices. Keep `public/manus-routes.json` synchronized when page routes change, and update `CONTENT_DECISIONS.md` whenever source wording is adjusted, merged or omitted.

The site uses self-hosted Libre Baskerville and Public Sans packages, with SIL Open Font License texts in `public/licenses/`. Font assets are bundled with the site; they are not fetched from a third-party font host. Original non-photographic linework and the social-share/favicons use the restrained visual system. The public site wordmark remains text because no approved corporate-logo artwork was supplied; the platform `app.config.ts` logo URL is separate from the site favicon.

Typeface references: [Libre Baskerville](https://fonts.google.com/specimen/Libre+Baskerville) and [Public Sans](https://fonts.google.com/specimen/Public+Sans). The corresponding local license files ship with the bundled fonts.

## Environment configuration

Copy `.env.example` to `.env` for local development and never commit real `.env` values. Astro loads local values for server-side routes; production values are managed separately in the Vercel project. Set `PUBLIC_SITE_URL` only after selecting the actual production HTTPS origin. It must be an origin without a path, query or fragment. It supplies canonical URLs and absolute OpenGraph/social-image URLs during the build; the sitemap endpoint uses it at runtime. Without it, the website deliberately does not guess a hostname, and the sitemap returns a valid empty sitemap document.

The `/api/contact/` endpoint sends an enquiry through the Resend API. Configure `RESEND_API_KEY`, `CONTACT_FROM_EMAIL` (an address verified with Resend) and at least one of `CONTACT_TO_EMAIL` or a category-specific destination. Optional destinations are `CONTACT_TO_EMAIL_GOVERNMENT`, `CONTACT_TO_EMAIL_INVESTOR`, `CONTACT_TO_EMAIL_UNIVERSITY` and `CONTACT_TO_EMAIL_GENERAL`; each category falls back to `CONTACT_TO_EMAIL`. All values are server-side and are never rendered into the page. Until valid settings exist, the endpoint returns `503` and does not claim that the enquiry was sent.

On provider success, the interface reports that the email service **accepted** the enquiry; that response is not proof that a recipient's inbox received or displayed it. Before launch, an owner should perform an explicitly authorized test using a monitored recipient, then check the provider's message events and the receiving inbox (including spam/bounce outcomes). No live test message was sent during the source revision.

The endpoint also applies a modest, best-effort in-memory limit of five POST attempts per client address per 15-minute window, returning `429` with `Retry-After`. Keys are temporary HMACs in a bounded process-local map and expire; no address is logged by this application or written to a database for that limit. Vercel serverless instances do not share memory, so this is **not** a distributed or launch-grade abuse control. Before broad promotion, enable Vercel-supported edge/WAF rate limiting or another shared limiter and keep this endpoint's body, origin, honeypot and validation controls.

Set the private mail variables in Vercel Project Settings → Environment Variables and keep the Resend key and sender/recipient addresses private. The live preview hostname `elimu-delta.vercel.app` should not be treated as the selected production/canonical domain unless the owner explicitly chooses it.

## Deploy to Vercel

Import the repository into Vercel and keep the detected Astro preset. Use `pnpm install --frozen-lockfile` and `pnpm build`; the adapter is configured in `astro.config.mjs`, and no custom rewrite in `vercel.json` is required. Set the runtime email variables and the actual `PUBLIC_SITE_URL`, deploy a preview, and review all routes, metadata, accessible layouts, form configuration and legal text. A valid Resend API response indicates provider acceptance only; verify actual delivery through an authorized inbox test. Owner/counsel should review the privacy notice, terms and investor notice before official launch. This source handoff does not deploy the site.

## Privacy and accessibility

The application adds no analytics script, advertising tracker, application database or cookie banner. Project-level injected analytics and the platform badge are disabled; hosting/CDN technical request processing may still occur. Contact submissions are sent to the configured email provider and are not saved by this application. For abuse prevention, the endpoint keeps only a short-lived keyed identifier in the active server instance, not a persistent address record. Refer to the Privacy Notice for the described form handling.

The interface uses semantic landmarks, a skip link, keyboard-operable navigation and lifecycle tabs, clear focus states, reduced-motion handling, readable contrast and print styles. Diagrams retain labeled text and do not use color as their only signal.

Review `CONTENT_DECISIONS.md` alongside the copy. The website wordmark is not an official logo, and generic legal copy is not a substitute for owner/counsel review.
