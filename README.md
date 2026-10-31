# Elimu Africa website

A static-first corporate credibility site built with Astro and the Vercel adapter. Public pages are prerendered as HTML; the contact and sitemap endpoints use the adapter’s Vercel-compatible serverless runtime. Public facts and copy are drawn from the supplied corporate profile and web-copy draft. The source documents are not included in the public site.

## Requirements and local development

Use Node.js 22.23.4 or later and pnpm 11.25.0 (pinned by the `packageManager` field). Run:

```sh
pnpm install --frozen-lockfile
pnpm dev
```

The local server listens on `0.0.0.0:3000`. Run `pnpm check` for Astro/TypeScript diagnostics and `pnpm build` for the production build. The Astro Vercel adapter creates `.vercel/output`; do not commit generated output.

## Content and assets

Page copy, navigation, the five commitments, team entries and page-route list are in `src/content/site.ts`. Content pages use `src/pages/[slug].astro`; the homepage and contact page have dedicated files. Leadership entries intentionally contain only names, roles and cities. Keep `public/manus-routes.json` synchronized with page route changes and update `CONTENT_DECISIONS.md` whenever source wording is adjusted, merged or omitted.

The website uses self-hosted Libre Baskerville and Public Sans font packages, with SIL Open Font License notices in `public/licenses/`. Their font files are bundled into the local site build rather than loaded from a third-party font host. Original non-photographic architecture linework and the social-share/favicons use the site's restrained visual system. The site wordmark is text; no unavailable corporate logo is recreated.

Typeface references: [Libre Baskerville](https://fonts.google.com/specimen/Libre+Baskerville) and [Public Sans](https://fonts.google.com/specimen/Public+Sans). The local license files ship with the corresponding font assets.

## Environment configuration

Copy `.env.example` to `.env` for local work and never commit real `.env` values. Astro loads local values for server-side routes; deployment values are read from the Vercel environment. Set `PUBLIC_SITE_URL` only after the actual production HTTPS origin is known; it must be an origin, with no path, query or fragment. This build-time value supplies canonical URLs and absolute OpenGraph/social-image URLs. The sitemap endpoint also uses it at runtime for absolute page locations. Without it, the site deliberately does not guess a hostname; the sitemap returns a valid, empty sitemap document until configured.

The `/api/contact/` endpoint sends messages through the Resend email API. To enable delivery, configure `RESEND_API_KEY`, `CONTACT_FROM_EMAIL` (an address verified with the provider) and `CONTACT_TO_EMAIL`. Optional `CONTACT_TO_EMAIL_GOVERNMENT`, `CONTACT_TO_EMAIL_INVESTOR`, `CONTACT_TO_EMAIL_UNIVERSITY` and `CONTACT_TO_EMAIL_GENERAL` variables route enquiry categories separately; each falls back to `CONTACT_TO_EMAIL`. These values are server-side only and are never rendered into the page. Until valid delivery settings exist, the endpoint returns an unavailable status rather than claiming a message was sent. Enquiry contents are sent to the configured email provider and are not stored by this application.

Set the same values in Vercel Project Settings → Environment Variables. Keep the API key and sender/recipient addresses private.

## Deploy to Vercel

Import the repository into Vercel and keep the detected Astro preset. Use `pnpm install --frozen-lockfile` and `pnpm build`; the adapter is configured in `astro.config.mjs`, and no custom rewrite in `vercel.json` is required. Set the runtime variables described above and the actual `PUBLIC_SITE_URL` before relying on canonical metadata and sitemap entries. Deploy a preview first and review content, form delivery, legal copy, routes and metadata before a public release. This code handoff does not deploy the site live.

## Privacy and accessibility

The application adds no analytics script, advertising tracker, application database or cookie banner. Project-level injected analytics and the platform badge are disabled. Other hosting/CDN technical request processing may still occur. The form has server-side validation, same-origin checks, a honeypot, a minimum-completion interval and a bounded request body; delivery is handled by the provider configured above. The endpoint does not save enquiry data. The interface includes semantic landmarks, a skip link, keyboard-operable navigation and diagrams, visible focus states, reduced-motion handling and print styles.

Review `CONTENT_DECISIONS.md` alongside page copy. Privacy, terms and investor notices are intentionally generic; owner/legal review is recommended before launch.
