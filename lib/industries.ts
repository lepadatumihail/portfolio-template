/**
 * Industry pages — "web design for <sector>" under /web-design (and
 * /es/diseno-web, /ru/sozdanie-saytov), plus the hub that lists them.
 *
 * They render through the same LandingPage template as the Marbella service
 * pages. This module only adds what a sector page has that a service page
 * does not: a hub to hang off, proof from that sector, and the neighbouring
 * sectors to link to. The copy itself lives in lib/industries-content/, one
 * file per sector (English and Spanish), and lib/ru/industries/ (Russian);
 * lib/industries-index.ts is the registry that joins them.
 */
import type { Lang } from "./i18n";
import { landingUi, type LandingConfig, type LandingCopy } from "./landing";
import { quoteReview, type ReviewQuote } from "./reviews";
import { industryHubUiRu, ogFootPrefixRu } from "./ru/ui";

export type { Lang } from "./i18n";

export const INDUSTRY_HUB_PATH: Record<Lang, string> = {
  en: "/web-design",
  es: "/es/diseno-web",
  ru: "/ru/sozdanie-saytov",
};

export function industryPath(lang: Lang, slug: string): string {
  return `${INDUSTRY_HUB_PATH[lang]}/${slug}`;
}

export type IndustryLocale = {
  /** last URL segment, e.g. "dental-clinics" / "clinicas-dentales" */
  slug: string;
  /** the sector as a plural noun — hub cards, breadcrumbs, schema audience */
  name: string;
  /** one sentence for the hub card and llms.txt */
  summary: string;
  /** Service schema name and link text, e.g. "Web design for dental clinics" */
  serviceName: string;
  mailSubject: string;
  /** pre-filled WhatsApp message for this page's CTAs */
  waMessage: string;
  /** leave the "Proof" section out of this language's page */
  hideProof?: boolean;
  /** four figures from this sector, shown instead of the site-wide stats row */
  stats?: { value: string; label: string }[];
  statsNote?: string;
  /** the case study those figures come from */
  statsSource?: { label: string; href: string };
  /**
   * The quoted review in this page's language, when it was written in
   * another: printed under the original and marked as a translation.
   */
  reviewTranslation?: string;
  /** link-preview card: a short kicker and a headline of roughly 60 characters */
  og: { kicker: string; headline: string };
  copy: LandingCopy;
};

export type IndustryEntry = {
  /** stable id, independent of either language's slug */
  key: string;
  /** names from lib/data projects[] to show as proof cards */
  proofProjects: string[];
  /** a Google review from this sector, quoted after the proof cards (lib/reviews.ts) */
  review?: ReviewQuote;
  /** index of the pricing tier to highlight */
  highlightTier: number;
  /** keys of the sectors to cross-link, most relevant first */
  related: string[];
  en: IndustryLocale;
  es: IndustryLocale;
  ru: IndustryLocale;
};

/**
 * What a file in lib/industries-content/ exports: the sector with its English
 * and Spanish pages. The Russian page lives in lib/ru/industries/ and is joined
 * on in lib/industries-index.ts.
 */
export type IndustrySource = Omit<IndustryEntry, "ru">;

export type HubUi = {
  metaTitle: string;
  metaDescription: string;
  kicker: string;
  title: { main: string; accent: string };
  dek: string;
  /** breadcrumb label and the link back from a sector page */
  label: string;
  /** closing note under the list, with the link to the general page */
  outro: string;
  general: { label: string; href: string };
  og: { kicker: string; headline: string };
  ogAlt: string;
};

export const industryHubUi: Record<Lang, HubUi> = {
  en: {
    metaTitle: "Web design by industry — Marbella & Costa del Sol",
    metaDescription:
      "Websites built around how each business wins customers: clinics, real estate, car rental, restaurants, hotels, law firms, builders. Fixed quote, from €500.",
    kicker: "Web design — by industry",
    title: { main: "Web design by industry,", accent: "built around how you sell." },
    dek: "A dental clinic needs appointments. An estate agency needs a property search buyers can actually use. A car hire firm needs dates, prices and a booking request. Same developer and the same fixed-price process — a different website for each.",
    label: "Web design by industry",
    outro:
      "Not on the list? The process is the same for any business: a 15-minute call, a fixed quote, and a live preview the next day.",
    general: { label: "Web design in Marbella", href: "/web-design-marbella" },
    og: {
      kicker: "Web design — by industry",
      headline: "Web design by industry, built around how you sell.",
    },
    ogAlt:
      "Web design by industry — websites for clinics, real estate, car rental, restaurants, hotels, law firms and trades in Marbella and the Costa del Sol",
  },
  es: {
    metaTitle: "Diseño web por sectores — Marbella y Costa del Sol",
    metaDescription:
      "Webs pensadas para cómo consigue clientes cada negocio: clínicas, inmobiliarias, rent a car, restaurantes, hoteles, abogados y reformas. Desde 500 €.",
    kicker: "Diseño web — por sectores",
    title: { main: "Diseño web por sectores,", accent: "pensado para cómo vendes." },
    dek: "Una clínica dental necesita citas. Una inmobiliaria, un buscador de propiedades que el comprador sepa usar. Un rent a car, fechas, precios y una solicitud de reserva. El mismo desarrollador y el mismo proceso a precio cerrado — una web distinta para cada uno.",
    label: "Diseño web por sectores",
    outro:
      "¿Tu sector no está en la lista? El proceso es el mismo para cualquier negocio: una llamada de 15 minutos, precio cerrado y una vista previa real al día siguiente.",
    general: { label: "Diseño web en Marbella", href: "/es/diseno-web-marbella" },
    og: {
      kicker: "Diseño web — por sectores",
      headline: "Diseño web por sectores, pensado para cómo vendes.",
    },
    ogAlt:
      "Diseño web por sectores — webs para clínicas, inmobiliarias, alquiler de coches, restaurantes, hoteles, abogados y reformas en Marbella y la Costa del Sol",
  },
  ru: industryHubUiRu,
};

const OG_FOOT_PREFIX: Record<Lang, string> = {
  en: "Fixed quote",
  es: "Precio cerrado",
  ru: ogFootPrefixRu,
};

/** The LandingConfig a sector page renders from. */
export function industryConfig(
  entry: IndustryEntry,
  lang: Lang,
  all: IndustryEntry[],
): LandingConfig {
  const locale = entry[lang];
  const hub = industryHubUi[lang];
  const related = entry.related
    .map((key) => all.find((candidate) => candidate.key === key))
    .filter((candidate): candidate is IndustryEntry => Boolean(candidate));

  return {
    slug: industryPath(lang, locale.slug),
    lang,
    key: entry.key,
    siblings: [
      ...related.map((sector) => ({
        label: sector[lang].serviceName,
        href: industryPath(lang, sector[lang].slug),
      })),
      hub.general,
    ],
    proofProjects: entry.proofProjects,
    highlightTier: entry.highlightTier,
    mailSubject: locale.mailSubject,
    waMessage: locale.waMessage,
    serviceName: locale.serviceName,
    copy: locale.copy,
    parent: { label: hub.label, href: INDUSTRY_HUB_PATH[lang] },
    audience: locale.name,
    hideProof: locale.hideProof,
    stats: locale.stats,
    statsNote: locale.statsNote,
    statsSource: locale.statsSource,
    review: entry.review
      ? quoteReview(entry.review, lang, locale.reviewTranslation, `the ${entry.key} page (${lang})`)
      : undefined,
    // the card quotes the same floor as the page's title and description:
    // the highlighted tier's price
    og: {
      ...locale.og,
      foot: `${OG_FOOT_PREFIX[lang]} · ${landingUi[lang].tiers[entry.highlightTier].price}`,
    },
  };
}
