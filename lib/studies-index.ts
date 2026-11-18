import { LANGS, type Lang } from "./i18n";
import type { Study } from "./studies";
import { harborHomesEn, acmeClinicEn, speedReportEn } from "./studies-content-en";
import { harborHomesEs, acmeClinicEs, speedReportEs } from "./studies-content-es";
import { harborHomesRu } from "./ru/studies/harbor-homes";
import { acmeClinicRu } from "./ru/studies/acme-clinic";
import { speedReportRu } from "./ru/studies/speed-report";

/**
 * The registry every other surface reads from: routes, the sitemap, the
 * markdown representations, llms.txt and the index pages. Array order is
 * display order — the survey leads because it is the one a stranger has a
 * reason to read.
 */
export const STUDIES_EN: Study[] = [speedReportEn, acmeClinicEn, harborHomesEn];
export const STUDIES_ES: Study[] = [speedReportEs, acmeClinicEs, harborHomesEs];
export const STUDIES_RU: Study[] = [speedReportRu, acmeClinicRu, harborHomesRu];

const STUDIES_BY_LANG: Record<Lang, Study[]> = {
  en: STUDIES_EN,
  es: STUDIES_ES,
  ru: STUDIES_RU,
};

export const STUDIES: Study[] = LANGS.flatMap((lang) => STUDIES_BY_LANG[lang]);

export const STUDY_INDEX_PATH: Record<Lang, string> = {
  en: "/case-studies",
  es: "/es/casos",
  ru: "/ru/keysy",
};

export function studiesFor(lang: Lang): Study[] {
  return STUDIES_BY_LANG[lang];
}

/** Full route path -> study, e.g. "/es/casos/informe-velocidad-webs-marbella". */
export function studyByPath(path: string): Study | undefined {
  return STUDIES.find((study) => study.slug === path);
}

/** Last URL segment -> study, for the [slug] route params. */
export function studyBySegment(lang: Lang, segment: string): Study | undefined {
  return studiesFor(lang).find((study) => study.slug.split("/").pop() === segment);
}

export function studySegments(lang: Lang): string[] {
  return studiesFor(lang).map((study) => study.slug.split("/").pop()!);
}

/** The other studies in the same language, in display order. */
export function relatedStudies(study: Study): Study[] {
  return studiesFor(study.lang).filter((other) => other.key !== study.key);
}
