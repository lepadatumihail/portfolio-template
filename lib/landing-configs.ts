import type { ServiceConfig } from "./landing";
import {
  webDesignEn,
  webDesignEs,
  appDevEn,
  appDevEs,
  aiAutomationEn,
  aiAutomationEs,
} from "./landing-copy";

export const webDesignEnConfig: ServiceConfig = {
  slug: "/web-design-marbella",
  lang: "en",
  key: "web-design",
  linkLabel: "Web design in Marbella",
  siblings: [
    { label: "App development in Marbella", href: "/app-development-marbella" },
    { label: "AI automation in Marbella", href: "/ai-automation-marbella" },
    { label: "SEO in Marbella", href: "/seo-marbella" },
    { label: "Web design by industry", href: "/web-design" },
  ],
  proofProjects: ["Harbor Homes", "Acme Clinic", "Hillside Living", "Summit Builders"],
  reviewRail: true,
  highlightTier: 1,
  mailSubject: "Web design in Marbella",
  waMessage: "Hi Alex — I need a website for my business. When can we do the 15-min call?",
  serviceName: "Web design",
  copy: webDesignEn,
};

export const appDevEnConfig: ServiceConfig = {
  slug: "/app-development-marbella",
  lang: "en",
  key: "app-development",
  linkLabel: "App development in Marbella",
  siblings: [
    { label: "Web design in Marbella", href: "/web-design-marbella" },
    { label: "AI automation in Marbella", href: "/ai-automation-marbella" },
  ],
  proofProjects: ["Atlas Graph", "Acme Clinic", "Hillside Living", "Signal AI"],
  reviewRail: true,
  highlightTier: 2,
  mailSubject: "App development in Marbella",
  waMessage: "Hi Alex — I want to talk about a custom app or dashboard for my business. When can we do the 15-min call?",
  serviceName: "Web & app development",
  copy: appDevEn,
};

export const aiAutomationEnConfig: ServiceConfig = {
  slug: "/ai-automation-marbella",
  lang: "en",
  key: "ai-automation",
  linkLabel: "AI automation in Marbella",
  siblings: [
    { label: "Chatbots, voice & Meta automation", href: "/chatbots-marbella" },
    { label: "Web design in Marbella", href: "/web-design-marbella" },
    { label: "App development in Marbella", href: "/app-development-marbella" },
    { label: "SEO in Marbella", href: "/seo-marbella" },
  ],
  proofProjects: ["Atlas Graph", "Signal AI", "Signal Labs", "Acme Clinic"],
  reviewRail: true,
  highlightTier: 2,
  mailSubject: "AI automation in Marbella",
  waMessage: "Hi Alex — I want to automate part of my business with AI. When can we do the 15-min call?",
  serviceName: "AI automation",
  copy: aiAutomationEn,
};

export const webDesignEsConfig: ServiceConfig = {
  slug: "/es/diseno-web-marbella",
  lang: "es",
  key: "web-design",
  linkLabel: "Diseño web en Marbella",
  siblings: [
    { label: "Desarrollo de apps en Marbella", href: "/es/desarrollo-apps-marbella" },
    { label: "Automatización con IA en Marbella", href: "/es/automatizacion-ia-marbella" },
    { label: "SEO en Marbella", href: "/es/seo-marbella" },
    { label: "Diseño web por sectores", href: "/es/diseno-web" },
  ],
  proofProjects: ["Harbor Homes", "Acme Clinic", "Hillside Living", "Summit Builders"],
  reviewRail: true,
  highlightTier: 1,
  mailSubject: "Diseño web en Marbella",
  waMessage: "Hola Alex — necesito una web para mi negocio. ¿Cuándo hacemos la llamada de 15 minutos?",
  serviceName: "Diseño web",
  copy: webDesignEs,
};

export const appDevEsConfig: ServiceConfig = {
  slug: "/es/desarrollo-apps-marbella",
  lang: "es",
  key: "app-development",
  linkLabel: "Desarrollo de apps en Marbella",
  siblings: [
    { label: "Diseño web en Marbella", href: "/es/diseno-web-marbella" },
    { label: "Automatización con IA en Marbella", href: "/es/automatizacion-ia-marbella" },
  ],
  proofProjects: ["Atlas Graph", "Acme Clinic", "Hillside Living", "Signal AI"],
  reviewRail: true,
  highlightTier: 2,
  mailSubject: "Desarrollo de aplicaciones en Marbella",
  waMessage: "Hola Alex — quiero hablar de una app o panel a medida para mi negocio. ¿Cuándo hacemos la llamada de 15 minutos?",
  serviceName: "Desarrollo de aplicaciones web",
  copy: appDevEs,
};

export const aiAutomationEsConfig: ServiceConfig = {
  slug: "/es/automatizacion-ia-marbella",
  lang: "es",
  key: "ai-automation",
  linkLabel: "Automatización con IA en Marbella",
  siblings: [
    { label: "Chatbots, voz y automatización de Meta", href: "/es/chatbots-marbella" },
    { label: "Diseño web en Marbella", href: "/es/diseno-web-marbella" },
    { label: "Desarrollo de apps en Marbella", href: "/es/desarrollo-apps-marbella" },
    { label: "SEO en Marbella", href: "/es/seo-marbella" },
  ],
  proofProjects: ["Atlas Graph", "Signal AI", "Signal Labs", "Acme Clinic"],
  reviewRail: true,
  highlightTier: 2,
  mailSubject: "Automatización con IA en Marbella",
  waMessage: "Hola Alex — quiero automatizar parte de mi negocio con IA. ¿Cuándo hacemos la llamada de 15 minutos?",
  serviceName: "Automatización con IA",
  copy: aiAutomationEs,
};
