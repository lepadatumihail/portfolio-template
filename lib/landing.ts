import type { Lang } from "./i18n";
import type { QuotedReview } from "./reviews";
import { landingUiRu } from "./ru/ui";

/** The four Marbella service pages. Each exists once per language. */
export type ServiceKey = "web-design" | "app-development" | "ai-automation" | "seo";

export type LandingCopy = {
  metaTitle: string;
  metaDescription: string;
  hero: {
    label: string;
    h1Main: string;
    h1Accent: string;
    sub: string;
    ctaLabel: string;
  };
  intro: string[];
  features: { title: string; description: string; includes?: string[] }[];
  localNote: string;
  processNote: string;
  faq: { q: string; a: string }[];
  crossLinksBlurb: string;
  ogAlt: string;
};

export type LandingConfig = {
  /** route path, e.g. "/web-design-marbella" */
  slug: string;
  lang: Lang;
  /**
   * the page's id across languages — a ServiceKey, or the sector's key on an
   * industry page. lib/alternates.ts pairs the language versions by it.
   */
  key: string;
  /** the other two same-language service pages */
  siblings: { label: string; href: string }[];
  /** names from lib/data projects[] to show as proof cards */
  proofProjects: string[];
  /** index of the pricing tier to highlight on this page */
  highlightTier: number;
  mailSubject: string;
  /** pre-filled WhatsApp message for this page's CTAs, in the page language */
  waMessage: string;
  /** Service schema name, e.g. "Web design" */
  serviceName: string;
  copy: LandingCopy;
  /** hub the page hangs off — industry pages get a breadcrumb level for it */
  parent?: { label: string; href: string };
  /** who the service is for, e.g. "Dental clinics" — Service schema audience */
  audience?: string;
  /** leave the whole "Proof" section out: no stats row, no project cards, no note */
  hideProof?: boolean;
  /** sector numbers shown instead of the site-wide stats row */
  stats?: { value: string; label: string }[];
  statsNote?: string;
  /** where those numbers are written up; defaults to the case-study index */
  statsSource?: { label: string; href: string };
  /** a client's Google review, quoted in the proof section after the project cards */
  review?: QuotedReview;
  /** the drifting strip of short Google reviews at the top of the proof section (the service pages) */
  reviewRail?: boolean;
  /** text on the link-preview card; defaults to the hero label, the h1 and the site-wide price floor */
  og?: { kicker: string; headline: string; foot?: string };
  /** a page that sells something other than a website brings its own price cards… */
  tiers?: LandingTier[];
  /** label on the highlighted card; "most popular" is only true where it has been earned */
  tierBadge?: string;
  pricingFootnote?: string;
  /** …and its own steps, since "live in days" is how a build runs, not a service */
  process?: {
    heading: { title: string; accent: string };
    steps: LandingStep[];
    footnote: string;
  };
};

/** A service page: one of the four keys, plus how a list of all pages names it. */
export type ServiceConfig = LandingConfig & {
  key: ServiceKey;
  /** link text in a list of the service pages (the home page's markdown), in the page's own language */
  linkLabel: string;
};

export type LandingStep = { day: string; title: string; description: string };

export type LandingTier = {
  name: string;
  price: string;
  /** numeric floor of `price` in EUR, for the Offer schema */
  minPrice: number;
  /** set when `price` recurs; absent means a one-off */
  per?: "month";
  tagline: string;
  features: string[];
  cta: string;
};

export type LandingUi = {
  /** `homeHref` is where the logo and the breadcrumb's first crumb lead */
  nav: { home: string; homeHref: string; contact: string; breadcrumb: string };
  availability: string;
  /** the city in the hero's status line: "Available for new projects · Marbella · 19:20" */
  city: string;
  seeWork: string;
  sections: {
    features: { index: string; title: string; accent: string };
    proof: { index: string; title: string; accent: string };
    process: { index: string; title: string; accent: string };
    pricing: { index: string; title: string; accent: string };
    faq: { index: string; title: string; accent: string };
  };
  stats: { value: string; label: string }[];
  statsNote: string;
  statsSource: { label: string; href: string };
  processSteps: LandingStep[];
  processFootnote: string;
  tiers: LandingTier[];
  tierBadge: string;
  pricingFootnote: string;
  alsoLooking: string;
  contact: {
    index: string;
    kicker: string;
    titleMain: string;
    titleAccent: string;
  };
  footerLocation: string;
};

export const landingUi: Record<Lang, LandingUi> = {
  en: {
    nav: { home: "example.com", homeHref: "/", contact: "Contact", breadcrumb: "Breadcrumb" },
    availability: "Available for new projects",
    city: "Marbella",
    seeWork: "See the work",
    sections: {
      features: { index: "01", title: "What you", accent: "get" },
      proof: { index: "02", title: "Proof, not", accent: "promises" },
      process: { index: "03", title: "First call to live,", accent: "in days" },
      pricing: { index: "04", title: "Simple", accent: "pricing" },
      faq: { index: "05", title: "Questions,", accent: "answered" },
    },
    stats: [
      { value: "6.3M+", label: "Google impressions" },
      { value: "209K", label: "Clicks from search" },
      { value: "25+", label: "Sites shipped" },
      { value: "5+", label: "Years of experience" },
    ],
    statsNote:
      "Search traffic measured in Google Search Console across client properties. Speed is only one of the things Google looks at; these are the results on sites built to load fast.",
    statsSource: { label: "See the full numbers in the case studies", href: "/case-studies" },
    processSteps: [
      {
        day: "Day 0",
        title: "The call",
        description:
          "A 15-minute chat about your business and what you need. You get a fixed price and a delivery date on the spot — no proposals, no waiting.",
      },
      {
        day: "Day 1",
        title: "Design & build",
        description:
          "I design and build in one pass. You get a live preview link the next day — a real website you can click, not a PDF mockup.",
      },
      {
        day: "Day 2",
        title: "Your feedback",
        description:
          "One focused revision round, applied straight to the live preview while we talk. Most changes happen within the hour.",
      },
      {
        day: "Day 3",
        title: "Launch",
        description:
          "Domain, SEO, analytics, WhatsApp — wired and live. Simple landing pages can launch 24 hours after our first call.",
      },
    ],
    processFootnote:
      "No agencies, no hand-offs, no six-week timelines. You talk to the person who builds it — that's why it's fast.",
    tiers: [
      {
        name: "Landing",
        price: "from €500",
        minPrice: 500,
        tagline: "One page that sells",
        features: [
          "Landing page designed & built",
          "Copy, SEO basics & analytics",
          "WhatsApp / contact capture",
          "Live in 24–48 hours",
        ],
        cta: "Start with a landing",
      },
      {
        name: "Business site",
        price: "from €1,500",
        minPrice: 1500,
        tagline: "Your whole business, online",
        features: [
          "Multi-page site, custom design",
          "Booking flows & lead funnels",
          "Multilingual + full SEO setup",
          "Google reviews & analytics",
          "Live in 1–2 weeks",
        ],
        cta: "Build my site",
      },
      {
        name: "Platform & AI",
        price: "€3,000+",
        minPrice: 3000,
        tagline: "Custom builds, scoped together",
        features: [
          "Dashboards & client portals",
          "AI bots & automations",
          "Payments, auth & documents",
          "Timeline depends on scope",
        ],
        cta: "Scope it with me",
      },
    ],
    tierBadge: "most popular",
    pricingFootnote:
      "Every project ships fast-loading, mobile-first and SEO-ready. Prices are starting points — you get an exact fixed quote on our first call, and it doesn't change after.",
    alsoLooking: "also looking for",
    contact: {
      index: "06",
      kicker: "Have a project in mind?",
      titleMain: "Let's",
      titleAccent: "talk",
    },
    footerLocation: "marbella, spain",
  },
  es: {
    nav: { home: "example.com", homeHref: "/es", contact: "Contacto", breadcrumb: "Ruta de navegación" },
    availability: "Disponible para nuevos proyectos",
    city: "Marbella",
    seeWork: "Ver el trabajo",
    sections: {
      features: { index: "01", title: "Lo que", accent: "recibes" },
      proof: { index: "02", title: "Datos, no", accent: "promesas" },
      process: { index: "03", title: "De la llamada al lanzamiento,", accent: "en días" },
      pricing: { index: "04", title: "Precios", accent: "claros" },
      faq: { index: "05", title: "Preguntas,", accent: "respondidas" },
    },
    stats: [
      { value: "6,3M+", label: "Impresiones en Google" },
      { value: "209.000", label: "Clics desde buscadores" },
      { value: "25+", label: "Webs entregadas" },
      { value: "5+", label: "Años de experiencia" },
    ],
    statsNote:
      "Tráfico de búsqueda medido en Google Search Console sobre webs de clientes. La velocidad es solo una de las cosas que mira Google; estos son los resultados de webs hechas para cargar rápido.",
    statsSource: { label: "Mira los números completos en los casos reales", href: "/es/casos" },
    processSteps: [
      {
        day: "Día 0",
        title: "La llamada",
        description:
          "15 minutos sobre tu negocio y lo que necesitas. Sales con un precio cerrado y una fecha de entrega en el momento — sin propuestas, sin esperas.",
      },
      {
        day: "Día 1",
        title: "Diseño y desarrollo",
        description:
          "Diseño y construyo en una sola pasada. Al día siguiente tienes un enlace de vista previa real — una web que puedes clicar, no un PDF.",
      },
      {
        day: "Día 2",
        title: "Tus cambios",
        description:
          "Una ronda de cambios enfocada, aplicada en directo sobre la vista previa mientras hablamos. La mayoría se hace dentro de la hora.",
      },
      {
        day: "Día 3",
        title: "Lanzamiento",
        description:
          "Dominio, SEO, analítica, WhatsApp — todo conectado y online. Una landing sencilla puede lanzarse 24 horas después de la primera llamada.",
      },
    ],
    processFootnote:
      "Sin agencias, sin intermediarios, sin plazos de seis semanas. Hablas con la misma persona que lo construye — por eso es rápido.",
    tiers: [
      {
        name: "Landing",
        price: "desde 500 €",
        minPrice: 500,
        tagline: "Una página que vende",
        features: [
          "Landing diseñada y desarrollada",
          "Textos, SEO básico y analítica",
          "Captación por WhatsApp / contacto",
          "Online en 24–48 horas",
        ],
        cta: "Empieza con una landing",
      },
      {
        name: "Web de empresa",
        price: "desde 1.500 €",
        minPrice: 1500,
        tagline: "Todo tu negocio, online",
        features: [
          "Web multipágina a medida",
          "Reservas y embudos de captación",
          "Multiidioma + SEO completo",
          "Reseñas de Google y analítica",
          "Online en 1–2 semanas",
        ],
        cta: "Quiero mi web",
      },
      {
        name: "Plataforma & IA",
        price: "3.000 €+",
        minPrice: 3000,
        tagline: "A medida, definido contigo",
        features: [
          "Paneles y portales de clientes",
          "Bots de IA y automatizaciones",
          "Pagos, autenticación y documentos",
          "Plazo según alcance",
        ],
        cta: "Defínelo conmigo",
      },
    ],
    tierBadge: "el más pedido",
    pricingFootnote:
      "Todo se entrega rápido, mobile-first y listo para SEO. Los precios son puntos de partida — presupuesto cerrado en la primera llamada, y no cambia después.",
    alsoLooking: "también te puede interesar",
    contact: {
      index: "06",
      kicker: "¿Tienes un proyecto en mente?",
      titleMain: "",
      titleAccent: "Hablamos",
    },
    footerLocation: "marbella, españa",
  },
  ru: landingUiRu,
};
