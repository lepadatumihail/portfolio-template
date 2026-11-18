import type { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";
import { API_BASE, API_VERSION } from "@/lib/api";
import { LANG_META } from "@/lib/i18n";
import { rootCard, TWITTER_HANDLES } from "@/lib/site-metadata";
import { SITE_NAME } from "@/lib/site-schema";

const TITLE = "JSON API: services, pricing and portfolio — example.com";
const DESCRIPTION =
  "A small, public, read-only JSON API for the services, pricing and portfolio published on example.com. No key, no rate limit.";

// Its own link preview: without one the page inherited the English home's
// og:url, title and description. Setting openGraph drops the card the layout
// passes on, so it is read back from the parent (see rootCard). English only,
// so no og:locale:alternate.
export async function generateMetadata(
  _props: unknown,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  return {
    title: { absolute: TITLE },
    description: DESCRIPTION,
    alternates: { canonical: "/api-docs" },
    openGraph: {
      type: "website",
      url: "/api-docs",
      siteName: SITE_NAME,
      title: TITLE,
      description: DESCRIPTION,
      locale: LANG_META.en.ogLocale,
      images: await rootCard(parent),
    },
    twitter: {
      card: "summary_large_image",
      title: TITLE,
      description: DESCRIPTION,
      ...TWITTER_HANDLES,
    },
  };
}

const endpoints = [
  {
    method: "GET",
    path: "/health",
    summary: "Is the API serving?",
    description:
      "Returns status, version and a timestamp. This is the target of the status link in the API catalog.",
    sample: `{
  "status": "pass",
  "version": "${API_VERSION}",
  "checkedAt": "2026-09-01T09:00:00.000Z"
}`,
  },
  {
    method: "GET",
    path: "/profile",
    summary: "Who I am and what things cost",
    description:
      "Profile, contact details, the service lines, the pricing tiers, the four-day process, the guarantee and the headline numbers.",
    sample: `{
  "name": "Alex Doe",
  "role": "Freelance web developer & AI builder",
  "location": { "city": "Marbella", "country": "ES", … },
  "contact": { "email": "…", "whatsapp": "…" },
  "services": [ … ],
  "pricing": [ { "name": "Landing", "price": "from €500", … } ],
  "process": [ … ],
  "guarantee": [ … ],
  "stats": [ … ]
}`,
  },
  {
    method: "GET",
    path: "/projects",
    summary: "Shipped work",
    description:
      "Client sites with live URLs, tags and screenshots, plus the longer case studies.",
    sample: `{
  "projects": [
    {
      "name": "Harbor Homes",
      "url": "https://example.com/harbor-homes",
      "description": "Luxury property portal for the Costa del Sol …",
      "tags": ["Real Estate", "4 Languages", "SEO"],
      "image": "https://example.com/work/harbor-homes.jpg"
    }
  ],
  "caseStudies": [ … ]
}`,
  },
  {
    method: "GET",
    path: "/industries",
    summary: "Web design by industry",
    description:
      "One entry per sector page — clinics, real estate, car rental, restaurants, hotels, law firms, trades — in English, Spanish and Russian, with the page URL, its markdown twin and its FAQ as question-and-answer pairs.",
    sample: `{
  "hub": { "en": "https://example.com/web-design", "es": "https://example.com/es/diseno-web", "ru": "https://example.com/ru/sozdanie-saytov" },
  "industries": [
    {
      "key": "real-estate",
      "en": {
        "name": "…",
        "service": "…",
        "summary": "…",
        "title": "…",
        "description": "…",
        "url": "https://example.com/web-design/real-estate",
        "markdown": "https://example.com/web-design/real-estate.md",
        "faq": [ { "question": "…", "answer": "…" } ]
      },
      "es": { … },
      "ru": { … }
    }
  ]
}`,
  },
];

// Relative hrefs so the links work on preview deployments too, matching the
// Link header set in next.config.ts.
const discovery = [
  {
    href: "/.well-known/api-catalog",
    note: "application/linkset+json",
  },
  {
    href: "/api/v1/openapi.json",
    note: "OpenAPI 3.1 — service-desc",
  },
  {
    href: "/llms.txt",
    note: "the site in plain text, for LLMs",
  },
];

export default function ApiDocs() {
  return (
    <main className="mx-auto w-full max-w-3xl px-5 py-20 sm:px-8 sm:py-28">
      <p className="text-xs font-medium tracking-[0.14em] text-muted">API</p>
      <h1 className="mt-4 text-balance font-sans text-4xl font-light tracking-tight text-foreground sm:text-6xl">
        Read this site <span className="font-serif italic">as data</span>
      </h1>
      <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted">
        Everything on example.com — the services, the prices, the work — is
        also available as JSON, so an agent or an integration never has to
        scrape the pages. Read-only, no key, no rate limit, CORS open to
        everyone.
      </p>

      <dl className="mt-12 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2">
        <div className="bg-surface p-5">
          <dt className="text-xs font-medium tracking-[0.14em] text-muted">
            BASE URL
          </dt>
          <dd className="mt-2 break-all font-mono text-sm text-foreground">
            {API_BASE}
          </dd>
        </div>
        <div className="bg-surface p-5">
          <dt className="text-xs font-medium tracking-[0.14em] text-muted">
            VERSION
          </dt>
          <dd className="mt-2 font-mono text-sm text-foreground">
            {API_VERSION}
          </dd>
        </div>
      </dl>

      <section className="mt-16">
        <h2 className="border-t border-line pt-7 font-sans text-2xl font-light tracking-tight text-foreground sm:text-3xl">
          Endpoints
        </h2>
        <div className="mt-8 divide-y divide-line border-y border-line">
          {endpoints.map((endpoint) => (
            <article key={endpoint.path} className="py-8">
              <h3 className="flex flex-wrap items-baseline gap-3">
                <span className="rounded bg-accent px-2 py-1 font-mono text-[11px] font-medium tracking-wider text-white">
                  {endpoint.method}
                </span>
                <span className="break-all font-mono text-base text-foreground sm:text-lg">
                  /api/v1{endpoint.path}
                </span>
              </h3>
              <p className="mt-3 text-sm font-medium text-foreground">
                {endpoint.summary}
              </p>
              <p className="mt-2 max-w-2xl text-pretty text-sm leading-relaxed text-muted">
                {endpoint.description}
              </p>
              <pre className="mt-5 overflow-x-auto rounded-lg border border-line bg-surface p-4 font-mono text-xs leading-relaxed text-muted">
                {endpoint.sample}
              </pre>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="border-t border-line pt-7 font-sans text-2xl font-light tracking-tight text-foreground sm:text-3xl">
          Machine discovery
        </h2>
        <p className="mt-6 max-w-2xl text-pretty text-sm leading-relaxed text-muted">
          This API is listed in an{" "}
          <a
            href="https://www.rfc-editor.org/rfc/rfc9727"
            className="text-accent underline underline-offset-4"
            rel="noopener"
          >
            RFC 9727
          </a>{" "}
          API catalog, served as an RFC 9264 linkset. Start there and follow the
          links — no hardcoded paths needed.
        </p>
        <ul className="mt-8 divide-y divide-line border-y border-line">
          {discovery.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="group flex flex-wrap items-baseline justify-between gap-3 py-5"
              >
                <span className="break-all font-mono text-sm text-foreground transition-colors duration-300 group-hover:text-accent">
                  {item.href}
                </span>
                <span className="text-xs text-muted">{item.note}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <p className="mt-16 border-t border-line pt-8 text-sm text-muted">
        Something you need that isn&apos;t here?{" "}
        <a
          href="mailto:hello@example.com"
          className="text-accent underline underline-offset-4"
        >
          Ask me
        </a>
        , or{" "}
        <Link href="/" className="text-accent underline underline-offset-4">
          head back to the site
        </Link>
        .
      </p>
    </main>
  );
}
