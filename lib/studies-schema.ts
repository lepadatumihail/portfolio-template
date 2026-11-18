import type { Metadata } from "next";
import { absoluteUrl, hreflang } from "./alternates";
import { LANG_META, type Lang } from "./i18n";
import type { Study } from "./studies";
import { studyUi } from "./studies";
import { ogLocales, TWITTER_HANDLES } from "./site-metadata";
import { SITE_NAME, SITE_URL } from "./site-schema";
import { STUDIES_EN, STUDY_INDEX_PATH, studiesFor } from "./studies-index";

/**
 * A fact by what it records. Every translation keeps the English study's fact
 * order, so the English label finds the same fact in any language.
 */
function factValue(
  study: Study,
  englishLabel: "Client" | "Area" | "Source" | "Measured",
): string | undefined {
  const english = STUDIES_EN.find((candidate) => candidate.key === study.key) ?? study;
  const index = english.facts.findIndex((fact) => fact.label === englishLabel);
  return index === -1 ? undefined : study.facts[index]?.value;
}

/**
 * Article + BreadcrumbList for one case study, plus a Dataset node on a study
 * that publishes its own measurements (`study.dataset` — the speed report).
 * Dataset is what makes the survey quotable: it names the measurement window
 * and variables, so an engine citing "median LCP 7.5s" can see where the
 * figure is defined. The client studies report the clients' own Search
 * Console data and get no Dataset. No licence is declared: no page states
 * one, and markup must not grant what the page does not.
 */
export function studyJsonLd(study: Study) {
  const url = `${SITE_URL}${study.slug}`;
  const ui = studyUi[study.lang];
  const indexUrl = `${SITE_URL}${STUDY_INDEX_PATH[study.lang]}`;
  const client = factValue(study, "Client");
  const area = factValue(study, "Area");

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: study.metaTitle,
        description: study.metaDescription,
        url,
        inLanguage: LANG_META[study.lang].htmlLang,
        datePublished: study.published,
        dateModified: study.updated ?? study.published,
        author: { "@id": `${SITE_URL}/#founder` },
        publisher: { "@id": `${SITE_URL}/#business` },
        mainEntityOfPage: url,
        // the client's site as the page shows it. A study without one (the
        // speed report) uses its own 1200×630 link-preview card at its plain
        // address — no hash query, and next.config.ts rewrites the English
        // one to the route group's path — so the URL does not move per build
        image: study.image ? `${SITE_URL}${study.image}` : `${url}/opengraph-image`,
        // what the study is about: the client, linked to the live site the
        // page links to. The speed report names no business; its subject is
        // the Dataset's spatialCoverage.
        ...(client && study.clientUrl
          ? { about: { "@type": "Organization", name: client, url: study.clientUrl } }
          : {}),
        abstract: study.summary.join(" "),
        isAccessibleForFree: true,
      },
      ...(study.dataset
        ? [
            {
              "@type": "Dataset",
              "@id": `${url}#data`,
              name: study.metaTitle,
              description: study.method[0],
              url,
              inLanguage: LANG_META[study.lang].htmlLang,
              datePublished: study.published,
              creator: { "@id": `${SITE_URL}/#founder` },
              isAccessibleForFree: true,
              measurementTechnique: factValue(study, "Source"),
              temporalCoverage: study.dataset.temporalCoverage,
              ...(area ? { spatialCoverage: { "@type": "Place", name: area } } : {}),
              variableMeasured: study.dataset.variableMeasured,
            },
          ]
        : []),
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumbs`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: SITE_NAME, item: absoluteUrl(ui.nav.homeHref) },
          { "@type": "ListItem", position: 2, name: ui.labels.allStudies, item: indexUrl },
          {
            "@type": "ListItem",
            position: 3,
            name: `${study.hero.h1Main} ${study.hero.h1Accent}`,
            item: url,
          },
        ],
      },
    ],
  };
}

/**
 * CollectionPage + ItemList + BreadcrumbList for the /case-studies index,
 * wired the way the industry hubs are (industryHubJsonLd in
 * lib/landing-schema.ts).
 */
export function studyIndexJsonLd(lang: Lang) {
  const ui = studyUi[lang];
  const url = `${SITE_URL}${STUDY_INDEX_PATH[lang]}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${url}#webpage`,
        name: ui.indexMetaTitle,
        description: ui.indexMetaDescription,
        url,
        inLanguage: LANG_META[lang].htmlLang,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#business` },
        breadcrumb: { "@id": `${url}#breadcrumbs` },
        mainEntity: { "@id": `${url}#list` },
      },
      {
        "@type": "ItemList",
        "@id": `${url}#list`,
        itemListElement: studiesFor(lang).map((study, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: study.metaTitle,
          url: `${SITE_URL}${study.slug}`,
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumbs`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: SITE_NAME, item: absoluteUrl(ui.nav.homeHref) },
          { "@type": "ListItem", position: 2, name: ui.labels.allStudies, item: url },
        ],
      },
    ],
  };
}

export function studyMetadata(study: Study): Metadata {
  const url = `${SITE_URL}${study.slug}`;
  return {
    title: { absolute: study.metaTitle },
    description: study.metaDescription,
    alternates: {
      canonical: study.slug,
      languages: hreflang(study.key),
    },
    openGraph: {
      type: "article",
      url,
      siteName: SITE_NAME,
      title: study.metaTitle,
      description: study.metaDescription,
      ...ogLocales(study.key, study.lang),
      publishedTime: study.published,
      authors: ["Alex Doe"],
    },
    twitter: {
      card: "summary_large_image",
      title: study.metaTitle,
      description: study.metaDescription,
      ...TWITTER_HANDLES,
    },
  };
}

export function studyIndexMetadata(lang: Lang): Metadata {
  const ui = studyUi[lang];
  const url = `${SITE_URL}${STUDY_INDEX_PATH[lang]}`;
  return {
    title: { absolute: ui.indexMetaTitle },
    description: ui.indexMetaDescription,
    alternates: {
      canonical: STUDY_INDEX_PATH[lang],
      languages: hreflang("case-studies"),
    },
    openGraph: {
      type: "website",
      url,
      siteName: SITE_NAME,
      title: ui.indexMetaTitle,
      description: ui.indexMetaDescription,
      ...ogLocales("case-studies", lang),
    },
    twitter: {
      card: "summary_large_image",
      title: ui.indexMetaTitle,
      description: ui.indexMetaDescription,
      ...TWITTER_HANDLES,
    },
  };
}
