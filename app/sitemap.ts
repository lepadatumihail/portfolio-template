import type { MetadataRoute } from "next";
import { absoluteUrl, hreflang, PAGE_KEYS, type PageKind } from "@/lib/alternates";
import { LANGS, type Lang } from "@/lib/i18n";
import { REVIEWS_CHECKED } from "@/lib/reviews";
import { STUDIES } from "@/lib/studies-index";

const SITE = "https://example.com";

/**
 * <lastmod> is the day a page's main content, structured data or links last
 * changed — never the build or deploy time. Google uses lastmod only while it
 * stays verifiably accurate, and Bing warns against stamping the sitemap's
 * generation time on every URL. Both ignore <changefreq> and <priority>, so
 * the sitemap carries neither.
 *
 * RELEASED is the last change every page shared: the three-language release
 * and the structured-data pass that followed it. When one page changes, give
 * it its own date in UPDATED (page key -> language -> ISO date) instead of
 * moving RELEASED; move RELEASED only when every page changes. Never bump a
 * date on a deploy that changed nothing on the page.
 */
const RELEASED = "2026-10-05";
const UPDATED: Partial<Record<string, Partial<Record<Lang, string>>>> = {
  chatbots: { en: "2026-10-07", es: "2026-10-07", ru: "2026-10-07" },
  "ai-automation": { en: "2026-10-07", es: "2026-10-07", ru: "2026-10-07" },
  home: { en: "2026-10-07", es: "2026-10-07", ru: "2026-10-07" },
};

/**
 * A case study also counts its own `updated` (or `published`) date, so the
 * sitemap never says it changed earlier than the dateModified in its JSON-LD.
 * ISO dates compare as text.
 */
function lastModified(key: string, kind: PageKind, lang: Lang): string {
  // the reviews page changes when the reviews are copied from Google again
  if (kind === "reviews") return REVIEWS_CHECKED;
  const own = UPDATED[key]?.[lang] ?? RELEASED;
  if (kind !== "study") return own;
  const study = STUDIES.find((candidate) => candidate.key === key && candidate.lang === lang);
  const studyDate = study ? (study.updated ?? study.published) : undefined;
  return studyDate && studyDate > own ? studyDate : own;
}

// Every page in every language it exists in, read from lib/alternates.ts, with
// the same hreflang alternates the page's own <head> carries: each language
// version plus x-default pointing at the English one.
export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = PAGE_KEYS.flatMap(({ key, kind, alternates }) => {
    const versions = LANGS.filter((lang) => alternates[lang]);
    const languages = hreflang(key);
    return versions.map((lang) => ({
      url: absoluteUrl(alternates[lang]!),
      lastModified: lastModified(key, kind, lang),
      alternates: { languages },
    }));
  });

  return [
    ...pages,
    {
      url: `${SITE}/api-docs`,
      lastModified: UPDATED["api-docs"]?.en ?? RELEASED,
    },
  ];
}
