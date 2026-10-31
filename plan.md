# Elimu Africa — implementation plan

## Source understanding and factual boundaries

The corporate profile describes Elimu Africa as an Africa-focused infrastructure platform that develops, owns and operates purpose-built student accommodation and education-support infrastructure through PPP and BOOT concessions with national and sub-national governments. Its central proposition is that student housing is core education infrastructure. The DOCX supplies draft corporate philosophy and audience copy; where it makes stronger claims than the profile, the profile governs the published wording.

The supplied source package does not establish project examples, performance statistics, confirmed partners, completed biographies, photography/renders, or an approved logo file. The email screenshot mentioned in the pasted brief was not attached. Do not publish the slide-deck email, domain, U.S. street address, source documents, embedded metadata, speaker notes, or profile download. Show the registered location only as Kigali, Rwanda; regional presence may be stated as Nairobi, Kigali and Johannesburg. Team entries are limited to exact supplied names, roles and cities. No contact destination is displayed.

## Implementation approach

Use Astro with TypeScript and the Vercel adapter. Regular public pages are statically prerendered as HTML; only the contact handler and sitemap require the adapter's serverless runtime. Keep copy, team and navigation in structured TypeScript. Use self-hosted font packages, with license texts committed under `public/licenses/`. Do not add a database, cookies, third-party tracking, stock photography, AI-generated imagery, unsupported building renders or a corporate-profile download. Use hand-authored abstract SVG linework and source-accurate, keyboard-readable PPP/BOOT and lifecycle diagrams.

The audience-aware form validates on both client and server, applies same-origin checking, a honeypot, a minimum completion interval and request limits, then hands an enquiry to the explicitly configured mail provider. It does not store the enquiry in this application and it must not claim delivery before configuration. Recipient selection comes from environment variables; category-specific values can be used where desired, with `CONTACT_TO_EMAIL` as the general fallback.

Public URLs remain host-agnostic. Only when the owner sets `PUBLIC_SITE_URL` to the chosen production HTTPS origin do prerendered pages emit canonical/social URLs and the dynamic sitemap emit absolute page entries. Never add a guessed domain. `robots.txt` allows page discovery and disallows the API route.

## Project structure

- `src/content/site.ts` — structured page copy, route/navigation labels, five commitments, leadership facts and the public route list.
- `src/layouts/BaseLayout.astro` — semantic document shell, shared navigation/footer, canonical and OpenGraph metadata, and Organization JSON-LD.
- `src/components/` — accessible header/footer, contact form, abstract elevation illustration, PPP allocation diagram and lifecycle diagram.
- `src/pages/` — static Home, About, Corporate Philosophy, Governments, Investors, Our Approach, Team, Contact, Privacy Notice, Terms, Important Notice and 404 pages; `/api/contact` and `/sitemap.xml` are serverless endpoints.
- `src/styles/global.css` — design tokens, self-hosted font imports, responsive editorial styling, reduced-motion rules and print styles.
- `public/` — route manifest, SVG and PNG favicons, PNG social-share artwork, original SVG illustration, robots policy, and bundled font licenses.
- Root project files — Astro/Vercel/TypeScript/pnpm configuration, `.env.example`, `app.config.ts`, `README.md`, `CONTENT_DECISIONS.md`, this plan and `TODO.md`.

## Design concept

**Movement:** institutional editorial design informed by contemporary architecture monographs and carefully typeset annual reports.

**Core principles:** factual restraint; architectural clarity; generous, asymmetric whitespace; human-centered public value.

**Color philosophy:** deep navy-teal and blue signal institutional seriousness; cream and warm sand create the tactile calm of paper and material samples; gold is a scarce editorial annotation, not decoration. Use the supplied palette: `#0E2A35`, `#16384A`, `#3E4A52`, `#5F6870`, `#B9CBCF`, `#8FA6AC`, `#F4F1EA`, `#F7F5F0`, `#FCFBF8`, `#DDD6C8`, `#ECE7DD`, `#C9BFAB`, sparing `#C9A86A` and `#7A5C2C`.

**Layout paradigm:** editorial rails with a broad reading column, alternating dark/light fields, off-center rules and section numbers, and deliberate text/diagram asymmetry rather than centered marketing-card grids.

**Signature elements:** abstract elevations and section-cut SVG strokes; hairline dividers with dimension-like ticks; precise, keyboard-readable PPP and concession lifecycle diagrams.

**Interaction and motion:** mobile navigation and diagrams work with keyboard and pointer. Motion is limited to subtle navigation/hover-state cues; no scroll-jacking or essential animation. All motion yields to `prefers-reduced-motion`.

**Typography:** Libre Baskerville for display and headings; Public Sans for body and navigation. The fonts are self-hosted from version-pinned Fontsource packages with their SIL Open Font License text included. Use compact uppercase eyebrows, readable line length and strong contrast.

**Brand essence:** Africa-focused education infrastructure developed with public partners; institutional, thoughtful, dependable.

**Voice:** direct, calm, evidence-led. Example lines: “Student housing is core education infrastructure.” “A clear allocation of roles and risk.”

**Wordmark:** restrained typographic “Elimu Africa” treatment; the unavailable skyline mark is not traced or recreated. The website wordmark remains text and can be replaced with approved identity files later.

**Signature brand color:** deep navy-teal `#0E2A35`.

## Routes and serving

Page routes are `/`, `/about/`, `/corporate-philosophy/`, `/governments/`, `/investors/`, `/our-approach/`, `/team/`, `/contact/`, `/privacy/`, `/terms/`, `/investor-notice/`, and the actual not-found page. The `/api/contact/` endpoint and `/sitemap.xml` are excluded from the page route manifest. The Vercel adapter's server output contains prerendered static pages plus the small serverless endpoints; `pnpm build` creates `.vercel/output`. The development listener uses the initialized port 3000 at `0.0.0.0`. No Vercel domain, secret, email address, live deployment, or public canonical URL is assumed.
