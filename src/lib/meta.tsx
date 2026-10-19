const SUFFIX = 'Legacy Trust (Redesign Concept)';

/** React 19 hoists these into <head>. Every page is noindex: this is an unsolicited concept. */
export function Meta({ title, description, image = '/og.jpg' }: { title: string; description: string; image?: string }) {
  const full = title ? `${title} | ${SUFFIX}` : `Legacy Trust | A New Vision for Private Wealth (Redesign Concept)`;
  return (
    <>
      <title>{full}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="noindex, nofollow" />
      <meta property="og:title" content={full} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Legacy Trust Redesign Concept by CoreConcepts Design" />
      <meta name="twitter:card" content="summary_large_image" />
    </>
  );
}
