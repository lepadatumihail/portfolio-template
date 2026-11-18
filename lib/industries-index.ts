import { LANGS, type Lang } from "./i18n";
import type { LandingConfig } from "./landing";
import {
  INDUSTRY_HUB_PATH,
  industryConfig,
  type IndustryEntry,
  type IndustryLocale,
  type IndustrySource,
} from "./industries";
import { aestheticClinics } from "./industries-content/aesthetic-clinics";
import { carRental } from "./industries-content/car-rental";
import { carWash } from "./industries-content/car-wash";
import { construction } from "./industries-content/construction";
import { dentalClinics } from "./industries-content/dental-clinics";
import { hotels } from "./industries-content/hotels";
import { lawFirms } from "./industries-content/law-firms";
import { realEstate } from "./industries-content/real-estate";
import { restaurants } from "./industries-content/restaurants";
import { aestheticClinicsRu } from "./ru/industries/aesthetic-clinics";
import { carRentalRu } from "./ru/industries/car-rental";
import { carWashRu } from "./ru/industries/car-wash";
import { constructionRu } from "./ru/industries/construction";
import { dentalClinicsRu } from "./ru/industries/dental-clinics";
import { hotelsRu } from "./ru/industries/hotels";
import { lawFirmsRu } from "./ru/industries/law-firms";
import { realEstateRu } from "./ru/industries/real-estate";
import { restaurantsRu } from "./ru/industries/restaurants";

/** A sector from lib/industries-content/ with its Russian page from lib/ru/industries/. */
function sector(source: IndustrySource, ru: IndustryLocale): IndustryEntry {
  return { ...source, ru };
}

/**
 * The registry every other surface reads from: routes, the hub, the sitemap,
 * the markdown representations and the JSON API. Array order is display
 * order on the hub — sectors with published client work lead.
 */
export const INDUSTRIES: IndustryEntry[] = [
  sector(realEstate, realEstateRu),
  sector(dentalClinics, dentalClinicsRu),
  sector(aestheticClinics, aestheticClinicsRu),
  sector(construction, constructionRu),
  sector(carRental, carRentalRu),
  sector(carWash, carWashRu),
  sector(restaurants, restaurantsRu),
  sector(hotels, hotelsRu),
  sector(lawFirms, lawFirmsRu),
];

export const INDUSTRY_CONFIGS = Object.fromEntries(
  LANGS.map((lang) => [lang, INDUSTRIES.map((entry) => industryConfig(entry, lang, INDUSTRIES))]),
) as Record<Lang, LandingConfig[]>;

export function industrySegments(lang: Lang): string[] {
  return INDUSTRIES.map((entry) => entry[lang].slug);
}

/** Last URL segment -> page config, for the dynamic route params. */
export function industryConfigBySegment(lang: Lang, segment: string): LandingConfig | undefined {
  return INDUSTRY_CONFIGS[lang].find(
    (config) => config.slug === `${INDUSTRY_HUB_PATH[lang]}/${segment}`,
  );
}
