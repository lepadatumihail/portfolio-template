/**
 * Case studies — the long-form, evidence-first pages under /case-studies
 * (and /es/casos, /ru/keysy).
 *
 * Deliberately separate from `caseStudies` in lib/data.ts, which is the
 * homepage "Products & dashboards" strip: that lists what was built, this
 * shows what happened afterwards, with the measurement window attached to
 * every number.
 *
 * The content model is a small block union rather than MDX. Everything here
 * is data, so the same study renders as HTML, as the markdown representation
 * in lib/markdown/render.ts, and as JSON-LD — one source, three surfaces.
 */
import type { FooterPage } from "./alternates";
import { formatDate, plural, type Lang, type PluralForms } from "./i18n";
import { studyUiRu } from "./ru/ui";

export type StudyStat = {
  value: string;
  label: string;
  /** measurement window or qualifier — printed under the number */
  note?: string;
};

export type StudyBar = {
  label: string;
  /** plotted value, in whatever unit `max` is expressed in */
  value: number;
  /** the number as it should be read, e.g. "9,778" or "7.5s" */
  display: string;
  highlight?: boolean;
};

export type StudyBlock =
  | { kind: "prose"; heading?: string; body: string[] }
  | { kind: "stats"; heading?: string; note?: string; items: StudyStat[] }
  | {
      kind: "chart";
      heading?: string;
      intro?: string;
      caption?: string;
      /** upper bound of the value axis */
      max: number;
      /** header labels used by the markdown table form of this chart */
      columns?: [string, string];
      bars: StudyBar[];
    }
  | {
      kind: "table";
      heading?: string;
      intro?: string;
      caption?: string;
      columns: string[];
      rows: string[][];
      /** per-column alignment; defaults to left for col 0, right for the rest */
      numericFrom?: number;
    }
  | { kind: "points"; heading?: string; intro?: string; items: { title: string; body: string }[] }
  | { kind: "callout"; body: string };

/**
 * A study that publishes its own measurements gets a Dataset node in its
 * JSON-LD (lib/studies-schema.ts); the rest report someone else's data and
 * get none. The same in every language version.
 */
export type StudyDataset = {
  /** ISO 8601 interval, e.g. "2026-08-08/2026-08-23" */
  temporalCoverage: string;
  /** what was measured, as the metrics are named */
  variableMeasured: string[];
};

export type Study = {
  /** route path, e.g. "/case-studies/acme-clinic-marbella-seo" */
  slug: string;
  lang: Lang;
  /** shared id of the language versions — lib/alternates.ts pairs them by it */
  key: string;
  /** ISO date, used for datePublished and the printed date */
  published: string;
  updated?: string;
  readingMinutes: number;

  metaTitle: string;
  metaDescription: string;

  hero: {
    kicker: string;
    h1Main: string;
    /** the serif-italic accent word(s) that close the headline */
    h1Accent: string;
    dek: string;
  };

  /** the fact strip under the headline: client, sector, languages, window */
  facts: { label: string; value: string }[];

  /** TL;DR. First thing a reader — or a model quoting the page — sees. */
  summary: string[];

  blocks: StudyBlock[];
  takeaways: string[];

  /** where every number came from, and what it does and doesn't prove */
  method: string[];

  cta: { heading: string; body: string; label: string; waMessage: string };

  /** headline printed on the generated OG card */
  ogHeadline: string;
  ogKicker: string;

  image?: string;
  imageAlt?: string;
  /** the live site this study is about */
  clientUrl?: string;
  clientLabel?: string;

  /** set only on a study whose numbers are its own measurements */
  dataset?: StudyDataset;
};

export type StudyUi = {
  /** `homeHref` is where the logo leads */
  nav: { contact: string; homeHref: string };
  indexTitle: { main: string; accent: string };
  indexKicker: string;
  indexDek: string;
  indexMetaTitle: string;
  indexMetaDescription: string;
  indexHref: string;
  backToIndex: string;
  labels: {
    summary: string;
    takeaways: string;
    method: string;
    readNext: string;
    published: string;
    updated: string;
    /** "{n} min read", one form per plural category — see plural() in lib/i18n.ts */
    readingTime: PluralForms;
    liveSite: string;
    allStudies: string;
  };
  footerLocation: string;
  seeWork: string;
  /** the footer's link row, labelled per page */
  footer: Record<FooterPage, string>;
};

export const studyUi: Record<Lang, StudyUi> = {
  en: {
    nav: { contact: "Contact", homeHref: "/" },
    indexTitle: { main: "Case", accent: "studies" },
    indexKicker: "Evidence, with the window attached",
    indexDek:
      "Three write-ups with real numbers behind them — Search Console exports, PageSpeed audits and a 211-site survey of local business websites. Every figure says where it came from and what it does not prove.",
    indexMetaTitle: "Case studies — measured results from Marbella web projects",
    indexMetaDescription:
      "Real Search Console and PageSpeed data from Marbella websites: a dental clinic's search growth, a four-language property portal, 211 sites speed-tested.",
    indexHref: "/case-studies",
    backToIndex: "All case studies",
    labels: {
      summary: "In short",
      takeaways: "What to take from this",
      method: "Method & sources",
      readNext: "Read next",
      published: "Published",
      updated: "Updated",
      readingTime: { other: "{n} min read" },
      liveSite: "Visit the live site",
      allStudies: "Case studies",
    },
    footerLocation: "Marbella, Spain",
    seeWork: "See the work",
    footer: {
      "web-design": "Web design Marbella",
      "app-development": "App development",
      "ai-automation": "AI automation",
      chatbots: "Chatbots & AI agents",
      seo: "SEO",
      "industry-hub": "By industry",
      "case-studies": "Case studies",
      reviews: "Reviews",
    },
  },
  es: {
    nav: { contact: "Contacto", homeHref: "/es" },
    indexTitle: { main: "Casos", accent: "reales" },
    indexKicker: "Datos, con su periodo de medición",
    indexDek:
      "Tres análisis con números verificables detrás — exportaciones de Search Console, auditorías de PageSpeed y un estudio de 211 webs de negocios locales. Cada cifra indica de dónde sale y qué no demuestra.",
    indexMetaTitle: "Casos reales — resultados medidos de webs en Marbella",
    indexMetaDescription:
      "Datos reales de Search Console y PageSpeed de webs de Marbella: una clínica dental, un portal inmobiliario en cuatro idiomas y 211 webs medidas.",
    indexHref: "/es/casos",
    backToIndex: "Todos los casos",
    labels: {
      summary: "En resumen",
      takeaways: "Qué llevarte de aquí",
      method: "Método y fuentes",
      readNext: "Sigue leyendo",
      published: "Publicado",
      updated: "Actualizado",
      readingTime: { other: "{n} min de lectura" },
      liveSite: "Ver la web en vivo",
      allStudies: "Casos reales",
    },
    footerLocation: "Marbella, España",
    seeWork: "Ver el trabajo",
    footer: {
      "web-design": "Diseño web Marbella",
      "app-development": "Desarrollo de apps",
      "ai-automation": "Automatización con IA",
      chatbots: "Chatbots y agentes de IA",
      seo: "SEO",
      "industry-hub": "Por sectores",
      "case-studies": "Casos reales",
      reviews: "Opiniones",
    },
  },
  ru: studyUiRu,
};

/** "2026-09-01" -> "1 September 2026" / "1 de septiembre de 2026" / "1 сентября 2026 г." */
export function formatStudyDate(iso: string, lang: Lang): string {
  return formatDate(iso, lang);
}

/** "7 min read", in the page language's plural form. */
export function formatReadingTime(minutes: number, lang: Lang): string {
  return plural(lang, minutes, studyUi[lang].labels.readingTime);
}
