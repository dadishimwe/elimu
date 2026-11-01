export type ContentItem = { title: string; text: string };
export type ContentSection = {
  eyebrow?: string;
  title: string;
  type: 'prose' | 'list' | 'columns' | 'statement' | 'values';
  text?: string[];
  items?: ContentItem[];
};
export type ContentPage = {
  slug: string;
  navTitle?: string;
  title: string;
  description: string;
  eyebrow: string;
  intro: string;
  sections: ContentSection[];
};

export const navItems = [
  { href: '/about/', label: 'About' },
  { href: '/corporate-philosophy/', label: 'Corporate Philosophy' },
  { href: '/governments/', label: 'For Governments' },
  { href: '/investors/', label: 'For Investors' },
  { href: '/our-approach/', label: 'Our Approach' },
  { href: '/team/', label: 'Team' },
] as const;

export const commitments: ContentItem[] = [
  {
    title: 'Public interest first',
    text: 'Projects are structured to maximise educational outcomes, safety, affordability and long-term public value.',
  },
  {
    title: 'Execution certainty',
    text: 'On-time, on-budget delivery through de-risked contracting and proven partners.',
  },
  {
    title: 'Institutional governance',
    text: 'International best practice in PPP governance, risk allocation and transparency.',
  },
  {
    title: 'Sustainability and ESG',
    text: 'Environmental performance, social inclusion and resilience, embedded from design through operations.',
  },
  {
    title: 'Long-term stewardship',
    text: 'Assets operated responsibly across the concession and returned in defined handback condition.',
  },
];

export const team = [
  { name: 'Dr Lumkile Mondi', role: 'Chairman', city: 'Johannesburg' },
  { name: 'Alfred Nicayenzi', role: 'Managing Director', city: 'Nairobi' },
  { name: 'Robert Fogler', role: 'Executive Director', city: 'Kigali' },
  { name: 'Mothusi Letlaka', role: 'Executive Director', city: 'Johannesburg' },
] as const;

export const pages: ContentPage[] = [
  {
    slug: 'about',
    navTitle: 'About',
    title: 'Built for education infrastructure',
    description: 'Who Elimu Africa is, the student housing challenge, its mission and vision, and the commitments that guide its work.',
    eyebrow: 'About Elimu Africa',
    intro: 'An Africa-focused infrastructure platform that develops, owns and operates purpose-built student accommodation and education-support infrastructure under PPP and BOOT concessions, in partnership with national and sub-national governments.',
    sections: [
      {
        eyebrow: 'The challenge',
        title: 'Africa’s student housing deficit is holding back its human capital',
        type: 'columns',
        items: [
          { title: 'Enrolment', text: 'Tertiary enrolment is growing faster than the supply of safe, affordable beds.' },
          { title: 'Outcomes', text: 'Poor accommodation undermines attendance, safety and academic performance.' },
          { title: 'Competitiveness', text: 'Without quality housing, universities struggle to attract students, researchers and talent.' },
        ],
      },
      {
        eyebrow: 'The platform',
        title: 'Student housing as core education infrastructure',
        type: 'statement',
        text: ['We treat student housing as core education infrastructure. Built well, it anchors university, industry and government around skills development, research excellence, innovation and talent retention.'],
      },
      {
        eyebrow: 'Our mission',
        title: 'Partnering for future-ready places to learn',
        type: 'prose',
        text: ['To partner with governments to deliver future-ready student accommodation and education infrastructure that enhances learning, accelerates human capital development and supports inclusive growth.'],
      },
      {
        eyebrow: 'Our vision',
        title: 'A preferred private-sector partner',
        type: 'prose',
        text: ['To be the preferred private-sector partner to African governments for institutional-grade education infrastructure, delivered through transparent, bankable PPP structures.'],
      },
      {
        eyebrow: 'Our values',
        title: 'Five commitments guide every project',
        type: 'values',
        items: commitments,
      },
      {
        eyebrow: 'Our thesis',
        title: 'Student housing is core education infrastructure',
        type: 'statement',
        text: ['Built well, it anchors Research Triangle-style ecosystems, where university, industry and government converge to develop a nation’s most critical resource: its human capital.'],
      },
    ],
  },
  {
    slug: 'corporate-philosophy',
    title: 'Our Corporate Philosophy',
    description: 'Elimu Africa’s corporate philosophy for student residences, student experience, wellbeing and community.',
    eyebrow: 'Corporate Philosophy',
    intro: 'At Elimu Africa, our corporate philosophy is rooted in a commitment to excellence in every facet of student residences.',
    sections: [
      {
        title: 'Places to stay, spaces to grow',
        type: 'prose',
        text: [
          'We design, build and operate modern, functional facilities that go beyond providing a place to stay. We create vibrant communities where students can excel academically, socially and personally. Our commitments include environmental performance, social inclusion and resilience from design through operations.',
          'We prioritise superior student experience and physical and mental wellness in a secure, supportive environment. Our residences are dynamic spaces where connections are made, collaboration flourishes and holistic growth is encouraged.',
          'We are dedicated to nurturing the leaders of tomorrow by creating environments that inspire learning, innovation and leadership.',
        ],
      },
    ],
  },
  {
    slug: 'governments',
    navTitle: 'For Governments',
    title: 'Public partnership, delivered through concession',
    description: 'Elimu Africa’s public–private partnership and BOOT concession model for student accommodation and education infrastructure.',
    eyebrow: 'For Governments',
    intro: 'Elimu Africa collaborates with national and sub-national governments to develop purpose-built student accommodation and education-support infrastructure through long-term public concessions.',
    sections: [
      {
        eyebrow: 'Concession terms',
        title: 'A defined term and a clear allocation of risk',
        type: 'prose',
        text: ['Concessions are structured for 25–30 years, with risk allocated to the party best able to manage it.'],
      },
      {
        eyebrow: 'Public budgets and support',
        title: 'Commitments are made transparently',
        type: 'columns',
        items: [
          { title: 'Minimal upfront fiscal commitment', text: 'Faster delivery with a limited call on public budgets.' },
          { title: 'Predictable service', text: 'Service expectations are contractually defined.' },
          { title: 'Transparent support', text: 'Any support mechanism is sized and disclosed transparently.' },
        ],
      },
    ],
  },
  {
    slug: 'investors',
    navTitle: 'For Investors',
    title: 'Structured for patient institutional capital',
    description: 'Elimu Africa’s approach to mobilising institutional and impact capital for purpose-built student accommodation.',
    eyebrow: 'For Investors',
    intro: 'Purpose-built student accommodation (PBSA) is an asset class linked to education infrastructure.',
    sections: [
      {
        eyebrow: 'Potential partners',
        title: 'Institutional and impact capital',
        type: 'prose',
        text: ['The corporate profile identifies pension funds, sovereign wealth funds, development finance institutions, and ESG and impact infrastructure investors as potential partner classes.'],
      },
      {
        eyebrow: 'Risk, governance and the long view',
        title: 'Clear responsibility across the asset lifecycle',
        type: 'prose',
        text: ['Under the PPP/BOOT model, private finance supports design, construction and operations. Delivery, financing and operational risks are allocated to the party best able to manage them; operations and maintenance are fully priced across the lifecycle, and assets are handed back at concession end.', 'The profile describes transparent governance and reporting and frames the proposition as bankable, financeable and sustainable over the full concession term. Project-specific cash flows, returns and negotiated investor terms are not provided on this site.'],
      },
    ],
  },
  {
    slug: 'our-approach',
    navTitle: 'Our Approach',
    title: 'Designed for the full concession lifecycle',
    description: 'Elimu Africa’s approach to delivery, operations, inclusive asset design, resilience and standards.',
    eyebrow: 'Our Approach',
    intro: 'A student residence is planned as a live–learn asset, with design, construction, operation, safety and stewardship considered across the concession.',
    sections: [
      {
        eyebrow: 'Asset concept',
        title: 'A permanent, inclusive live–learn asset',
        type: 'list',
        items: [
          { title: '50-year lifecycle design', text: 'Structure and systems exceed statutory minimums, with materials chosen through lifecycle cost analysis to protect long-term value.' },
          { title: 'Inclusive and safe by design', text: 'Accessibility above code and gender-responsive security, including female-only floors, biometric access and 24/7 female security staff.' },
          { title: 'Resilience and life safety', text: 'Category II seismic resilience and international fire and life-safety standards.' },
          { title: 'Innovation precinct', text: 'Digital infrastructure, wellness, dining, innovation space and retail in one mixed-use setting, built for the Fourth Industrial Revolution.' },
        ],
      },
      {
        eyebrow: 'ESG, safety and compliance',
        title: 'Designed to meet or exceed applicable standards',
        type: 'list',
        items: [
          { title: 'Building certification and standards', text: 'Designed to achieve EDGE or LEED Gold green building certification, and designed to meet or exceed national regulations and international standards.' },
          { title: 'Sustainable development', text: 'Aligned with SDG 4 (Quality Education) and SDG 11 (Sustainable Cities).' },
          { title: 'Health, safety and security', text: 'Robust health, safety and security systems.' },
        ],
      },
    ],
  },
  {
    slug: 'team',
    navTitle: 'Team',
    title: 'The people behind the platform',
    description: 'Leadership at Elimu Africa. Names, roles and cities are shown as listed in the corporate profile.',
    eyebrow: 'Leadership',
    intro: '',
    sections: [],
  },
  {
    slug: 'privacy',
    title: 'Privacy Notice',
    description: 'How this website handles information submitted through the contact form.',
    eyebrow: 'Legal',
    intro: 'This notice describes the information handling intended for the Elimu Africa website.',
    sections: [
      {
        title: 'Information submitted through the contact form',
        type: 'prose',
        text: ['If you submit the contact form, the information you provide is used to respond to your enquiry and delivered to Elimu Africa’s configured contact destination through the configured email service. The website does not maintain an application database of contact submissions. Delivery-provider logs or copies may be governed by that provider’s own practices.', 'To limit repeated submissions, the application allows up to five contact attempts per client address in a 15-minute period within a running server instance. It uses a temporary one-way keyed identifier derived from the request address in process memory; entries expire after 15 minutes and are not written to an application database. Different serverless instances do not share this limit. The hosting provider may independently process technical request information.', 'Do not include sensitive personal information in a message. Contact delivery is unavailable until the required email configuration is in place.'],
      },
      {
        title: 'Website analytics and cookies',
        type: 'prose',
        text: ['The website does not add third-party advertising trackers or analytics cookies. The site’s basic page navigation does not require an account. Hosting infrastructure may process technical request information to serve and protect the website.'],
      },
      {
        title: 'Questions',
        type: 'prose',
        text: ['For a privacy enquiry, use the contact form and select General.'],
      },
    ],
  },
  {
    slug: 'terms',
    title: 'Terms of Use',
    description: 'General terms for using the Elimu Africa website and its informational content.',
    eyebrow: 'Legal',
    intro: 'This website provides general information about Elimu Africa and its approach to student accommodation and education infrastructure.',
    sections: [
      {
        title: 'Informational content',
        type: 'prose',
        text: ['Website content is provided for general information. It may be updated as the organisation’s information develops. This page does not set out project-specific terms.'],
      },
      {
        title: 'External services',
        type: 'prose',
        text: ['The website may be delivered using hosting and email service providers. Their services are subject to the terms and policies they publish.'],
      },
      {
        title: 'Contact',
        type: 'prose',
        text: ['Questions about this website may be sent through the contact form.'],
      },
    ],
  },
  {
    slug: 'investor-notice',
    title: 'Important Notice',
    description: 'Important notice regarding the informational, non-offer nature of investor-facing website content.',
    eyebrow: 'Investor information',
    intro: 'The investor-facing material on this website is for informational purposes only.',
    sections: [
      {
        title: 'No offer or solicitation',
        type: 'prose',
        text: ['Nothing on this website constitutes an offer or solicitation. Investor-facing content is provided for informational purposes only.'],
      },
    ],
  },
];

export const getPage = (slug: string) => pages.find((page) => page.slug === slug);

export const pageRoutes = [
  '/',
  ...pages.map((page) => `/${page.slug}/`),
  '/contact/',
];
