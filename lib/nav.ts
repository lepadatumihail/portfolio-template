import type { Lang } from "./i18n";

/**
 * The words of the site chrome every page shares: the sticky nav
 * (components/site-nav.tsx), the floating WhatsApp button
 * (components/site-document.tsx) and the WhatsApp button in the "Let's talk"
 * footers (components/contact.tsx, components/landing/landing-page.tsx), and
 * the line that marks enquiries from a Google Ads click
 * (components/ad-lead-tag.tsx). The language names in the picker are not
 * here: each language is listed under its own name, from LANG_META in
 * lib/i18n.ts.
 */

/**
 * The pages the nav's Services menu lists, in order: keys from
 * lib/alternates.ts, so each link goes to the page in the reader's language.
 */
export const NAV_SERVICES = ["web-design", "seo", "ai-automation", "chatbots", "app-development"] as const;

export type NavService = (typeof NAV_SERVICES)[number];

type NavCopy = {
  /** aria-label of the <nav> landmark; screen readers add "navigation" */
  label: string;
  /**
   * the four links, in order. Services opens the menu of service pages; Work
   * and Pricing are home page sections (Pricing stays on a page that has its
   * own prices); Reviews is the reviews page. Phones get them in the menu.
   */
  links: { services: string; work: string; pricing: string; reviews: string };
  /** the Services menu: each page's name and one line on what it is */
  services: Record<NavService, { title: string; line: string }>;
  /** the Services menu's last link, to the sector pages */
  industries: string;
  /** the phone menu button's accessible name */
  menu: string;
  /** the navy button that goes to the home page's free website review form */
  review: string;
  /** the language picker's spoken name, read before its visible code: "Language: EN" */
  language: string;
  /** the floating WhatsApp button's accessible name, and the footer button's label */
  whatsapp: string;
  /**
   * put before the WhatsApp message when the visit came from a Google Ads
   * click, so ad enquiries can be counted.
   * Written as the visitor, who sends it.
   */
  adLead: string;
};

export const NAV_COPY: Record<Lang, NavCopy> = {
  en: {
    label: "Main",
    links: { services: "Services", work: "Work", pricing: "Pricing", reviews: "Reviews" },
    services: {
      "web-design": { title: "Web design", line: "Business sites and landing pages that bring enquiries" },
      seo: { title: "SEO", line: "Get found on Google, Maps and AI search" },
      "ai-automation": { title: "AI automation", line: "Document imports and the work that repeats" },
      chatbots: { title: "Chatbots & AI agents", line: "WhatsApp, voice and Meta, answered for you" },
      "app-development": { title: "App development", line: "Client portals, bookings and payments" },
    },
    industries: "Websites by industry",
    menu: "Menu",
    review: "Free review",
    language: "Language",
    whatsapp: "Chat on WhatsApp",
    adLead: "I saw your Google ad.",
  },
  es: {
    label: "Principal",
    // "Proyectos", not "Trabajos": the link lands on the section headed
    // "Proyectos seleccionados" (lib/home/es.ts), and the hero's second link
    // reads "Ver proyectos recientes"
    links: { services: "Servicios", work: "Proyectos", pricing: "Precios", reviews: "Opiniones" },
    services: {
      "web-design": { title: "Diseño web", line: "Webs de empresa y landings que traen clientes" },
      seo: { title: "SEO", line: "Que te encuentren en Google, Maps y la IA" },
      "ai-automation": { title: "Automatización con IA", line: "Lectura de documentos y tareas que se repiten" },
      chatbots: { title: "Chatbots y agentes de IA", line: "WhatsApp, voz y Meta que responden por ti" },
      "app-development": { title: "Desarrollo de apps", line: "Portales de clientes, reservas y pagos" },
    },
    industries: "Webs por sector",
    menu: "Menú",
    review: "Revisión gratis",
    language: "Idioma",
    // the hero CTA's wording, «tú» like the rest of the Spanish pages
    whatsapp: "Escríbeme por WhatsApp",
    adLead: "Vi tu anuncio en Google.",
  },
  ru: {
    label: "Основная",
    links: { services: "Услуги", work: "Работы", pricing: "Цены", reviews: "Отзывы" },
    services: {
      "web-design": { title: "Создание сайтов", line: "Сайты компаний и лендинги, которые приводят заявки" },
      seo: { title: "SEO", line: "Чтобы вас находили в Google, на Картах и в ИИ-поиске" },
      "ai-automation": { title: "ИИ-автоматизация", line: "Обработка документов и рутинные задачи" },
      chatbots: { title: "Чат-боты и ИИ-агенты", line: "WhatsApp, голос и Meta отвечают за вас" },
      "app-development": { title: "Разработка приложений", line: "Клиентские порталы, записи и оплаты" },
    },
    industries: "Сайты по отраслям",
    menu: "Меню",
    review: "Бесплатный разбор",
    language: "Язык",
    whatsapp: "Написать в WhatsApp",
    // «пишу по», not «увидел»: the visitor's gender is unknown
    adLead: "Пишу по вашей рекламе в Google.",
  },
};
