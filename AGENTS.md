<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Markdown for agents

Pages answer with markdown when a request carries `Accept: text/markdown`
(`proxy.ts` → `app/md/[[...slug]]/route.ts`). The markdown is generated from the
content modules, not scraped from the HTML — see the note at the top of
`lib/markdown/render.ts`. The home page's words live in `lib/home/{en,es,ru}.ts`
(shape in `lib/home/types.ts`); the home components and the markdown renderer
both read them from there, so there is no copy to mirror. Language-neutral
data — names, URLs, images, numbers — stays in `lib/data.ts`.

# Languages

English at `/`, Spanish under `/es`, Russian under `/ru` — one root layout per
language: `app/(en)` (a route group), `app/es`, `app/ru`. Metadata files inside
a route group get a hashed URL (`opengraph-image-1046iv`), which is why Spanish
and Russian are plain folders.

- `lib/i18n.ts` is the language list and the locale helpers (dates, numbers,
  plurals); `lib/alternates.ts` says which page exists in which language, and
  hreflang, the sitemap, the nav's language picker and the markdown language
  links all read it.
- Home copy: `lib/home/{en,es,ru}.ts`, one `HomeCopy` each (shape in
  `lib/home/types.ts`). The home components and `lib/markdown/render.ts` both
  read it.
- English and Spanish copy sit side by side in the same files: service pages in
  `lib/landing-copy.ts` and `lib/landing-seo.ts`, sectors in
  `lib/industries-content/`, case studies in `lib/studies-content-{en,es}.ts`,
  interface strings in `landingUi`, `industryHubUi` and `studyUi`
  (`lib/landing.ts`, `lib/industries.ts`, `lib/studies.ts`).
- Russian copy is one file per page under `lib/ru/` (services,
  `lib/ru/industries/`, `lib/ru/studies/`), interface strings in `lib/ru/ui.ts`.
  It addresses the reader with formal «вы», in lower case. Russian URLs are
  Latin transliterations (`/ru/sozdanie-saytov-marbella`), never Cyrillic.
- The nav and the WhatsApp button's words: `lib/nav.ts`.
- Google reviews: `lib/reviews.ts`, word for word, with the reviews page's
  English and Spanish words; Russian in `lib/ru/ui.ts`. Pages `/reviews`,
  `/es/opiniones`, `/ru/otzyvy`. No Review or AggregateRating markup (the
  note at the top of that file says why). The home hero prints the rating
  (`components/rating-link.tsx`); a sector page quotes a review through
  `review` in its `lib/industries-content/` file, plus `reviewTranslation` in
  each language the review is not written in. The service pages
  (`reviewRail` in their configs) show a drifting strip of each review's
  `short` line (`components/review-strip.tsx`, the work rail's motion from
  `components/drift-rail.ts`). The build checks every quote and short line
  against the review's own words.
- The registries (`lib/services-index.ts`, `lib/industries-index.ts`,
  `lib/studies-index.ts`) join each page's languages under one key. Adding a
  language is a content task: an entry in `lib/i18n.ts`, a root layout with
  thin route files like `app/ru`, the copy files, and their registry entries;
  hreflang, the sitemap and the picker follow. Also add its routes to
  `lib/markdown/routes.ts` (the build fails if they drift) and its pages to
  `public/llms.txt`, where each sector line must match its page word for word
  or the `/api/v1/industries` build check fails.
