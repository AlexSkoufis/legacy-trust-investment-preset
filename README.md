# Legacy Trust: A New Vision for Private Wealth

An **unsolicited redesign concept** for [Legacy Trust](https://www.legacygr.com/), the independent trust bank in Grand Rapids, Michigan, by [CoreConcepts Design](https://coreconcepts.design/). It is not an official Legacy Trust website and has not been commissioned or endorsed by Legacy Trust. Every page is `noindex`.

React 19 · TypeScript · Vite 8 · Tailwind CSS 4 · GSAP 3 (ScrollTrigger, Flip, SplitText) · Lenis · React Router 7 · Lucide.

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # typecheck + production build into ./dist
npm run preview    # serve ./dist on http://localhost:4173
```

## Content is real

`npm run content` pulls copy, bios, articles and research PDFs from the public legacygr.com WordPress REST API into `src/data/*.json`. Copy is normalized for house style: em and en dashes are rewritten (ranges become "to", paired asides become parentheses). Hand-curated verified copy (services, audiences, the Legacy Difference, careers, legal) lives in `src/data/site.ts` and `src/data/careers.ts`. Nothing (returns, AUM, testimonials, people) is invented.

`npm run images` builds responsive WebP ladders plus blur placeholders from `assets-src/` into `public/img/` and writes `src/data/image-manifest.json`. Several official banner photos ship with a baked-in dark overlay; the script lifts them.

## Structure

| Path | What |
|---|---|
| `src/sections/home/*` | The seven homepage chapters: Opening, Journey, Disciplines, Independence, People, Perspectives, Conversation |
| `src/pages/*` | Legacy Difference, Team, Person, Board, Careers, Services, ServiceDetail, Who We Serve, AudienceDetail, Insights, Article, Contact, Legal, 404 (all code-split) |
| `src/motion/gsap.ts` | Plugin registration and the declarative reveal engine (`data-reveal`, `data-parallax`, `data-drift`) |
| `src/motion/smooth.ts` | Lenis (fine pointers with motion allowed only) |
| `src/components/*` | Header (dropdowns + focus-trapped mobile menu), Footer, Page wrapper, Img, UI primitives |
| `qa/*` | Playwright audit scripts (below) |

## Motion rules

- Every animation lives in a `gsap.context` / `useGSAP` scope and reverts on unmount; `gsap.matchMedia` gates everything on `prefers-reduced-motion: no-preference`.
- Text reveals split **words only, with no overflow masks**, so nothing can clip ascenders or descenders, and the split is reverted as soon as the animation ends.
- Elements already on screen when a page mounts animate immediately; only below-the-fold elements wait for ScrollTrigger (starts are `clamp()`ed so triggers near the page end still fire).
- Without JavaScript nothing is hidden. Intro elements are gated by an `intro-pending` class with a 3s failsafe.
- One sticky (never pinned) folio on the homepage. No scroll hijacking; native scrolling on touch.

## QA

With `npm run preview` running:

```bash
node qa/audit.mjs                       # 29 routes x 8 widths: overflow, clipped text, invisible text, stuck reveals, header overlap, credit
node qa/audit.mjs 360,768,1440 "" all   # every bio and article too
node qa/selftest.mjs                    # proves the audit's detectors catch injected faults
node qa/nofold.mjs                      # above-the-fold reveals fire without scrolling
node qa/interact.mjs                    # menu, focus trap, dropdowns, tabs, accordion, filter, route transitions, contact, reduced motion
node qa/links.mjs                       # crawls all internal routes; checks external legacygr.com links
node qa/midanim.mjs                     # hero frames mid-animation
node qa/walk.mjs /route 1440            # viewport-by-viewport screenshots into qa/shots
```

The scripts use the Playwright Chromium in `%LOCALAPPDATA%/ms-playwright/chromium-1217`; adjust `exe` in each script for other machines. In Git Bash, set `MSYS_NO_PATHCONV=1` before passing a route argument.

## Deploy

It's a static SPA. Any static host works if unknown paths fall back to `index.html`:

- **Netlify**: `public/_redirects` is included. Build `npm run build`, publish `dist`.
- **Vercel**: `vercel.json` includes the rewrite and an `X-Robots-Tag: noindex` header.
- **Others**: configure a SPA fallback to `/index.html`.

`robots.txt` disallows all crawling. Keep it that way for an unsolicited concept.

## Known limits

- The contact form has no submission endpoint: it composes an email to info@legacygr.com in the visitor's mail app, and says so.
- Article copy is mirrored from legacygr.com at build time; run `npm run content` to refresh. Each article links to its original.
- Photography is limited to Legacy Trust's own published library (and their team and board portraits), so some images appear on more than one page.
