import { pathFor } from "../alternates";
import {
  caseStudies,
  featuredWork,
  pricingTiers,
  projects,
  services,
  stats,
  type CaseStudy,
  type Project,
} from "../data";
import type { Lang } from "../i18n";
import { homeEn } from "./en";
import { homeEs } from "./es";
import { homeRu } from "./ru";
import type { CaseStudyCopy, HomeCopy, ProjectCopy, ServiceCopy, StatCopy, TierCopy } from "./types";

export type { HomeCopy } from "./types";

export const HOME_COPY: Record<Lang, HomeCopy> = {
  en: homeEn,
  es: homeEs,
  ru: homeRu,
};

// The joins below put lib/data.ts and one language's copy back together, in
// lib/data.ts order — so the home page, its markdown and the API all list the
// same things in the same order.

export type LocalizedProject = Project & ProjectCopy & { alt: string };

export function homeProjects(lang: Lang): LocalizedProject[] {
  const { work } = HOME_COPY[lang];
  return projects.map((project) => ({
    ...project,
    ...work.projects[project.name],
    alt: work.imageAlt.replace("{name}", project.name),
  }));
}

/** The home page's work slideshow, in lib/data.ts featuredWork order. */
export function featuredProjects(lang: Lang): LocalizedProject[] {
  const all = homeProjects(lang);
  return featuredWork.map((name) => all.find((project) => project.name === name)!);
}

/**
 * The project cards on the service and sector pages: the same cards as the
 * home page's, in the page's own language — descriptions, tags and alt text
 * from lib/home/{en,es,ru}.ts.
 */
export function landingProjects(lang: Lang): LocalizedProject[] {
  return homeProjects(lang);
}

export type LocalizedService = ServiceCopy & {
  key: (typeof services)[number]["key"];
  seenIn: string[];
  image: string;
  /** the service page in the same language */
  href: string;
};

export function homeServices(lang: Lang): LocalizedService[] {
  const items = HOME_COPY[lang].services.items;
  return services.map((service) => ({
    ...service,
    ...items[service.key],
    href: pathFor(service.key, lang),
  }));
}

export type LocalizedCaseStudy = CaseStudy & CaseStudyCopy;

export function homeCaseStudies(lang: Lang): LocalizedCaseStudy[] {
  const { products } = HOME_COPY[lang].caseStudies;
  return caseStudies.map((study): LocalizedCaseStudy => ({ ...study, ...products[study.name] }));
}

export type LocalizedStat = (typeof stats)[number] & StatCopy;

export function homeStats(lang: Lang): LocalizedStat[] {
  const copy = HOME_COPY[lang].results.stats;
  return stats.map((stat) => ({ ...stat, ...copy[stat.key] }));
}

export type LocalizedTier = (typeof pricingTiers)[number] & TierCopy;

export function homeTiers(lang: Lang): LocalizedTier[] {
  const copy = HOME_COPY[lang].pricing.tiers;
  return pricingTiers.map((tier) => ({ ...tier, ...copy[tier.key] }));
}
