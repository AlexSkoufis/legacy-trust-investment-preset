// Pulls verified content from the public legacygr.com WordPress REST API and
// writes normalized JSON into src/data/. Source images land in assets-src/,
// which scripts/images.mjs turns into optimized WebP sets.
//
// Copy is normalized for this concept's house style: em and en dashes are
// rewritten (ranges become "to", asides become commas). Nothing is invented.
//
// Run: npm run content
import fs from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const API = 'https://www.legacygr.com/wp-json/wp/v2';
const DATA = path.join(root, 'src', 'data');
const SRC = path.join(root, 'assets-src', 'insights');
const UA = { 'User-Agent': 'Mozilla/5.0 (CoreConcepts redesign concept)' };

const get = async (url) => {
  const r = await fetch(url, { headers: UA });
  if (!r.ok) throw new Error(`${r.status} ${url}`);
  return r.json();
};

const ENT = {
  '&amp;': '&', '&#038;': '&', '&nbsp;': ' ', '&#160;': ' ', '&quot;': '"', '&#039;': "'",
  '&#8216;': '‘', '&#8217;': '’', '&#8220;': '“', '&#8221;': '”',
  '&#8230;': '…', '&hellip;': '…', '&#8211;': '–', '&#8212;': '—',
  '&rsquo;': '’', '&lsquo;': '‘', '&ldquo;': '“', '&rdquo;': '”',
};
const decode = (s) => s.replace(/&[#a-z0-9]+;/gi, (m) => ENT[m] ?? m);

/** House style: no em or en dashes anywhere in rendered copy. */
export const undash = (s) =>
  s
    .replace(/(\d)(?:\s*[–—]\s*|\s+-\s+)(present|Present|\d)/g, (_, a, b) => `${a} to ${b.toLowerCase()}`)
    .replace(/(\d{4})-(present|Present)/g, '$1 to present')
    // "<strong>Label</strong> — text" reads as a definition: use a colon.
    .replace(/(<\/strong>)\s*[–—]\s*/g, '$1: ')
    // A paired aside "A — B — C" becomes "A (B) C".
    .replace(/\s+[–—]\s+([^–—.]{2,160}?)\s+[–—]\s+/g, ' ($1) ')
    .replace(/\s*—\s*/g, ', ')
    .replace(/\s+–\s+/g, ', ')
    .replace(/–/g, '-')
    .replace(/,\s*,/g, ',')
    .replace(/,\s*([.:;])/g, '$1');

const clean = (s) => undash(decode(s)).replace(/\s+/g, ' ').trim();
const text = (html) => clean(html.replace(/<br\s*\/?>/g, ' ').replace(/<[^>]+>/g, ''));

/** Keep only inline formatting we render: strong, em, a[href]. */
const inline = (html) =>
  undash(
    decode(
      html
        .replace(/<br\s*\/?>/g, ' ')
        .replace(/<(\/?)b>/g, '<$1strong>')
        .replace(/<a [^>]*href="([^"]+)"[^>]*>/g, (_, h) => `<a href="${h}">`)
        .replace(/<(?!\/?(strong|em|a)\b)[^>]+>/g, ''),
    ),
  )
    .replace(/\s+/g, ' ')
    .trim();

// ---------------------------------------------------------------- people
const TEAM_ORDER = [
  ['tracey-hornbeck-2', 'tracey-hornbeck', 'executive'],
  ['mark-periard', 'mark-periard', 'executive'],
  ['melanie-vanderhoff', 'melanie-vanderhoff', 'executive'],
  ['steven-doorn', 'steven-doorn', 'executive'],
  ['kelly-deridder', 'kelly-deridder', 'advisory'],
  ['brian-moore', 'brian-moore', 'advisory'],
  ['jeff-steeby-cfp-atfa', 'jeff-steeby', 'advisory'],
  ['brian-balke', 'brian-balke', 'advisory'],
  ['bill-harrison-cfp', 'bill-harrison', 'advisory'],
  ['greg-barshied', 'greg-barshied', 'advisory'],
  ['andrew-otten', 'andrew-otten', 'advisory'],
  ['gavin-anderson', 'gavin-anderson', 'advisory'],
  ['collin-hartley', 'collin-hartley', 'advisory'],
  ['ashley-barrett', 'ashley-barrett', 'advisory'],
  ['hope-lee', 'hope-lee', 'advisory'],
  ['jeffrey-dixon', 'jeffrey-dixon', 'counsel'],
];
// Titles, phones and emails as published on /about-us/our-team/.
const CONTACT = {
  'tracey-hornbeck': ['President & CEO', '616-588-6896', 'thornbeck@legacygr.com', 'https://www.linkedin.com/in/traceyhornbeck'],
  'mark-periard': ['Senior Vice President, Director of Wealth Management', '616-588-6874', 'mperiard@legacygr.com', 'https://www.linkedin.com/in/mark-periard-7b48a4a'],
  'melanie-vanderhoff': ['Senior Vice President, Director of Operations & Risk Management', '616-588-6888', 'mvanderhoff@legacygr.com', 'http://www.linkedin.com/pub/melanie-vanderhoff/12/67a/249'],
  'steven-doorn': ['Senior Vice President, Chief Investment Officer', '616-588-6878', 'sdoorn@legacygr.com', ''],
  'kelly-deridder': ['Senior Vice President, Senior Wealth Advisor', '616-588-6895', 'kderidder@legacygr.com', 'https://www.linkedin.com/in/kelly-deridder-ctfa-02a67056/'],
  'brian-moore': ['Senior Vice President, Senior Wealth Advisor', '616-588-6879', 'bmoore@legacygr.com', ''],
  'jeff-steeby': ['Senior Vice President, Senior Wealth Advisor', '616-588-6877', 'jsteeby@legacygr.com', ''],
  'brian-balke': ['Vice President, Senior Portfolio Manager & Wealth Advisor', '616-588-6881', 'bbalke@legacygr.com', 'https://www.linkedin.com/in/brian-m-balke-cfp%C2%AE-cima%C2%AE-933ba32a/'],
  'bill-harrison': ['Wealth Advisor', '616-588-6882', 'wharrison@legacygr.com', 'https://www.linkedin.com/in/bill-harrison-7abb86a3/'],
  'greg-barshied': ['Portfolio Manager', '616-588-6885', 'gbarshied@legacygr.com', 'https://www.linkedin.com/in/gregbarshied/'],
  'andrew-otten': ['Associate Portfolio Manager', '616-588-8667', 'aotten@legacygr.com', 'https://www.linkedin.com/in/andrewotten/'],
  'gavin-anderson': ['Performance Analyst', '616-588-6886', 'ganderson@legacygr.com', 'https://www.linkedin.com/in/gavin-anderson-80698638/'],
  'collin-hartley': ['Associate Wealth Advisor & Wealth Planner', '616-588-6892', 'chartley@legacygr.com', 'https://www.linkedin.com/in/collin-hartley-480a51369/'],
  'ashley-barrett': ['Senior Client Service Associate', '616-588-6884', 'abarrett@legacygr.com', ''],
  'hope-lee': ['Senior Client Service Associate', '616-588-6889', 'hlee@legacygr.com', 'https://www.linkedin.com/in/hope-lee-422aab1a0/'],
  'jeffrey-dixon': ['Of Counsel', '', '', ''],
};

const BOARD = [
  ['larry-andrus', 'Larry R. Andrus', 'Founder & CEO', 'Andrus Advisors, LLC'],
  ['micki-benz', 'Micki M. Benz', 'Regional Communications & Advocacy', 'Mercy Health (Retired)'],
  ['carl-erickson', 'Carl Erickson', 'Founder', 'Atomic Object (Retired)'],
  ['steven-heacock', 'Steven R. Heacock', 'President & CEO', 'Grand Rapids WhiteWater (Retired)'],
  ['tracey-hornbeck', 'Tracey Hornbeck', 'President & CEO', 'Legacy Trust'],
  ['lynn-jekkals', 'Lynn Jekkals', 'Midwest Region Leader', 'Aon'],
  ['bill-lettinga', 'Bill Lettinga', 'President', 'Kentland Communities'],
  ['peter-perez', 'Peter M. Perez', 'Chairman', 'Carter Products Co.'],
  ['charles-secchia', 'Charles N. Secchia', 'Attico Ventures LLC', 'Sibsco LLC'],
  ['michelle-van-dyke', 'Michelle Van Dyke', 'President & CEO', 'Heart of West Michigan United Way'],
  ['daniel-webb', 'Daniel Webb', 'Chief Financial Officer', 'Meijer, Inc. (Retired)'],
  ['skot-welch', 'Skot Welch', 'Principal & Founder', 'Global Bridge Builders'],
];

const splitEntry = (line) => {
  const raw = decode(line).trim();
  const m = raw.match(/^(.*?)\s+[–—-]\s+(.*)$/);
  // "Org – Role" pairs; keep date ranges (digits on both sides) intact.
  if (m && !/\d$/.test(m[1]) && !/^\d/.test(m[2])) return { label: undash(m[1]).trim(), detail: undash(m[2]).trim() };
  return { label: clean(raw) };
};

async function people() {
  const all = await get(`${API}/people?per_page=100`);
  const team = [];
  for (const [wpSlug, slug, group] of TEAM_ORDER) {
    const p = all.find((x) => x.slug === wpSlug);
    if (!p) throw new Error(`missing person ${wpSlug}`);
    const [title, phone, email, linkedin] = CONTACT[slug];
    const html = p.content.rendered;
    const parts = html.split(/<h2[^>]*>(.*?)<\/h2>/);
    const intro = [...parts[0].matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g)].map((m) => text(m[1])).filter(Boolean);
    const sections = [];
    for (let i = 1; i < parts.length; i += 2) {
      const heading = text(parts[i]);
      const items = [...parts[i + 1].matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g)]
        .flatMap((m) => m[1].split(/<br\s*\/?>/))
        .map((l) => l.replace(/<[^>]+>/g, '').trim())
        .filter(Boolean)
        .map(splitEntry);
      if (items.length) sections.push({ heading, items });
    }
    const name = text(p.title.rendered);
    team.push({ slug, name, title, group, phone, email, linkedin, intro, sections, source: p.link.replace('tracey-hornbeck-2', 'tracey-hornbeck-2') });
  }
  const board = BOARD.map(([slug, name, role, org]) => ({ slug, name, role, org }));
  await fs.writeFile(path.join(DATA, 'people.json'), JSON.stringify({ team, board }, null, 2));
  console.log('people', team.length, 'board', board.length);
}

// --------------------------------------------------------------- insights
const ARTICLES = [
  // Perspectives (long form)
  'the-liquidity-event-you-didnt-plan-for',
  'funding-your-trust',
  'estate-planning-essentials-ranking-the-documents-that-matter-most',
  'the-michigan-retirement-income-exemption',
  'state-of-the-market',
  'tariffs-1-year-later',
  '2026-portfolio-insights-fixed-income-and-cash',
  '2026-market-and-economic-outlook',
  'donor-advised-funds-a-flexible-way-to-give',
  'valuations-and-returns-beyond-2025',
  'where-do-we-stand-with-tariffs',
  'bubble-jeopardy-the-differences-between-a-market-cycle-and-its-problematic-relative-the-financial-bubble',
  'bitcoin-an-update-on-the-mercurial-cryptocurrency',
  // News
  'brian-balke-among-crains-40-under-40-class-of-2026',
  'brian-balke-joins-heart-of-west-michigan-united-way-board',
  'hope-lee-joins-legacy-trust',
  'welcoming-bill-harrison-to-our-team',
  'legacy-trust-named-one-of-west-michigans-best-and-brightest-companies-to-work-for-2',
  'icles-66th-annual-probate-estate-planning-conference',
  'legacy-trust-leaders-named-to-crains-gr200',
  // In the community
  'legacy-trust-at-kids-food-basket',
  'legacy-at-wmsc-annual-golf-outing',
  'legacy-trust-at-davenport-universitys-40th-annual-scholarship-golf-classic',
  'an-evening-at-rendezoo',
  'economic-club-of-grand-rapids-annual-dinner',
  'legacy-trust-day-of-service-at-millennium-park',
];
const CATS = { 12: 'Perspectives', 13: 'News', 14: 'In The Community', 16: 'Market Summaries', 17: 'Market Snapshots', 18: 'Investment Insights' };

const download = async (url, file) => {
  const out = path.join(SRC, file);
  try {
    await fs.access(out);
    return true;
  } catch {}
  const r = await fetch(url, { headers: UA });
  if (!r.ok) return false;
  await fs.writeFile(out, Buffer.from(await r.arrayBuffer()));
  return true;
};

function blocks(html, slug, images) {
  const out = [];
  const re = /<(p|h[2-4]|ul|ol|figure|blockquote)[^>]*>([\s\S]*?)<\/\1>/g;
  let m;
  while ((m = re.exec(html))) {
    const [, tag, body] = m;
    if (tag === 'figure') {
      const yt = body.match(/youtube\.com\/embed\/([\w-]+)/);
      if (yt) {
        const title = (body.match(/title="([^"]+)"/) || [])[1] || 'Video';
        out.push({ t: 'video', id: yt[1], title: clean(title) });
        continue;
      }
      const img = body.match(/src="([^"]+)"/);
      if (img) {
        const name = `${slug}-${images.length + 1}`;
        images.push([img[1].replace(/-\d+x\d+(\.\w+)$/, '$1'), name]);
        const alt = (body.match(/alt="([^"]*)"/) || [])[1] || '';
        out.push({ t: 'img', src: name, alt: clean(alt) });
      }
      continue;
    }
    if (tag === 'ul' || tag === 'ol') {
      const items = [...body.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/g)].map((x) => inline(x[1])).filter(Boolean);
      if (items.length) out.push({ t: tag, items });
      continue;
    }
    const h = inline(body);
    if (!h) continue;
    if (tag.startsWith('h')) out.push({ t: 'h', text: text(body) });
    else if (/^<strong>[^<]+<\/strong>$/.test(h) && h.length < 140) out.push({ t: 'h', text: text(body) });
    else if (tag === 'blockquote') out.push({ t: 'quote', html: h });
    else out.push({ t: 'p', html: h });
  }
  return out;
}

async function insights() {
  await fs.mkdir(SRC, { recursive: true });
  const list = [];
  for (const slug of ARTICLES) {
    const [p] = await get(`${API}/posts?slug=${slug}&_embed=wp:featuredmedia`);
    if (!p) throw new Error(`missing post ${slug}`);
    const fm = p._embedded?.['wp:featuredmedia']?.[0];
    const images = [];
    if (fm?.source_url) images.push([fm.source_url, slug]);
    const body = blocks(p.content.rendered, slug, images);
    const ok = [];
    for (const [url, name] of images) if (await download(url, name + path.extname(new URL(url).pathname))) ok.push(name);
    const firstText = body.find((b) => b.t === 'p');
    const excerpt = firstText ? text(firstText.html) : '';
    list.push({
      slug,
      title: text(p.title.rendered),
      date: p.date.slice(0, 10),
      category: CATS[p.categories[0]] ?? 'News',
      image: fm?.source_url && ok.includes(slug) ? slug : null,
      excerpt: excerpt.length > 220 ? excerpt.slice(0, excerpt.lastIndexOf(' ', 210)) + '…' : excerpt,
      body: body.filter((b) => b.t !== 'img' || ok.includes(b.src)),
      source: p.link,
    });
    console.log('post', slug, body.length, 'blocks');
  }
  // Latest market research PDFs (category 16, 17), linked directly as on the original site.
  const research = [];
  for (const c of [17, 16]) {
    const posts = await get(`${API}/posts?categories=${c}&per_page=4`);
    for (const p of posts) {
      // These posts have no body; the original site links straight to the PDF
      // uploaded in the post's month (or the month named in the title).
      const title = text(p.title.rendered);
      const file = title.replace(/\s+/g, '-') + '.pdf';
      const months = [p.date.slice(0, 7).replace('-', '/'), title.slice(0, 7).replace('.', '/')];
      for (const m of new Set(months)) {
        const href = `https://www.legacygr.com/wp-content/uploads/${m}/${file}`;
        const r = await fetch(href, { method: 'HEAD', headers: UA });
        if (r.ok) {
          research.push({ title, date: p.date.slice(0, 10), category: /Summary/.test(title) ? 'Weekly Market Summary' : 'Market Snapshot', href });
          break;
        }
      }
    }
  }
  research.sort((a, b) => b.date.localeCompare(a.date));
  await fs.writeFile(path.join(DATA, 'articles.json'), JSON.stringify(Object.fromEntries(list.map((a) => [a.slug, a.body])), null, 2));
  // Lightweight index for listings; bodies load only on article pages.
  const index = list.map(({ body, ...meta }) => ({ ...meta, video: body.some((b) => b.t === 'video'), hero: body.find((b) => b.t === 'img')?.src ?? null }));
  await fs.writeFile(path.join(DATA, 'articles-index.json'), JSON.stringify({ articles: index, research }, null, 2));
  console.log('articles', list.length, 'research', research.length);
}

await fs.mkdir(DATA, { recursive: true });
await people();
await insights();
