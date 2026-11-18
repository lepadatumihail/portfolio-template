import type { Metadata } from "next";
import { absoluteUrl, hreflang } from "./alternates";
import { homePath, LANG_META, type Lang } from "./i18n";
import { GOOGLE_PROFILE_URL, REVIEWS_CHECKED, REVIEWS_PATH, reviewsCopy } from "./reviews";
import { ogLocales, TWITTER_HANDLES } from "./site-metadata";
import { SITE_NAME, SITE_URL } from "./site-schema";

/**
 * WebPage + BreadcrumbList for the reviews page. Deliberately no Review or
 * AggregateRating: see the note at the top of lib/reviews.ts. The reviews
 * reach readers and assistants as the page's text; the profile they were
 * copied from is the page's significantLink.
 */
export function reviewsJsonLd(lang: Lang) {
  const copy = reviewsCopy(lang);
  const url = `${SITE_URL}${REVIEWS_PATH[lang]}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        name: copy.metaTitle,
        description: copy.metaDescription,
        url,
        inLanguage: LANG_META[lang].htmlLang,
        dateModified: REVIEWS_CHECKED,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#business` },
        significantLink: GOOGLE_PROFILE_URL,
        breadcrumb: { "@id": `${url}#breadcrumbs` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumbs`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: SITE_NAME, item: absoluteUrl(homePath(lang)) },
          { "@type": "ListItem", position: 2, name: copy.label, item: url },
        ],
      },
    ],
  };
}

export function reviewsMetadata(lang: Lang): Metadata {
  const copy = reviewsCopy(lang);
  const url = `${SITE_URL}${REVIEWS_PATH[lang]}`;
  return {
    title: { absolute: copy.metaTitle },
    description: copy.metaDescription,
    alternates: {
      canonical: REVIEWS_PATH[lang],
      languages: hreflang("reviews"),
    },
    openGraph: {
      type: "website",
      url,
      siteName: SITE_NAME,
      title: copy.metaTitle,
      description: copy.metaDescription,
      ...ogLocales("reviews", lang),
    },
    twitter: {
      card: "summary_large_image",
      title: copy.metaTitle,
      description: copy.metaDescription,
      ...TWITTER_HANDLES,
    },
  };
}
