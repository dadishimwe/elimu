# Elimu Africa — implementation plan

## Source understanding and factual boundaries

The corporate profile positions Elimu Africa as an Africa-focused infrastructure platform that develops, owns and operates purpose-built student accommodation and education-support infrastructure through PPP and BOOT concessions with national and sub-national governments. Its central proposition is that student housing is core education infrastructure. The DOCX supplies draft philosophy and audience copy; where it overstates claims relative to the profile, the profile governs.

The supplied documents do not establish project examples, performance statistics, confirmed partners, completed biographies, photography/renders, or an approved logo file. The email screenshot mentioned in the pasted brief was not attached. Do not publish source contact details, a U.S. street address, profile files, speaker notes or embedded metadata. Show only the registered location as Kigali, Rwanda; regional presence is Nairobi, Kigali and Johannesburg. Team entries stay limited to names, roles and cities. No contact destination is displayed. Do not imply actual investment returns, project cash flows, government-budget outcomes, certification, or operational performance beyond the profile's cautious wording.

## Revised implementation approach

Keep the existing Astro 7 / TypeScript / Vercel adapter stack, pinned pnpm lockfile, host-managed diagnostics, static prerendered public pages, and serverless contact/sitemap endpoints. Retain the supplied palette, self-hosted Libre Baskerville/Public Sans fonts, and the institutional editorial style. Continue to avoid stock, AI-generated buildings, mock campus photography, generic icon cards, decorative gradients, and false social proof. Hand-authored diagrams and SVG/CSS linework are the visual system, not substitutes for real photography.

Differentiate the inner routes rather than applying one cream hero, numbered list, and generic end treatment everywhere:

- Home retains its current dark editorial hero, abstract elevation, source-accurate PPP overview, audience links and central closing line.
- About remains a spacious cream editorial narrative with the corporate philosophy reachable from the primary navigation.
- Corporate Philosophy uses a contrasting dark/statement-led opening while keeping its sourced commitments.
- Governments places a two-party role-allocation diagram within a dark hero. The body no longer repeats diagram bullets; it explains the concession term/risk allocation and carefully bounded public-budget/support language.
- Investors receives a distinct capital-mobilisation flow: aligned GP/LP partners → milestone-based deployment → 25–30-year PPP/BOOT concession → long-term inflation-linked revenue profile. It is explicitly conceptual and contains no invented return, project economics, funding split or guarantee. Concise supporting copy covers investor partner classes, risk allocation, governance/reporting and concession logic without duplicate title/body text.
- Our Approach places the existing keyboard-operable lifecycle sequence within its own dark hero. Move the already-sourced EPC, operations and handback details into the relevant lifecycle stages and remove the separate section that repeats them. The rest of the page focuses on lifecycle design, inclusive/safe design, resilience, innovation, standards and accurately qualified ESG/certification wording.
- Team keeps the four exact name/role/city facts, adds a short sourced framing line, and introduces a schematic three-city leadership rail. The rail is a labeled diagram, not a geographic map or claim of branch offices.
- Contact uses the same labeled city-network motif for regional presence, separates the Kigali registered office, and keeps the audience-aware form.

Keep the “We don’t just build residences; we build futures.” line on Home and Contact, not as every page's closing block or a repeated footer tagline. Keep audience/page CTAs purposeful and route-specific. Use editorial full-bleed fields, hairlines, section-cut motifs and restrained short hover/focus/tab transitions. Preserve keyboard operation, strong focus contrast and `prefers-reduced-motion`; no auto-playing or scroll-triggered spectacle.

## Contact-abuse and privacy behavior

The Vercel-compatible endpoint continues to use same-origin validation, bounded request bodies, server validation, a honeypot, a minimum completion interval, clear errors, and configured Resend delivery; it stores no enquiry in an application database. Add a modest best-effort process-local limiter of five POST attempts per client address per 15-minute window, keyed by an ephemeral HMAC and bounded/expired in memory. It returns `429` plus `Retry-After`. This is not a distributed or launch-grade WAF: Vercel serverless instances do not share this memory. Document that distinction and retain shared Vercel/edge rate limiting as an owner setup item before broad promotion. Update the privacy notice to disclose temporary process-local anti-abuse use. Do not send a live test message; no Vercel account/configuration connector is available to inspect the deployed email settings or safely establish a test recipient/receipt.

## Environment, deployment and source ownership

Do not guess the public domain. Keep `PUBLIC_SITE_URL` blank until the owner selects a real production hostname; only then emit canonical/OpenGraph absolute URLs and sitemap entries. The user-provided `elimu-delta.vercel.app` is a live preview URL, not evidence of an owned production domain. GitHub reports no deployment record, and there is no Vercel MCP/account in this session, so do not claim mail delivery or deployment controls are verified. Do not deploy/publish from this pass; push the implementation to `https://github.com/dadishimwe/elimu.git` using the authorized GitHub connection and ordinary non-force Git history.

`app.config.ts`'s Manus CDN `logoUrl` is platform branding, not the public site favicon. Keep the existing required literal until the owner supplies approved identity artwork; do not elevate an unapproved mock mark into a public logo. Leave authentic photography and approved logo work as future owner-supplied assets.

## Project structure

- `src/content/site.ts` — structured page copy, navigation labels, exact team facts and route list.
- `src/layouts/BaseLayout.astro` — HTML shell, metadata, organization structured data, shared header/footer.
- `src/components/` — `SiteHeader`, `SiteFooter`, `ContactForm`, `AbstractElevation`, `PPPDiagram`, `LifecycleDiagram`, new `CapitalPathwayDiagram`, and new `CityNetwork`.
- `src/pages/` — Home, structured editorial routes, Contact, 404, and Vercel-compatible contact/sitemap endpoints.
- `src/styles/global.css` — design tokens, licensed local typography, responsive page-specific compositions, keyboard/motion/print behavior.
- `public/` — manifest, SVG/PNG favicons, OpenGraph art, static robots policy and included font-license text.
- Root — Astro/Vercel/TypeScript/pnpm config, `.env.example`, README, content-decision log, plan and outcome-based TODO.

## Design concept

**Movement:** institutional editorial design informed by contemporary architecture monographs and carefully typeset annual reports.

**Core principles:** factual restraint; architectural clarity; generous asymmetric whitespace; human-centered public value.

**Color philosophy:** deep navy-teal and blue signal institutional seriousness; cream and warm sand evoke paper and material samples; gold is a scarce annotation, not decoration. Use the supplied palette: `#0E2A35`, `#16384A`, `#3E4A52`, `#5F6870`, `#B9CBCF`, `#8FA6AC`, `#F4F1EA`, `#F7F5F0`, `#FCFBF8`, `#DDD6C8`, `#ECE7DD`, `#C9BFAB`, sparing `#C9A86A` and `#7A5C2C`.

**Layout paradigm:** editorial rails, asymmetric hero-and-diagram compositions, alternating full-width tonal bands, off-center rules and section numbers, with a broad reading column rather than centered marketing-card grids.

**Signature elements:** abstract elevations and section-cut SVG strokes; hairline dividers with dimension-like ticks; precise keyboard-readable PPP, capital-pathway, city-network and lifecycle diagrams.

**Interaction and motion:** mobile navigation and lifecycle controls work with keyboard and pointer. Use brief underline/arrow/focus transitions; no scroll-jacking, autoplay or essential animation. All motion yields to `prefers-reduced-motion`.

**Typography:** Libre Baskerville for display/headings; Public Sans for body/navigation. Self-host version-pinned Fontsource packages and include SIL Open Font License notices. Use compact uppercase eyebrows, readable line length and strong contrast.

**Brand essence:** Africa-focused education infrastructure developed with public partners; institutional, thoughtful, dependable.

**Voice:** direct, calm, evidence-led. Example lines: “Student housing is core education infrastructure.” “A clear allocation of roles and risk.”

**Wordmark:** restrained typographic “Elimu Africa” treatment; the unavailable skyline mark is not traced or recreated. The website wordmark remains text until approved identity files exist.

**Signature brand color:** deep navy-teal `#0E2A35`.

## Routes and serving

Page routes: `/`, `/about/`, `/corporate-philosophy/`, `/governments/`, `/investors/`, `/our-approach/`, `/team/`, `/contact/`, `/privacy/`, `/terms/`, `/investor-notice/`; exclude API, sitemap, static assets and 404 from `/manus-routes.json`. Vercel adapter server output contains prerendered HTML plus `/api/contact/` and `/sitemap.xml`. `pnpm build` creates `.vercel/output`; development listens on the existing `0.0.0.0:3000`. No Vercel domain, secrets, live deployment, or canonical origin is assumed.
