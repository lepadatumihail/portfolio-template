import type { FooterPage } from "../alternates";
import type { CaseStudyName, ProjectName, StatKey, TierKey } from "../data";
import type { Lang } from "../i18n";
import type { ServiceKey } from "../landing";

/**
 * Every word the home page prints, in one language: lib/home/en.ts, es.ts and
 * ru.ts each export one of these. The components under components/ render it,
 * lib/markdown/render.ts turns it into the markdown home page, lib/site-schema.ts
 * builds the FAQPage from it, and /api/v1/profile serves the English one.
 *
 * Anything that is the same in every language — project names, URLs, images,
 * numbers, the email address, the WhatsApp number — stays in lib/data.ts;
 * the records keyed by project or service name below join onto it.
 */

/** A section heading: the plain words, then the serif-italic accent. */
export type Heading = { title: string; accent: string };

export type ServiceCopy = {
  title: string;
  /** one line under the title: what it is for */
  summary: string;
  description: string;
  /** what it covers, as short concrete lines */
  includes: string[];
  /** starting price, as printed on the service page */
  price: string;
  /** text of the link to the service page */
  linkLabel: string;
  /** alt text of the screenshot that goes with it */
  imageAlt: string;
};

export type ProjectCopy = {
  description: string;
  tags: string[];
  /** overrides the hostname shown on the card — for demo links */
  linkLabel?: string;
};

export type CaseStudyCopy = {
  client: string;
  description: string;
  features: string[];
  /** link text when the product has a public demo; defaults to `demoLabel` */
  linkLabel?: string;
};

export type TierCopy = {
  name: string;
  price: string;
  tagline: string;
  features: string[];
  cta: string;
  /** subject line of the email the button opens */
  subject: string;
};

export type StatCopy = {
  /** printed straight after the number: "M", "K", "+" */
  suffix: string;
  label: string;
  note: string;
};

export type HomeCopy = {
  lang: Lang;

  /** the language's site-wide <title>, description and default link preview */
  meta: { title: string; description: string };
  /** the home page's link-preview card */
  og: { alt: string; headline: string; sub: string; foot: string };

  hero: {
    availability: string;
    h1Main: string;
    /** the serif-italic word(s) that close the headline */
    h1Accent: string;
    sub: string;
    cta: string;
    /** pre-filled WhatsApp message behind the button */
    waMessage: string;
    seeWork: string;
  };

  services: {
    heading: Heading;
    intro: string;
    includes: string;
    chatbotsLink: string;
    seenIn: string;
    items: Record<ServiceKey, ServiceCopy>;
    /** words inside the drawings — placeholders, never claims */
    sketches: {
      site: {
        business: string;
        headline: string;
        day: string;
        party: string;
        book: string;
        message: string;
      };
      found: {
        domain: string;
        result: string;
        business: string;
        maps: string;
        open: string;
        question: string;
        /** "Try <business>, open now." either side of the business name */
        answerBefore: string;
        answerAfter: string;
      };
      automation: {
        file: string;
        read: string;
        client: string;
        date: string;
        dateValue: string;
        total: string;
        totalValue: string;
        saved: string;
      };
      dashboard: {
        title: string;
        add: string;
        /** one per table row, top to bottom */
        rows: { date: string; status: string }[];
      };
    };
  };

  work: {
    heading: Heading;
    /** screenshot alt text; {name} is the project's name */
    imageAlt: string;
    projects: Record<ProjectName, ProjectCopy>;
  };

  process: {
    heading: Heading;
    steps: { day: string; title: string; description: string }[];
    note: string;
  };

  pricing: {
    heading: Heading;
    /** on the highlighted card */
    badge: string;
    tiers: Record<TierKey, TierCopy>;
    note: string;
  };

  guarantee: {
    heading: Heading;
    kicker: string;
    titleMain: string;
    titleAccent: string;
    body: string;
    /** under the big "100%" */
    score: string;
    scoreNote: string;
    /** the same claim as one sentence, for the markdown page */
    claim: string;
    points: { title: string; description: string }[];
    note: string;
  };

  results: {
    heading: Heading;
    intro: string;
    stats: Record<StatKey, StatCopy>;
    note: string;
  };

  caseStudies: {
    heading: Heading;
    demoLabel: string;
    /** label before the tech list in the markdown page */
    stack: string;
    products: Record<CaseStudyName, CaseStudyCopy>;
    /** words inside the drawings — placeholders, never claims */
    sketches: {
      portal: {
        active: string;
        /** under the tracker: first step, current step, last step */
        steps: [string, string, string];
        /** one per document row, top to bottom */
        documents: { name: string; status: string }[];
        invoice: string;
        paid: string;
      };
    };
  };

  studies: { heading: Heading; note: string };

  faq: { heading: Heading; items: { q: string; a: string }[] };

  /** the sector pages, linked from the body near the end; the intro is the hub's */
  industries: { heading: Heading; all: string };

  contact: {
    kicker: string;
    titleMain: string;
    titleAccent: string;
    links: Record<FooterPage, string>;
    /** before the row of sector links */
    websitesFor: string;
    location: string;
  };

  /**
   * The words only the compact home page prints. The rest of what it shows —
   * the headline, the project descriptions, the tier names and prices, the
   * process heading and note, the FAQ — comes from the blocks above.
   */
  compact: {
    review: {
      label: string;
      title: string;
      /** the serif-italic word(s) that close the title */
      accent: string;
      body: string;
      /** the website field's label and placeholder */
      website: string;
      placeholder: string;
      /** the checkbox for visitors with no site yet */
      noSite: string;
      /** shown when neither a website nor the checkbox was given */
      missing: string;
      /** how to send the findings back: an email address or a phone number */
      contact: string;
      contactPlaceholder: string;
      missingContact: string;
      /** the button that sends the request to Alex's Telegram (app/api/review) */
      submit: string;
      sending: string;
      /** after it went: {site} and {contact} are what was typed */
      sentTitle: string;
      sentBody: string;
      sentBodyNoSite: string;
      /** when it didn't go; the WhatsApp link follows */
      failed: string;
      /** the WhatsApp link under the button */
      whatsapp: string;
      /** that link's pre-filled message; {site} is the address typed */
      message: string;
      messageNoSite: string;
    };
    services: {
      heading: Heading;
      items: Record<ServiceKey, { title: string; line: string }>;
    };
    /** the work slideshow's arrow buttons, read by screen readers */
    work: { previous: string; next: string };
    /** the process cards; `day` is the small time label in each card's corner */
    steps: { day: string; title: string; line: string }[];
  };

  /** headings and lines only the markdown home page has */
  markdown: {
    servicePages: string;
    caseStudies: string;
    basedIn: string;
  };
};
