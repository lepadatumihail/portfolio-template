# Portfolio template

A freelancer / small-studio website in Next.js 16, React 19 and Tailwind 4:
a home page, service pages, sector pages, case studies and a reviews page, in
English (`/`), Spanish (`/es`) and Russian (`/ru`). Every page also answers in
markdown for AI agents (`Accept: text/markdown`), and the site ships
`llms.txt`, an API catalog and agent-skill files.

**Everything in here is sample content.** The name ("Alex Doe"), domain
(example.com), phone, email, social handles, client names and reviews are
placeholders, and the reviews are made up. Every image is a grey placeholder at
its real size. The copy, prices, stats, project descriptions and case-study
figures are sample text from the original site. Replace all of it with your own
before you publish, and don't put the sample reviews live.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000. `npm run build` also runs the content checks
described below.

## Where to change things

| What | Where |
| --- | --- |
| Name, domain, phone, WhatsApp, email | `lib/data.ts`, `lib/site-schema.ts`, `lib/site-metadata.ts` |
| Home page words (per language) | `lib/home/en.ts`, `es.ts`, `ru.ts` (shape in `lib/home/types.ts`) |
| Nav and WhatsApp button | `lib/nav.ts` |
| Service pages | `lib/landing-copy.ts`, `lib/landing-seo.ts`, `lib/landing-configs.ts`; Russian in `lib/ru/` |
| Sector pages | `lib/industries-content/`; Russian in `lib/ru/industries/` |
| Case studies | `lib/studies-content-en.ts`, `lib/studies-content-es.ts`, `lib/ru/studies/` |
| Reviews | `lib/reviews.ts` (Russian UI words in `lib/ru/ui.ts`) |
| Project screenshots | `public/work/` (1400 × 875), `public/images/` (1200 × 800) |
| Logo | `components/brand-mark.tsx`, `public/icon.svg`, `public/logo.svg`, `public/logo.png`, `public/favicon.ico` |
| Social links | `next.config.ts` (Link header), `lib/site-schema.ts` (`sameAs`), `lib/markdown/render.ts` |
| Agent files | `public/llms.txt`, `public/.well-known/agent-skills/` (the index is rebuilt on `npm run build`) |

`AGENTS.md` explains how the languages, the markdown versions and the
registries fit together. Read it before you add or rename a page.

## Build checks

The build fails on purpose when content drifts:

- a quote of a review that is not word for word in `lib/reviews.ts`
- a sector line in `public/llms.txt` that doesn't match its page
- markdown routes in `lib/markdown/routes.ts` out of step with the pages

## Environment variables

Only the free-review form (`app/api/review/route.ts`) needs any. It sends each
request to Telegram:

```
TELEGRAM_BOT_TOKEN=
TELEGRAM_CHAT_ID=
```

Put them in `.env.local` (git-ignored). Without them the form returns an error
and the rest of the site works.

`npm run indexnow` pings IndexNow after a deploy. Put your own key in
`scripts/indexnow.mjs` and serve it as `public/<key>.txt` first.
