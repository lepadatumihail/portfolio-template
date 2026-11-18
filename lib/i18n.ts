/**
 * The site's languages, in one list. Everything that varies by language —
 * routes, <html lang>, hreflang, og:locale, the language switchers, dates,
 * numbers, plurals — reads it from here, so adding a language starts with one
 * entry below rather than a hunt for "en" | "es" across the codebase.
 *
 * Which pages exist in which language is a separate question, answered by
 * lib/alternates.ts.
 */

export const LANGS = ["en", "es", "ru"] as const;

export type Lang = (typeof LANGS)[number];

type LangMeta = {
  /** <html lang>, hreflang and schema inLanguage */
  htmlLang: string;
  /** BCP 47 locale for Intl: dates, numbers, plural rules */
  locale: string;
  /** og:locale */
  ogLocale: string;
  /** the language's own name, as a link to it reads: "Español" */
  label: string;
  /** the same name mid-sentence, e.g. "(español)" after a link */
  inline: string;
  /** language-switch code: "ES" */
  short: string;
  /** URL prefix of the language's pages; English has none */
  prefix: string;
};

export const LANG_META: Record<Lang, LangMeta> = {
  en: {
    htmlLang: "en",
    locale: "en-GB",
    ogLocale: "en_US",
    label: "English",
    inline: "English",
    short: "EN",
    prefix: "",
  },
  es: {
    htmlLang: "es",
    locale: "es-ES",
    ogLocale: "es_ES",
    label: "Español",
    inline: "español",
    short: "ES",
    prefix: "/es",
  },
  ru: {
    htmlLang: "ru",
    locale: "ru-RU",
    ogLocale: "ru_RU",
    label: "Русский",
    inline: "русский",
    short: "RU",
    prefix: "/ru",
  },
};

/** "/", "/es", "/ru" */
export function homePath(lang: Lang): string {
  return LANG_META[lang].prefix || "/";
}

/** The other languages, in LANGS order. */
export function otherLangs(lang: Lang): Lang[] {
  return LANGS.filter((other) => other !== lang);
}

/**
 * Style for a language's own name printed on a page in another language.
 * Geist's Cyrillic face is a separate 15 KB file the browser fetches the
 * moment one Cyrillic letter is set in Geist, so «Русский» on an English or
 * Spanish page is set in the system font instead.
 */
export function labelStyle(label: Lang, page: Lang): { fontFamily: string } | undefined {
  return label === "ru" && page !== "ru" ? { fontFamily: "system-ui, sans-serif" } : undefined;
}

/** "2026-09-01" -> "1 September 2026" / "1 de septiembre de 2026" / "1 сентября 2026 г." */
export function formatDate(iso: string, lang: Lang): string {
  // UTC on both sides, so the printed day never depends on the server's zone
  return new Intl.DateTimeFormat(LANG_META[lang].locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${iso}T00:00:00Z`));
}

/** 6.32 -> "6.32" in English, "6,32" in Spanish and Russian. */
export function formatNumber(value: number, lang: Lang, decimals = 0): string {
  return new Intl.NumberFormat(LANG_META[lang].locale, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);
}

/**
 * One string per plural category, with {n} where the number goes. English and
 * Spanish only need `other` (and `one`); Russian uses one / few / many:
 * 1 минута, 2 минуты, 5 минут.
 */
export type PluralForms = Partial<Record<Intl.LDMLPluralRule, string>> & { other: string };

export function plural(lang: Lang, count: number, forms: PluralForms): string {
  const category = new Intl.PluralRules(LANG_META[lang].locale).select(count);
  return (forms[category] ?? forms.other).replace("{n}", formatNumber(count, lang));
}
