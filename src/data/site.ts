// Verified Legacy Trust content, sourced from legacygr.com (October 2026).
// Headlines written for this concept are marked `concept`; every factual
// statement elsewhere is taken from the published site.

export const CONTACT = {
  phone: '616.454.2852',
  phoneHref: 'tel:+16164542852',
  fax: '616.451.3312',
  email: 'info@legacygr.com',
  careersEmail: 'careers@legacygr.com',
  street: '99 Monroe Ave NW, Suite 600',
  city: 'Grand Rapids, MI 49503',
  mapHref: 'https://www.google.com/maps/search/?api=1&query=99+Monroe+Ave+NW+Suite+600+Grand+Rapids+MI+49503',
  clientLogin: 'https://legacytrust.ecx.seic.com/',
  linkedin: 'https://www.linkedin.com/company/5187577/',
  original: 'https://www.legacygr.com/',
};

export const ABOUT_LINE =
  'Legacy Trust is a Grand Rapids based wealth management and trust services firm that helps clients located around the United States with specialized, tailored financial planning and wealth management.';

export const MISSION =
  'It’s our mission to create lasting legacies by providing trusted advice and support that reduces the burden and worry of financial decisions.';

export type ServiceSlug = 'investment-management' | 'trustee-services' | 'wealth-planning' | 'family-office';

export type Service = {
  slug: ServiceSlug;
  n: string;
  name: string;
  /** concept headline */
  line: string;
  summary: string;
  image: string;
  imagePosition?: string;
  brochure?: string;
  people: string[];
  audiences: AudienceSlug[];
};

export const FAMILY_OFFICE_SERVICES = [
  'Bill Payment Services',
  'Comprehensive Client Reporting',
  'Strategic Tax Consulting',
  'Cash Management',
  'Generational Education',
  'Philanthropic Services',
  'Real Estate Services',
  'Coordinated Investment Management',
  'Financial Planning',
  'Fiduciary and Custodian Services',
];

export const SERVICES: Service[] = [
  {
    slug: 'investment-management',
    n: '01',
    name: 'Investment Management',
    line: 'A disciplined, thoughtful approach to growing what you have built.',
    summary:
      'We help you grow your legacy using a disciplined, thoughtful approach that emphasizes transparency, tax efficiency and simplicity. You can rely on us to construct a strategic, long-term asset allocation plan based on your unique goals instead of engaging in market timing or costly tactical shifts. We build sophisticated portfolios by investing in high-quality businesses across the globe.',
    image: 'photo/banner-team',
    imagePosition: '46% 50%',
    brochure: 'https://www.legacygr.com/wp-content/uploads/2023/08/LT-Investment-Management-1.pdf',
    people: ['steven-doorn', 'brian-balke', 'greg-barshied', 'andrew-otten', 'gavin-anderson'],
    audiences: ['business-owners', 'corporate-executives', 'retirees', 'multi-generational-families', 'foundations-endowments'],
  },
  {
    slug: 'trustee-services',
    n: '02',
    name: 'Trustee Services',
    line: 'Stewardship that protects your family long after the documents are signed.',
    summary:
      'We help you manage your wealth and secure your legacy for future generations. Our experienced Wealth Advisors work seamlessly with your estate planning attorney and other advisors to minimize taxes and fees, and ensure your assets are protected and able to provide for your family.',
    image: 'photo/banner-careers',
    imagePosition: '62% 50%',
    brochure: 'https://www.legacygr.com/wp-content/uploads/2023/08/LT-Trustee-Services-1.pdf',
    people: ['mark-periard', 'kelly-deridder', 'jeff-steeby'],
    audiences: ['business-owners', 'multi-generational-families', 'special-needs-families'],
  },
  {
    slug: 'wealth-planning',
    n: '03',
    name: 'Wealth Planning',
    line: 'In matters of wealth, details matter.',
    summary:
      'In matters of wealth, details matter. Your personal income and tax-planning needs are different from the next client. We turn your unique variables into a personal Wealth Plan with a strategy we’re confident will deliver repeatable outcomes.',
    image: 'photo/LT-Wealth-Planning',
    imagePosition: '50% 60%',
    brochure: 'https://www.legacygr.com/wp-content/uploads/2023/08/LT-Wealth-Planning-1.pdf',
    people: ['brian-moore', 'bill-harrison', 'collin-hartley'],
    audiences: ['corporate-executives', 'retirees', 'multi-generational-families'],
  },
  {
    slug: 'family-office',
    n: '04',
    name: 'Family Office',
    line: 'When family wealth meets the family dynamic.',
    summary:
      'When family wealth meets the family dynamic, you need specialized support services. A family office can do more than just unify your financial affairs. From coordinating your business, real estate, insurance, legal and financial teams to building financial fluency and philanthropic values across generations, we can help you ensure a meaningful and lasting legacy.',
    image: 'photo/beach-sunset',
    imagePosition: '62% 40%',
    people: ['mark-periard'],
    audiences: ['business-owners', 'multi-generational-families'],
  },
];

export type AudienceSlug =
  | 'business-owners'
  | 'corporate-executives'
  | 'retirees'
  | 'multi-generational-families'
  | 'special-needs-families'
  | 'foundations-endowments';

export type Audience = {
  slug: AudienceSlug;
  n: string;
  name: string;
  /** concept: a short question that opens the chapter */
  prompt: string;
  body: string;
  image: string;
  imagePosition?: string;
  alt: string;
  services: ServiceSlug[];
  insights: string[];
};

export const AUDIENCES: Audience[] = [
  {
    slug: 'business-owners',
    n: '01',
    name: 'Business Owners',
    prompt: 'You built something. Now make it work for you.',
    body:
      'You have worked hard. Now how can you make all of that work hard to support you and the rest of your aspirations? For many, a closely-held business functions as their primary source of wealth. At Legacy Trust, we can partner with you prior to and during a business transition or sale. Through the process, we’ll provide what’s needed, including investment services, trust counsel, even Family Office services.',
    image: 'photo/banner-legacy',
    imagePosition: '48% 50%',
    alt: 'Two colleagues walking and talking through a sunlit studio workspace.',
    services: ['investment-management', 'trustee-services', 'family-office'],
    insights: ['the-liquidity-event-you-didnt-plan-for', 'funding-your-trust'],
  },
  {
    slug: 'corporate-executives',
    n: '02',
    name: 'Corporate Executives',
    prompt: 'You already have a full-time job.',
    body:
      'Managing wealth is a full-time job. And since you already have one of those, we’re here to lessen the burden of time and stress. Our team is comprised of bright minds that understand corporate compensation packages, from 401K and pension plans to corporate stock, stock options and other deferred compensation, and can advise on tax-efficient transitions as you near retirement.',
    image: 'photo/Businesswoman',
    imagePosition: '42% 30%',
    alt: 'A professional woman with silver hair leaning on a railing outside a glass office building, looking ahead.',
    services: ['wealth-planning', 'investment-management'],
    insights: ['the-liquidity-event-you-didnt-plan-for', 'the-michigan-retirement-income-exemption'],
  },
  {
    slug: 'retirees',
    n: '03',
    name: 'Retirees',
    prompt: 'After a successful career, what comes next?',
    body:
      'After a successful career comes retirement. But what comes after that? If you’re already retired, Legacy Trust can help solidify your generational wealth transfer strategies and actively manage the risk in your portfolio through wealth and investment management, estate planning, insurance needs for medical care and other support services.',
    image: 'photo/beach-sunset',
    imagePosition: '62% 45%',
    alt: 'Grandparents and grandchildren with arms around each other, watching the sunset over a mountain lake.',
    services: ['wealth-planning', 'investment-management'],
    insights: ['the-michigan-retirement-income-exemption', 'estate-planning-essentials-ranking-the-documents-that-matter-most'],
  },
  {
    slug: 'multi-generational-families',
    n: '04',
    name: 'Multi-Generational Families',
    prompt: 'Wealth that lasts beyond one lifetime.',
    body:
      'Your wealth has the potential to build over generations. Our team works with you and your children to ensure your wealth lasts, through our investment management, insurance counsel, trust administration and philanthropic planning services. For some families, utilizing our specialized Family Office services provides an additional level of planning and control.',
    image: 'photo/LT-Family-Office',
    imagePosition: '45% 60%',
    alt: 'Three generations of a family setting an outdoor table together at golden hour.',
    services: ['family-office', 'trustee-services', 'investment-management'],
    insights: ['donor-advised-funds-a-flexible-way-to-give', 'funding-your-trust'],
  },
  {
    slug: 'special-needs-families',
    n: '05',
    name: 'Special Needs Families',
    prompt: 'Care, expertise, and a relationship close to home.',
    body:
      'We understand the complexity and delicacy of administering a special needs trust, not only through expertise, but also through personal experience. Our team takes care to assess the requirements, resources and desires of the beneficiary. We do this locally, knowing a close relationship with the family is imperative to meeting each member’s long-term needs.',
    image: 'photo/banner-services',
    imagePosition: '58% 40%',
    alt: 'An advisor leaning in to talk closely with an older man seated at a desk.',
    services: ['trustee-services', 'wealth-planning'],
    insights: ['funding-your-trust', 'estate-planning-essentials-ranking-the-documents-that-matter-most'],
  },
  {
    slug: 'foundations-endowments',
    n: '06',
    name: 'Foundations & Endowments',
    prompt: 'Serving today’s mission while building for tomorrow’s.',
    body:
      'Foundations and Endowments must balance the dual obligations to accumulate a pool of assets sufficient to build capital for future use while also providing a sufficient cash flow to support current needs. At Legacy Trust, we have extensive experience working alongside organizations in pursuit of this goal. As this balancing act has grown more challenging in recent years due to the low return environment, we believe that it is critical to apply a disciplined approach to develop a strategic investment plan that will put our Foundation clients in the best position to reach their goals without taking on unnecessary risk.',
    image: 'photo/LT-Trustee-Services',
    imagePosition: '60% 55%',
    alt: 'A board meeting around a long table in a bright room with tall windows.',
    services: ['investment-management'],
    insights: ['donor-advised-funds-a-flexible-way-to-give', 'valuations-and-returns-beyond-2025'],
  },
];

/** The Legacy Difference, verbatim from /about-us/the-legacy-difference/. */
export const DIFFERENCE = {
  headline: 'At Legacy Trust, we concentrate on three things: you, your family and the generations that follow.',
  intro: 'Each family is unique and your wealth management strategy should be too.',
  independence:
    'That’s why we remain an entirely independent trust-only bank. This independence gives us the ability to build programs and seize opportunities that are tailored to you and your family’s unique, personal situations.',
  pillars: [
    {
      title: 'The team you can trust.',
      body:
        'We don’t have a B team; every member is an experienced and proven contributor. Our people have earned the industry’s most prestigious certifications and designations, from Certified Financial Planners and Chartered Financial Analysts to JDs and MBAs, and they all come together to provide the best and most robust wealth management services the industry has to offer.',
    },
    {
      title: 'We’re built on independence.',
      body:
        'We recognize that there are no one-size-fits-all solutions when it comes to wealth planning, and we personalize our offerings and recommendations based on a client’s unique goals and objectives. Our independence allows our experienced advisors to provide fast and convenient decisions.',
    },
    {
      title: 'Integrity is the essential foundation of Legacy Trust.',
      body:
        'We do what’s right, and we do it to the highest standards of excellence and transparency. Every decision we make is weighed against the measure of integrity. Legacy Trust adheres to stringent capital adequacy standards and is guided by a highly distinguished Board of Directors who provide oversight and governance on a local level.',
    },
  ],
  story: [
    'William Walker and Robert Prevette founded Legacy Trust with a vision of delivering unparalleled wealth planning counsel with truly personal client service.',
    'For Bill and Bob, meaningful client connections were both a benefit of the job and a bridge to understanding and fulfilling the needs of everyone who walked through the doors. Whether it was alleviating the burden of managing wealth, securing a family legacy for future generations or navigating a challenging trust, Bill and Bob provided sound advice while creating relationships with clients that were enhanced by the local nature of their firm.',
    'They also believed in remaining steadfastly independent in their recommendations. To that end, they chose to create Legacy Trust as a chartered trust bank, which holds us to the highest standard of fiduciary responsibility, compliance and governance by a local board of directors. To this day, the entire management team and Board of Directors reside in West Michigan, ensuring decisions are made locally and never handed down by remote corporate officers.',
    'Today, the principles Bill and Bob established provide a solid foundation for Legacy Trust. Each and every relationship is important to us because helping you establish your legacy is part of our own.',
  ],
  anniversary:
    'As we mark the 20th anniversary of Legacy Trust, we take a moment to reflect. Our journey has been marked by significant milestones, robust growth, and the development of a diverse and comprehensive portfolio of services tailored to meet the evolving needs of our clients.',
  bestAndBrightest:
    'We’re honored to be a part of The Best and Brightest Companies to Work For® program, which recognizes companies that deliver exceptional human resource practices and an impressive commitment to their employees.',
};

export const SERVICES_INTRO =
  'We manage investments, administer trusts, and provide wealth management strategies designed to benefit families for generations. Our group is comprised of an unmatched combination of experts in wealth planning, investment management, trust services, and family office. And, we’re all right here, under one roof.';

export type NavItem = { label: string; to: string; children?: { label: string; to: string; note?: string }[] };

export const NAV: NavItem[] = [
  {
    label: 'About',
    to: '/about/the-legacy-difference',
    children: [
      { label: 'The Legacy Difference', to: '/about/the-legacy-difference', note: 'Independent by design' },
      { label: 'Our Team', to: '/about/our-team', note: 'The people behind the promise' },
      { label: 'Board of Directors', to: '/about/board-of-directors', note: 'Local oversight and governance' },
      { label: 'Careers', to: '/about/careers', note: 'Join a Best and Brightest company' },
    ],
  },
  {
    label: 'Services',
    to: '/services',
    children: [
      { label: 'All Services', to: '/services', note: 'Four disciplines, one relationship' },
      ...SERVICES.map((s) => ({ label: s.name, to: `/services/${s.slug}` })),
    ],
  },
  {
    label: 'Who We Serve',
    to: '/who-we-serve',
    children: AUDIENCES.map((a) => ({ label: a.name, to: `/who-we-serve/${a.slug}` })),
  },
  { label: 'Insights', to: '/insights' },
  { label: 'Contact', to: '/contact' },
];

export const AUTHORS: Record<string, string> = {
  'the-liquidity-event-you-didnt-plan-for': 'Bill Harrison, CFP®',
  'tariffs-1-year-later': 'Andrew Otten',
  'where-do-we-stand-with-tariffs': 'Andrew Otten',
  'donor-advised-funds-a-flexible-way-to-give': 'Collin Hartley, CFP®',
  'valuations-and-returns-beyond-2025': 'Greg Barshied, CFA',
  'bubble-jeopardy-the-differences-between-a-market-cycle-and-its-problematic-relative-the-financial-bubble': 'Gavin Anderson, CIMA®',
  'bitcoin-an-update-on-the-mercurial-cryptocurrency': 'Brian Balke, CFP®, CIMA®',
  'funding-your-trust': 'Brian Balke and Kelly DeRidder',
  'estate-planning-essentials-ranking-the-documents-that-matter-most': 'Brian Balke and Kelly DeRidder',
  'state-of-the-market': 'Brian Balke and Steve Doorn',
  '2026-portfolio-insights-fixed-income-and-cash': 'Brian Balke and Steve Doorn',
  '2026-market-and-economic-outlook': 'Brian Balke and Steve Doorn',
};
