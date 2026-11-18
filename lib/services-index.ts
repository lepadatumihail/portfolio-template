import type { Lang } from "./i18n";
import type { ServiceConfig } from "./landing";
import { CHATBOTS_CONFIGS, type ChatbotsConfig } from "./chatbots";
import {
  aiAutomationEnConfig,
  aiAutomationEsConfig,
  appDevEnConfig,
  appDevEsConfig,
  webDesignEnConfig,
  webDesignEsConfig,
} from "./landing-configs";
import { seoEnConfig, seoEsConfig } from "./landing-seo";
import { aiAutomationRuConfig } from "./ru/ai-automation";
import { appDevRuConfig } from "./ru/app-development";
import { seoRuConfig } from "./ru/seo";
import { webDesignRuConfig } from "./ru/web-design";

/**
 * The Marbella service pages in every language — the registry routes,
 * the sitemap, hreflang and the markdown representations read. Array order is
 * the order they are listed in.
 */
export const SERVICE_CONFIGS: Record<Lang, (ServiceConfig | ChatbotsConfig)[]> = {
  en: [webDesignEnConfig, appDevEnConfig, aiAutomationEnConfig, seoEnConfig, CHATBOTS_CONFIGS.en],
  es: [webDesignEsConfig, appDevEsConfig, aiAutomationEsConfig, seoEsConfig, CHATBOTS_CONFIGS.es],
  ru: [webDesignRuConfig, appDevRuConfig, aiAutomationRuConfig, seoRuConfig, CHATBOTS_CONFIGS.ru],
};
