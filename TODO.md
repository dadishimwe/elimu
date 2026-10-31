# TODO

## 1. Public site structure and source-faithful copy — complete
- Provide Home with a clear, sourced statement of what Elimu Africa is and whom it works with; short routes into the audience pages; and the closing line “We don’t just build residences; we build futures.”
- Provide About with the student housing challenge, who Elimu Africa is, mission and vision, five commitments, and the thesis that student housing is core education infrastructure.
- Provide Corporate Philosophy, For Governments, For Investors and Our Approach pages based on the supplied DOCX and corporate profile; use the profile’s more careful wording wherever claims conflict.
- Governments page states the PPP/BOOT model, government role, Elimu Africa role, benefits, 25–30 year concessions, delivery and operations. It does not claim no fiscal impact; it uses “minimal upfront fiscal commitment”, “limited call on public budgets”, and any support mechanism “sized and disclosed transparently”.
- Investor page covers PBSA as an asset class, institutional/impact investor categories, alignment of interests and capital mobilisation. It does not claim ESG/green compliance or returns not stated in the profile. PBSA is defined at first use.
- Approach page covers the 50-year lifecycle design, inclusive and safe design, resilience and life safety, innovation precinct, delivery certainty, ESG, safety and compliance. It says “designed to achieve EDGE or LEED Gold certification”, aligned with SDG 4 and SDG 11, and designed to meet or exceed national regulations and international standards.
- Team page shows only names, roles and cities exactly as in the deck: Dr Lumkile Mondi — Chairman — Johannesburg; Alfred Nicayenzi — Managing Director — Nairobi; Robert Fogler — Executive Director — Kigali; Mothusi Letlaka — Executive Director — Johannesburg. No `[One line of relevant experience]` placeholders are shown.
- Do not invent facts, statistics, projects, partners, clients, testimonials, awards, achieved certifications, dates, biographies, numbers or logos; omit missing information without visible TBD/Lorem ipsum. Do not name a facilities manager or partner. Do not publish a profile download or speaker notes.
- Do not publish private/personal email or phone, source deck contact details, a street address, pricing, budgets, hosting/project-management details, or internal notes. The only registered-address text is Kigali, Rwanda; listed regional presence is Nairobi, Kigali and Johannesburg. Email destinations are environment configuration and are not displayed.
- `CONTENT_DECISIONS.md` records material wording adjustments, mergers and omissions with their rationale.

## 2. Visual system, responsive UX and accessibility — complete
- Use the approved architectural editorial direction and supplied colors: `#0E2A35`, `#16384A`, `#3E4A52`, `#5F6870`, `#B9CBCF`, `#8FA6AC`, `#F4F1EA`, `#F7F5F0`, `#FCFBF8`, `#DDD6C8`, `#ECE7DD`, `#C9BFAB`, sparing `#C9A86A` and `#7A5C2C`.
- Use Libre Baskerville and Public Sans as the deck’s type pair; self-host font assets and include license notices.
- Use original abstract architectural SVG linework and sourced-accurate, keyboard-navigable PPP/BOOT and concession-lifecycle diagrams; no stock imagery, photos, AI-generated building renders, generic SaaS layout, gradients, fake social proof, emoji or clip-art.
- Make the site responsive and fast on mobile networks; use semantic landmarks, keyboard navigation, visible focus, accessible names and descriptions for actual images, high-contrast text and reduced-motion support.
- Add a 404 page, SVG and PNG favicon variants, and print-friendly styles.

## 3. SEO, sharing, route metadata and legal pages — complete
- Provide meaningful initial HTML and page-specific titles/descriptions for each public page route.
- Add Organization structured data, OpenGraph/social metadata and a visual-system social image. Do not guess the public domain or canonical URL; emit absolute canonical/social URLs only when the real HTTPS origin is configured.
- Provide `/manus-routes.json` listing all page routes and excluding endpoints, assets and 404-only routes; it must return JSON rather than SPA fallback HTML. Local response verified: HTTP 200, JSON, 11 page routes.
- Provide a privacy notice, terms of use and investor notice stating that investor content is informational only and not an offer or solicitation. Legal copy stays generic and factual; it does not invent legal specifics.
- Add no third-party trackers or cookie banner unless something actually implemented requires one; make the privacy notice match actual data handling. Project-level injected analytics are disabled and the Manus badge is hidden.

## 4. Contact form and delivery — implementation complete; mail configuration pending
- Provide an audience-aware Government / Investor / University / General contact form with client/server validation, spam mitigation, clear success/error states and no personal data retained beyond delivery needs.
- Read the recipient only from environment configuration, with `CONTACT_TO_EMAIL` as the general destination and optional category-specific destination variables; never hard-code or display a recipient address. Actual delivery must not be represented as available until the email-provider settings are configured.
- Mail delivery uses a configured Resend API account; `RESEND_API_KEY`, `CONTACT_FROM_EMAIL` and at least one recipient variable are currently absent. Until set in the deployment environment, the server returns an unavailable status and does not claim the enquiry was sent. The application does not store contact submissions.

## 5. Vercel build and operator documentation — complete
- Use a Vercel-compatible static-first framework build and serverless endpoint, include `.env.example`, and document local setup, content editing, environment variables and Vercel deployment in `README.md`.
- Keep copy and team information in structured source files; keep architecture ready for future French translation, biographies, projects, news and profile download without adding those items now.
- `pnpm check` and `pnpm build` succeed; Astro prerenders the public HTML routes and packages `/api/contact/` and `/sitemap.xml` for serverless serving. No live website has been published.

## 6. GitHub handoff — complete
- The initial implementation was pushed to the user-provided existing repository `https://github.com/dadishimwe/elimu.git` through the authorized GitHub connection, preserving existing repository content/history and without force-pushing. The target repository was confirmed public and empty (no default branch); the initial `main` branch was created with a normal push.
- The website was not published live; only source was built, validated and pushed as authorized.
