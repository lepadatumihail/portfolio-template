import type { Metadata } from "next";
import { absoluteUrl, hreflang } from "./alternates";
import { LANG_META } from "./i18n";
import { INDUSTRY_HUB_PATH, industryHubUi, type Lang } from "./industries";
import { INDUSTRY_CONFIGS } from "./industries-index";
import { landingUi, type LandingConfig } from "./landing";
import { ogLocales, TWITTER_HANDLES } from "./site-metadata";
import { areaServed } from "./site-schema";

const SITE = "https://example.com";

/** Home > [hub] > page, as the visible breadcrumb and the schema both read it. */
function breadcrumbItems(config: LandingConfig) {
  const url = `${SITE}${config.slug}`;
  const { nav } = landingUi[config.lang];
  return [
    { name: nav.home, item: absoluteUrl(nav.homeHref) },
    ...(config.parent ? [{ name: config.parent.label, item: `${SITE}${config.parent.href}` }] : []),
    { name: config.audience ?? config.serviceName, item: url },
  ];
}

/** WebPage + Service + FAQPage + BreadcrumbList for one landing page. */
export function landingJsonLd(config: LandingConfig) {
  const url = `${SITE}${config.slug}`;
  const ui = landingUi[config.lang];
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: config.copy.metaTitle,
        description: config.copy.metaDescription,
        inLanguage: LANG_META[config.lang].htmlLang,
        isPartOf: { "@id": `${SITE}/#website` },
        about: { "@id": `${url}#service` },
        breadcrumb: { "@id": `${url}#breadcrumbs` },
      },
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: config.serviceName,
        url,
        description: config.copy.metaDescription,
        provider: { "@id": `${SITE}/#business` },
        areaServed: areaServed(config.lang),
        ...(config.audience
          ? { audience: { "@type": "BusinessAudience", name: config.audience } }
          : {}),
        // the tiers printed in the pricing section — nothing the page does
        // not show
        offers: (config.tiers ?? ui.tiers).map((tier) => ({
          "@type": "Offer",
          name: tier.name,
          description: tier.tagline,
          priceSpecification: {
            "@type": tier.per ? "UnitPriceSpecification" : "PriceSpecification",
            priceCurrency: "EUR",
            minPrice: tier.minPrice,
            // UN/CEFACT common code for a month
            ...(tier.per === "month" ? { unitCode: "MON" } : {}),
          },
        })),
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        url,
        inLanguage: LANG_META[config.lang].htmlLang,
        isPartOf: { "@id": `${url}#webpage` },
        mainEntity: config.copy.faq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumbs`,
        itemListElement: breadcrumbItems(config).map((crumb, i) => ({
          "@type": "ListItem",
          position: i + 1,
          ...crumb,
        })),
      },
    ],
  };
}

// og:image and twitter:image are not set here: Next adds them from the
// opengraph-image file in the page's own segment. That file is required —
// because this sets `openGraph`, the root card is not inherited, and a
// segment without one ships with no image at all.
export function landingMetadata(config: LandingConfig): Metadata {
  const url = `${SITE}${config.slug}`;
  return {
    title: { absolute: config.copy.metaTitle },
    description: config.copy.metaDescription,
    alternates: {
      canonical: config.slug,
      languages: hreflang(config.key),
    },
    openGraph: {
      type: "website",
      url,
      siteName: "example.com",
      title: config.copy.metaTitle,
      description: config.copy.metaDescription,
      ...ogLocales(config.key, config.lang),
    },
    twitter: {
      card: "summary_large_image",
      title: config.copy.metaTitle,
      description: config.copy.metaDescription,
      ...TWITTER_HANDLES,
    },
  };
}

/** CollectionPage + ItemList + BreadcrumbList for the industry hub. */
export function industryHubJsonLd(lang: Lang) {
  const ui = industryHubUi[lang];
  const url = `${SITE}${INDUSTRY_HUB_PATH[lang]}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${url}#webpage`,
        url,
        name: ui.metaTitle,
        description: ui.metaDescription,
        inLanguage: LANG_META[lang].htmlLang,
        isPartOf: { "@id": `${SITE}/#website` },
        about: { "@id": `${SITE}/#business` },
        breadcrumb: { "@id": `${url}#breadcrumbs` },
        mainEntity: { "@id": `${url}#list` },
      },
      {
        "@type": "ItemList",
        "@id": `${url}#list`,
        itemListElement: INDUSTRY_CONFIGS[lang].map((config, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: config.serviceName,
          url: `${SITE}${config.slug}`,
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumbs`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: landingUi[lang].nav.home,
            item: absoluteUrl(landingUi[lang].nav.homeHref),
          },
          { "@type": "ListItem", position: 2, name: ui.label, item: url },
        ],
      },
    ],
  };
}

export function industryHubMetadata(lang: Lang): Metadata {
  const ui = industryHubUi[lang];
  const url = `${SITE}${INDUSTRY_HUB_PATH[lang]}`;
  return {
    title: { absolute: ui.metaTitle },
    description: ui.metaDescription,
    alternates: {
      canonical: INDUSTRY_HUB_PATH[lang],
      languages: hreflang("industry-hub"),
    },
    openGraph: {
      type: "website",
      url,
      siteName: "example.com",
      title: ui.metaTitle,
      description: ui.metaDescription,
      ...ogLocales("industry-hub", lang),
    },
    twitter: {
      card: "summary_large_image",
      title: ui.metaTitle,
      description: ui.metaDescription,
      ...TWITTER_HANDLES,
    },
  };
}
