/**
 * Which pages exist in which language.
 *
 * Every page belongs to a key: "home", a service ("seo"), "industry-hub", a
 * sector ("dental-clinics"), "case-studies", a study ("acme-clinic") or
 * "reviews". This module is the one place that knows the URL each key has in
 * each language, read straight from the registries. hreflang, the sitemap, the
 * language switchers and the markdown "other language" links are all built
 * from it, so a page that exists in only some languages simply has no link to
 * the others.
 */
import { SITE } from "./api";
import { homePath, LANG_META, LANGS, type Lang } from "./i18n";
import { INDUSTRY_HUB_PATH } from "./industries";
import { INDUSTRY_CONFIGS } from "./industries-index";
import { REVIEWS_PATH } from "./reviews";
import { SERVICE_CONFIGS } from "./services-index";
import { STUDIES, STUDY_INDEX_PATH } from "./studies-index";

/** URL path per language; a language with no version of the page is absent. */
export type Alternates = Partial<Record<Lang, string>>;

/** What a page is; the sitemap dates a case study by its own dates too. */
export type PageKind = "home" | "service" | "industry" | "study-index" | "study" | "reviews";

/** The pages every footer links to, in footer order. */
export const FOOTER_PAGES = [
  "web-design",
  "app-development",
  "ai-automation",
  "chatbots",
  "seo",
  "industry-hub",
  "case-studies",
  "reviews",
] as const;

export type FooterPage = (typeof FOOTER_PAGES)[number];

type Page = { key: string; kind: PageKind; lang: Lang; path: string };

// Listed group by group, so the map's insertion order is the sitemap's order.
const PAGES: Page[] = [
  ...LANGS.map((lang): Page => ({ key: "home", kind: "home", lang, path: homePath(lang) })),
  ...LANGS.flatMap((lang) =>
    SERVICE_CONFIGS[lang].map((config): Page => ({ key: config.key, kind: "service", lang, path: config.slug })),
  ),
  ...LANGS.map((lang): Page => ({ key: "industry-hub", kind: "industry", lang, path: INDUSTRY_HUB_PATH[lang] })),
  ...LANGS.flatMap((lang) =>
    INDUSTRY_CONFIGS[lang].map((config): Page => ({ key: config.key, kind: "industry", lang, path: config.slug })),
  ),
  ...LANGS.map((lang): Page => ({ key: "case-studies", kind: "study-index", lang, path: STUDY_INDEX_PATH[lang] })),
  ...STUDIES.map((study): Page => ({ key: study.key, kind: "study", lang: study.lang, path: study.slug })),
  ...LANGS.map((lang): Page => ({ key: "reviews", kind: "reviews", lang, path: REVIEWS_PATH[lang] })),
];

const BY_KEY = new Map<string, { kind: PageKind; alternates: Alternates }>();
for (const page of PAGES) {
  const entry = BY_KEY.get(page.key) ?? { kind: page.kind, alternates: {} };
  // keys are shared across registries, so two of them claiming one key is a
  // content bug — fail the build rather than link a page to a stranger
  if (entry.alternates[page.lang] || entry.kind !== page.kind) {
    throw new Error(
      `lib/alternates.ts: two pages claim the key "${page.key}" in ${page.lang}: ${entry.alternates[page.lang] ?? entry.kind} and ${page.path}`,
    );
  }
  entry.alternates[page.lang] = page.path;
  BY_KEY.set(page.key, entry);
}

/** Every page key with its kind and language versions, in sitemap order. */
export const PAGE_KEYS = [...BY_KEY.entries()].map(([key, { kind, alternates }]) => ({
  key,
  kind,
  alternates,
}));

/** The path of each language version of a page. */
export function alternatesFor(key: string): Alternates {
  const entry = BY_KEY.get(key);
  if (!entry) throw new Error(`lib/alternates.ts: no page has the key "${key}"`);
  return entry.alternates;
}

/** One language version, e.g. pathFor("seo", "ru") -> "/ru/seo-marbella". Throws when it does not exist. */
export function pathFor(key: string, lang: Lang): string {
  const path = alternatesFor(key)[lang];
  if (!path) throw new Error(`lib/alternates.ts: the page "${key}" has no ${lang} version`);
  return path;
}

/** "/" -> "https://example.com", "/es" -> "https://example.com/es" */
export function absoluteUrl(path: string): string {
  return path === "/" ? SITE : `${SITE}${path}`;
}

/** The other language versions of a page, in LANGS order, as links. */
export function otherVersions(key: string, lang: Lang): { lang: Lang; path: string }[] {
  const alternates = alternatesFor(key);
  return LANGS.filter((other) => other !== lang && alternates[other]).map((other) => ({
    lang: other,
    path: alternates[other]!,
  }));
}

/**
 * hreflang for Next's `alternates.languages`: every language version, plus
 * x-default pointing at the English one.
 */
export function hreflang(key: string): Record<string, string> {
  const alternates = alternatesFor(key);
  const languages: Record<string, string> = {};
  for (const lang of LANGS) {
    const path = alternates[lang];
    if (path) languages[LANG_META[lang].htmlLang] = absoluteUrl(path);
  }
  if (alternates.en) languages["x-default"] = absoluteUrl(alternates.en);
  return languages;
}
