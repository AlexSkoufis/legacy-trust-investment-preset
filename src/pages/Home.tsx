import { Page } from '../components/Page';
import { Opening } from '../sections/home/Opening';
import { Journey } from '../sections/home/Journey';
import { Disciplines } from '../sections/home/Disciplines';
import { Independence } from '../sections/home/Independence';
import { People } from '../sections/home/People';
import { Perspectives } from '../sections/home/Perspectives';
import { Conversation } from '../sections/home/Conversation';

const ORG = {
  '@context': 'https://schema.org',
  '@type': 'FinancialService',
  name: 'Legacy Trust',
  url: 'https://www.legacygr.com/',
  telephone: '+1-616-454-2852',
  faxNumber: '+1-616-451-3312',
  email: 'info@legacygr.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '99 Monroe Ave NW, Suite 600',
    addressLocality: 'Grand Rapids',
    addressRegion: 'MI',
    postalCode: '49503',
    addressCountry: 'US',
  },
  sameAs: ['https://www.linkedin.com/company/5187577/'],
};

export default function Home() {
  return (
    <Page
      title=""
      description="Legacy Trust is an independent trust bank in Grand Rapids, Michigan, providing investment management, trustee services, wealth planning and family office services. A redesign concept by CoreConcepts Design."
    >
      <script type="application/ld+json">{JSON.stringify(ORG)}</script>
      <Opening />
      <Journey />
      <Disciplines />
      <Independence />
      <People />
      <Perspectives />
      <Conversation />
    </Page>
  );
}
