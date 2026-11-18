import { HOME_COPY } from "./home";
import { homePath, LANG_META, LANGS, type Lang } from "./i18n";
import { GOOGLE_PROFILE_URL } from "./reviews";
import { siteSchemaRu } from "./ru/ui";
import { SERVICE_CONFIGS } from "./services-index";

export const SITE_URL = "https://example.com";
export const SITE_NAME = "example.com";
export const SITE_PHONE = "+34 600 00 00 00";

/** The words of the site-wide graph, in one language. */
export type SiteSchemaCopy = {
  /**
   * the ProfessionalService's slogan. Its name is SITE_NAME in every
   * language: Google asks for the same name the WebSite node carries, and a
   * line about what the business does is a slogan, not a name.
   */
  slogan: string;
  description: string;
  knowsAbout: string[];
  /** Alex's jobTitle */
  jobTitle: string;
  /** the address's region, as the language names it */
  addressRegion: string;
  /** the province of Málaga in areaServed, as the language names it */
  province: string;
};

const SITE_SCHEMA_COPY: Record<Lang, SiteSchemaCopy> = {
  en: {
    slogan: "Web design & AI automation",
    description:
      "Fast websites, web apps and AI automations for small businesses in Marbella and the Costa del Sol — live in days, from €500.",
    knowsAbout: [
      "web design",
      "web development",
      "web app development",
      "AI automation",
      "AI chatbots",
      "SEO",
      "local SEO",
      "Google Business Profile",
      "AI search visibility",
    ],
    jobTitle: "Web developer & AI builder",
    addressRegion: "Andalusia",
    province: "Province of Málaga",
  },
  es: {
    slogan: "Diseño web y automatización con IA",
    description:
      "Webs rápidas, aplicaciones web y automatizaciones con IA para pequeños negocios de Marbella y la Costa del Sol — online en días, desde 500\u00A0€.",
    knowsAbout: [
      "diseño web",
      "desarrollo web",
      "desarrollo de aplicaciones web",
      "automatización con IA",
      "chatbots con IA",
      "SEO",
      "SEO local",
      "Perfil de Empresa de Google",
      "visibilidad en buscadores con IA",
    ],
    jobTitle: "Desarrollador web y de automatizaciones con IA",
    addressRegion: "Andalucía",
    province: "Provincia de Málaga",
  },
  ru: siteSchemaRu,
};

const wikidata = (id: string) => `https://www.wikidata.org/wiki/${id}`;

// Where the business works. "Málaga" is the city; the province is listed on
// its own, as the Google Business Profile's service area is Marbella plus the
// province of Málaga. Wikidata ids checked against the Wikidata API on
// 2026-10-05.
const PLACES_SERVED: { type: "City" | "Place"; name: string; id: string }[] = [
  { type: "City", name: "Marbella", id: "Q484799" },
  { type: "Place", name: "San Pedro de Alcántara", id: "Q992775" },
  { type: "Place", name: "Puerto Banús", id: "Q2117451" },
  { type: "City", name: "Estepona", id: "Q492748" },
  { type: "City", name: "Fuengirola", id: "Q492735" },
  { type: "City", name: "Mijas", id: "Q492744" },
  { type: "City", name: "Benalmádena", id: "Q488869" },
  { type: "City", name: "Málaga", id: "Q8851" },
  { type: "Place", name: "Costa del Sol", id: "Q215254" },
];

/**
 * areaServed for the business and for every Service node (lib/landing-schema.ts),
 * so the two never list different places.
 */
export function areaServed(lang: Lang) {
  return [
    ...PLACES_SERVED.map((place) => ({
      "@type": place.type,
      name: place.name,
      sameAs: wikidata(place.id),
    })),
    {
      "@type": "AdministrativeArea",
      name: SITE_SCHEMA_COPY[lang].province,
      sameAs: wikidata("Q95028"),
    },
  ];
}

// Site-wide entity graph: a Marbella service-area business + its founder —
// every @id is the same in every language, so they describe one business; the
// words are the page's language, and makesOffer lists that language's service
// pages. Only claims that are visible on the site — and no reviews/ratings
// markup even though /reviews prints them: see the note in lib/reviews.ts.
// Rendered on every page by components/site-document.tsx and into the
// markdown representation of the home page by lib/markdown/render.ts.
export function siteJsonLd(lang: Lang) {
  const copy = SITE_SCHEMA_COPY[lang];
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#business`,
        name: SITE_NAME,
        slogan: copy.slogan,
        url: SITE_URL,
        // the language's home card: /opengraph-image, /es/opengraph-image or /ru/opengraph-image
        image: `${SITE_URL}${LANG_META[lang].prefix}/opengraph-image`,
        // a raster logo with its size stated: Google asks for at least 112×112 px
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/logo.png`,
          width: 512,
          height: 512,
        },
        description: copy.description,
        priceRange: "€500-€3,000+",
        email: "hello@example.com",
        telephone: SITE_PHONE,
        founder: { "@id": `${SITE_URL}/#founder` },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Marbella",
          addressRegion: copy.addressRegion,
          addressCountry: "ES",
        },
        // no geo: a service-area business with its address hidden on Google
        // has no point on the map to state
        areaServed: areaServed(lang),
        // the name on the Google Business Profile, so the two can be matched
        alternateName: "Doe Studio",
        hasMap: GOOGLE_PROFILE_URL,
        // the brand's own profile; Alex's personal ones are on the Person
        sameAs: ["https://www.instagram.com/yourhandle/"],
        knowsAbout: copy.knowsAbout,
        // the four service pages in the page's language, named as they name
        // themselves — each the same node as the Service on its own page
        // (lib/landing-schema.ts), so parsers see four services, not eight
        makesOffer: SERVICE_CONFIGS[lang].map((config) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            "@id": `${SITE_URL}${config.slug}#service`,
            name: config.serviceName,
            url: `${SITE_URL}${config.slug}`,
          },
        })),
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        inLanguage: LANGS.map((other) => LANG_META[other].htmlLang),
        publisher: { "@id": `${SITE_URL}/#business` },
      },
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#founder`,
        name: "Alex Doe",
        jobTitle: copy.jobTitle,
        url: SITE_URL,
        worksFor: { "@id": `${SITE_URL}/#business` },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Marbella",
          addressCountry: "ES",
        },
        // his own profiles: X (@yourhandle) and GitHub
        sameAs: ["https://x.com/yourhandle", "https://github.com/your-username"],
      },
    ],
  };
}

// The home page's questions as a FAQPage: the visible FAQ, mirrored for Bing,
// assistants and the markdown twin — Google no longer shows FAQ rich results,
// so this is not there for Google. Built from the same array as the visible
// FAQ, so the two cannot drift. Each question lives on one page by design, so
// this is home only, never site-wide. Rendered by components/home-page.tsx and
// by the markdown home page, in the page's language.
export function homeFaqJsonLd(lang: Lang) {
  // "https://example.com/", "https://example.com/es"
  const url = `${SITE_URL}${homePath(lang)}`;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    url,
    inLanguage: LANG_META[lang].htmlLang,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    mainEntity: HOME_COPY[lang].faq.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}
