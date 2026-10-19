// Open positions as published on legacygr.com/about-us/careers/ (October 2026).

export type Job = {
  id: string;
  title: string;
  status: string;
  hours: string;
  location: string;
  summary: string[];
  sections: { heading: string; items: string[] }[];
  closing?: string;
};

export const CAREERS_INTRO =
  'We’re proud to be recognized as one of West Michigan’s Best and Brightest Companies to Work For®. Our mission is to create lasting legacies by providing trusted advice and support that reduces the burden and worry of financial decisions, and we want people to join our team that share this philosophy.';

export const BENEFITS =
  'As one of West Michigan’s “Best and Brightest Companies”, Legacy Trust prides itself on our organizational values as we provide an active, entrepreneurial team environment focused on our stakeholders, our employees, and our clients. Our comprehensive and competitive compensation and benefits programs include health, dental, disability and life insurance as well as a 401(k) plan, generous leave program and onsite fitness center.';

export const EEO =
  'Legacy Trust provides equal employment opportunities to all employees and applicants for employment and prohibits discrimination and harassment of any type without regard to race, color, religion, age, sex, national origin, disability status, genetics, protected veteran status, sexual orientation, gender identity or expression, or any other characteristic protected by federal, state or local laws.';

export const JOBS: Job[] = [
  {
    id: 'wealth-advisor',
    title: 'Wealth Advisor',
    status: 'Exempt',
    hours: '8:30 am to 5:00 pm',
    location: 'Grand Rapids, MI',
    summary: [
      'Legacy Trust, a private investment and wealth management firm located in downtown Grand Rapids, has a great opportunity for a motivated individual to join our team as a Wealth Advisor.',
      'The Wealth Advisor will serve as the primary financial advisor providing individualized solutions to high net-worth clients in an effort to preserve and deepen Legacy Trust’s valued relationships. The Wealth Advisor will develop wealth plans that address retirement strategies, risk management, preservation of wealth, accumulation, asset allocation, and wealth transfer strategies.',
    ],
    sections: [
      {
        heading: 'Essential Responsibilities',
        items: [
          'Applies advanced knowledge of financial investments, federal and state taxes, services, and strategies to provide proactive holistic advance and financial planning regarding complex financial issues impacting the affluent market. Develops rapport with diverse range of personalities and effectively incorporates wealth planning techniques.',
          'Collaborates with a customized team of specialists to deliver high-quality client service.',
          'Ensures service standards and metrics are met based on client needs, segmentation, asset allocation, and risk management.',
          'Partners and leverages internal and external service providers to optimize effectiveness and efficiency.',
          'Provide Trustee services when Legacy Trust is named as trustee.',
        ],
      },
      {
        heading: 'Client Relationship Responsibilities',
        items: [
          'Conducts comprehensive reviews to analyze financial data and provide recommendations for modifications based on client’s risk tolerance, goals, objectives and individual preferences. Provides comprehensive financial planning and consultations.',
          'Coordinates client relationships to ensure the Legacy Trust client experience is delivered.',
          'Coordinates and collaborates with other advisors of clients.',
          'Resolves problems as trusted advisor for clients.',
          'Provides the client with current trends and commands a thorough knowledge of investment products, financial planning, taxes and market dynamics.',
          'Develops and executes an annual account servicing plan appropriate for the service standards, including conducting periodic reviews and leveraging the appropriate specialists.',
        ],
      },
      {
        heading: 'Business Development Responsibilities',
        items: [
          'Prospects for clients in a New Business Development capacity by sourcing and building own pipeline of clients and opportunities.',
          'Demonstrates highly developed sales, client contact and relationship management skills.',
          'Earns referrals from clients, third party advisors (e.g. Attorney, accountant), and other Centers of Influence.',
          'Existing book of business is welcomed but not required.',
        ],
      },
      {
        heading: 'Education & Experience',
        items: [
          'Bachelor’s degree specializing in Finance or equivalent work experience. Advanced degree or professional certification required or being actively pursued.',
          'Five (5) or more years of experience in high net-worth client service and business development.',
          'CFP, CTFA, CPA, JD or comparable background is preferred.',
          'Is proficient and understands income, gift, estate, generation and fiduciary taxes.',
        ],
      },
      {
        heading: 'Other Knowledge, Skills & Abilities',
        items: [
          'Knowledge of current trends in Wealth Management and works with specialists to keep up-to-date on products and services.',
          'Market focused and results driven with proven track record in revenue growth operating in highly competitive market.',
          'Demonstrates strong interpersonal, negotiation, and exceptional written and oral communications skills.',
          'Effective problems-solving and analytical skills.',
          'Ability to function within a small, fast-growing business, with the flexibility to balance competing priorities.',
          'Ability to travel for events and meetings approximately 20% of the time.',
          'Team orientation and ability to work with executives, managers, team members, clients, other advisors, and vendors in a collegial setting, to achieve individual and mutual goals in a rapidly transforming organization.',
        ],
      },
    ],
  },
  {
    id: 'estate-trust-administrator',
    title: 'Wealth Advisor, Estate & Trust Administrator',
    status: 'Exempt',
    hours: '8:30 am to 5:00 pm',
    location: 'Grand Rapids, MI',
    summary: [
      'The Wealth Advisor, Estate & Trust Administrator will serve as an advisor who will help lead the handling estate, trust, and fiduciary administrations. Legacy is seeking a detail oriented and client-focused estate and trust administrator to join our wealth advisor team. The role is primarily responsible for administering trusts, estates, and fiduciary accounts and providing exception service to clients, beneficiaries, attorneys, accountants and other professionals.',
      'In addition to the administrator focus, the role will also include the assignment of wealth management clients providing individualized solutions to preserve and deepen Legacy Trust’s high-net-worth client relationships. The advisor will conduct comprehensive reviews to include asset allocation, retirement strategies, risk management, preservation of wealth, accumulation and wealth transfer strategies. No book of business is required and significant business development will not be an expected part of this role.',
    ],
    sections: [
      {
        heading: 'Essential Trust and Estate Administration Responsibilities',
        items: [
          'Administer trust, estate and fiduciary accounts in accordance with governing documents, applicable laws, and fiduciary standards.',
          'Oversee disbursements, receipts, and documentation in accordance with internal procedures.',
          'Communicate effectively with beneficiaries, clients, attorneys, CPAs and internal partners.',
          'Maintain account information and accurate records in trust accounting and other systems.',
          'Assist in the valuation and inventory of estate and trust assets, including real estate and business interests.',
          'Support the preparation and filing of income, fiduciary and estate tax returns.',
          'Monitor deadlines for tax filings, distributions, and reporting requirements.',
          'Prepare documentation for trust committee reviews and audits.',
        ],
      },
      {
        heading: 'Essential Wealth Advising and Client Relationship Responsibilities',
        items: [
          'Applies advanced knowledge of financial products, services, and strategies to provide proactive holistic advance and financial planning regarding complex financial issues impacting the affluent market. Develops rapport with diverse range of personalities.',
          'Identifies, assembles and collaborates with a customized team of specialists to deliver high-quality client service.',
          'Conducts comprehensive reviews to analyze financial data and provide recommendations for modifications based on client’s risk tolerance, goals, objectives and individual preferences. Provides comprehensive financial planning and consultations.',
          'Coordinates client relationship to ensure the Legacy Trust client experience is delivered.',
          'Resolves problems as primary contact for client issues.',
          'Develops and executes an annual account servicing plan appropriate for the service standards, including conducting periodic reviews and leveraging the appropriate specialist to ensure client’s needs are being met.',
          'Ensures service standards and metrics are met based on needs, segmentation, asset allocation, and risk management.',
          'Partners and leverages internal and external service providers to optimize effectiveness and efficiency.',
        ],
      },
      {
        heading: 'Education & Experience',
        items: [
          'Bachelor’s degree or equivalent work experience. JD, CFP, CTFA or comparable background is preferred, or experience as a paralegal in estate and trust administration.',
          '2 to 10 years of experience in estate and trust administration and/or wealth management.',
          'Experience in dealing with high-net-worth clients.',
        ],
      },
      {
        heading: 'Other Knowledge, Skills & Abilities',
        items: [
          'Knowledge of current trends in wealth management and estate administration.',
          'Demonstrates strong interpersonal negotiation and exceptional written and oral communications skills.',
          'Uses effective problems-solving and analytical skills.',
        ],
      },
    ],
    closing: 'This is considered an in-office position working Monday through Friday.',
  },
];
