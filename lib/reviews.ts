/**
 * SAMPLE DATA: fictional reviews in the shape of real ones. Replace them with
 * your own reviews from your Google Business Profile, word for word: the /reviews
 * page (/es/opiniones, /ru/otzyvy), its markdown twin and llms.txt.
 *
 * Copied rather than embedded. Google Maps loads its reviews with JavaScript
 * and its robots.txt keeps crawlers out of /maps/, so a review that lives only
 * on Google never reaches the assistants that read this site. Here each one is
 * server-rendered text with a link back to the original on Google.
 *
 * Pulled with SearchAPI's google_maps_reviews engine (place_id
 * YOUR_GOOGLE_PLACE_ID, sort_by=newest) on REVIEWS_CHECKED. To refresh,
 * pull again, add the new reviews and move the date, then update the count
 * and quotes that public/llms.txt and the hire-alex-doe SKILL.md repeat.
 * Name, rating and text stay exactly as Google shows them, typos included,
 * and a review stays in the language it was written in.
 *
 * No Review or AggregateRating markup: Google's review-snippet guidelines make
 * a business's reviews of itself on its own site ineligible for stars, and
 * rule out marking up ratings gathered from another site.
 */
import { formatDate, formatNumber, LANG_META, plural, type Lang, type PluralForms } from "./i18n";
import { reviewsUiRu } from "./ru/ui";

export type GoogleReview = {
  /** as Google shows it */
  author: string;
  rating: number;
  /** the day it was posted, ISO */
  date: string;
  /**
   * The language of the text when it is not English. A list gives one per
   * line, for a review that switches language part-way.
   */
  lang?: string | string[];
  /** word for word; absent on a rating left without words */
  text?: string;
  /**
   * The line the review strip on the service pages shows: a sentence or two
   * of `text`, word for word, with " […] " where words are left out.
   */
  short?: string;
  /** the review itself on Google Maps */
  url: string;
};

/** The listing on Google Maps; lib/site-schema.ts gives it as the business's hasMap. */
export const GOOGLE_PROFILE_URL = "https://www.google.com/maps?cid=0000000000000000000";

/** The day the reviews below were last copied from Google. */
export const REVIEWS_CHECKED = "2026-10-23";

/**
 * Every review on the profile, the ones without words included, so the count
 * and the average are Google's. Array order is display order: the reviews
 * that say what was built come first.
 */
export const GOOGLE_REVIEWS: GoogleReview[] = [
  {
    author: "Hannah Weber",
    rating: 5,
    date: "2026-03-12",
    text: "We hired Alex to build a booking and housekeeping tool for our small hotel. It replaced three spreadsheets and the team picked it up in a day.\n\nChanges we asked for were done quickly and explained clearly.\nWould hire again.",
    short: "It replaced three spreadsheets and the team picked it up in a day.",
    url: "https://www.google.com/maps",
  },
  {
    author: "Daniel Reyes",
    rating: 5,
    date: "2026-02-20",
    text: "Alex built our agency website in under two weeks. He handled every change we asked for along the way, and the new enquiry forms brought in more qualified leads in the first month. Recommended!",
    short: "Alex built our agency website in under two weeks. […] the new enquiry forms brought in more qualified leads in the first month.",
    url: "https://www.google.com/maps",
  },
  {
    author: "Priya Shah",
    rating: 5,
    date: "2026-04-02",
    text: "We worked with Example.com on a new website and a small CRM. Delivery was fast and the result looks great.\nCommunication was easy throughout. Highly recommended.",
    short: "We worked with Example.com on a new website and a small CRM.",
    url: "https://www.google.com/maps",
  },
  {
    author: "Tom Hughes",
    rating: 5,
    date: "2026-05-18",
    text: "Clear brief, quick turnaround. Alex understood what we wanted and built the site and the client system with very little input from us.",
    short: "Alex understood what we wanted and built the site and the client system with very little input from us.",
    url: "https://www.google.com/maps",
  },
  {
    author: "Laura Martín",
    rating: 5,
    date: "2026-05-02",
    text: "Our clinic website went live quickly and Alex handled everything from start to finish. Would work with him again.",
    short: "Our clinic website went live quickly and Alex handled everything from start to finish.",
    url: "https://www.google.com/maps",
  },
  {
    author: "Chris Novak",
    rating: 5,
    date: "2026-04-27",
    text: "Delivered a customer-facing analytics dashboard end to end without problems. Careful developer with good taste.",
    short: "Delivered a customer-facing analytics dashboard end to end without problems.",
    url: "https://www.google.com/maps",
  },
  {
    author: "Elena García",
    rating: 5,
    date: "2026-03-30",
    text: "Easy to work with and knows Google, websites and ads well. Everything was straightforward from the start.",
    short: "Easy to work with and knows Google, websites and ads well.",
    url: "https://www.google.com/maps",
  },
  {
    author: "Sophie Laurent",
    rating: 5,
    date: "2026-03-08",
    text: "Professional, reliable and very knowledgeable.\nEverything was delivered to a high standard and with real attention to detail.",
    short: "Everything was delivered to a high standard and with real attention to detail.",
    url: "https://www.google.com/maps",
  },
  {
    author: "Michael Brown",
    rating: 5,
    date: "2026-02-14",
    text: "The quality of the work and the care for our project made me recommend Alex to others.\n\nA pleasure to work with.",
    short: "The quality of the work and the care for our project made me recommend Alex to others.",
    url: "https://www.google.com/maps",
  },
  {
    author: "Thomas Keller",
    rating: 5,
    date: "2026-01-25",
    lang: "de",
    text: "Sehr empfehlenswert! Alex hat unsere Webseite gebaut und wir sind mit dem Ergebnis sehr zufrieden. Die Umsetzung war schnell, professionell und unkompliziert.\n\nVielen Dank für die gute Zusammenarbeit!",
    short: "Alex hat unsere Webseite gebaut und wir sind mit dem Ergebnis sehr zufrieden.",
    url: "https://www.google.com/maps",
  },
  {
    author: "James Owen",
    rating: 5,
    date: "2026-01-16",
    text: "Great attention to detail, solid technical skills and on-time delivery. Thank you!",
    short: "Great attention to detail, solid technical skills and on-time delivery.",
    url: "https://www.google.com/maps",
  },
  {
    author: "Nina Fischer",
    rating: 5,
    date: "2026-01-09",
    text: "Alex builds modern websites and useful AI tools. Professional and easy to work with.",
    short: "Alex builds modern websites and useful AI tools.",
    url: "https://www.google.com/maps",
  },
  {
    author: "Olivia Park",
    rating: 5,
    date: "2025-12-18",
    text: "Lovely to work with! You understood the vision and made the whole process feel easy. 10/10.",
    short: "You understood the vision and made the whole process feel easy.",
    url: "https://www.google.com/maps",
  },
  {
    author: "Carlos Díaz",
    rating: 5,
    date: "2025-12-05",
    lang: ["es", "en"],
    text: "Un servicio excelente de principio a fin.\nFast, professional, reliable.",
    short: "Un servicio excelente de principio a fin.",
    url: "https://www.google.com/maps",
  },
  {
    author: "Ryan Taylor",
    rating: 5,
    date: "2025-11-21",
    text: "Very professional. The service was perfect.\nThanks",
    short: "The service was perfect.",
    url: "https://www.google.com/maps",
  },
  {
    author: "Grace Evans",
    rating: 5,
    date: "2025-11-10",
    url: "https://www.google.com/maps",
  },
  {
    author: "Leo Varga",
    rating: 5,
    date: "2025-11-02",
    url: "https://www.google.com/maps",
  },
];

export const REVIEW_COUNT = GOOGLE_REVIEWS.length;

/** The average to one decimal, as Google prints it. */
export const REVIEW_AVERAGE =
  Math.round((GOOGLE_REVIEWS.reduce((sum, review) => sum + review.rating, 0) / REVIEW_COUNT) * 10) / 10;

/** The reviews that came with words, in display order: the ones the page prints. */
export const WRITTEN_REVIEWS = GOOGLE_REVIEWS.filter((review) => review.text);

/** The reviews with a short line, in display order: the strip on the service pages. */
export const STRIP_REVIEWS = WRITTEN_REVIEWS.filter(
  (review): review is GoogleReview & { text: string; short: string } => Boolean(review.short),
);

for (const review of STRIP_REVIEWS) {
  assertWordForWord(review.text, review.short, `lib/reviews.ts: ${review.author}'s short line`);
}

// The copy says every review is five stars. When one is not, fail the build so
// the words change with the data.
if (GOOGLE_REVIEWS.some((review) => review.rating !== 5)) {
  throw new Error(
    "lib/reviews.ts: a review is under five stars; rewrite the dek and metaDescription in reviewsUi (and lib/ru/ui.ts), which say every review is five stars",
  );
}

export const REVIEWS_PATH: Record<Lang, string> = {
  en: "/reviews",
  es: "/es/opiniones",
  ru: "/ru/otzyvy",
};

export type ReviewsUi = {
  /** {rating} is the average, e.g. "5.0" */
  metaTitle: string;
  metaDescription: string;
  kicker: string;
  title: { main: string; accent: string };
  dek: string;
  /** "{n} reviews on Google", one form per plural category — see plural() in lib/i18n.ts */
  count: PluralForms;
  /** {date} is the day the reviews were copied */
  checked: string;
  /** the link to the listing on Google Maps */
  profileLink: string;
  /** each review's link to itself on Google */
  reviewLink: string;
  /** the stars' accessible name; {n} is the rating */
  stars: string;
  /** under the list: why most reviews are in English on the Spanish and Russian pages */
  languageNote: string;
  /** before a quoted review's translation on another page, by the review's language */
  translatedFrom: Partial<Record<string, string>>;
  /** the breadcrumb's name for the page */
  label: string;
};

export const reviewsUi: Record<Lang, ReviewsUi> = {
  en: {
    metaTitle: "example.com reviews — rated {rating} on Google",
    metaDescription:
      "Every Google review of example.com is five stars. Read them word for word — websites, a hotel system, a CRM — each with a link to the original on Google.",
    kicker: "Google reviews, word for word",
    title: { main: "What clients", accent: "say" },
    dek: "Every review on my Google Business Profile is five stars. Below is each one that came with words, exactly as written, under the name Google shows and with a link to the original.",
    count: { one: "{n} review on Google", other: "{n} reviews on Google" },
    checked: "Copied from Google on {date}",
    profileLink: "See them on Google Maps",
    reviewLink: "View on Google",
    stars: "{n} out of 5 stars",
    languageNote: "Each review is shown in the language it was written in.",
    translatedFrom: { de: "Translated from German", es: "Translated from Spanish" },
    label: "Reviews",
  },
  es: {
    metaTitle: "Opiniones de example.com — {rating} en Google",
    metaDescription:
      "Todas las reseñas de example.com en Google tienen cinco estrellas. Léelas tal cual — webs, un sistema para un hotel, un CRM — con enlace a cada original.",
    kicker: "Reseñas de Google, tal cual",
    title: { main: "Lo que dicen", accent: "los clientes" },
    dek: "Todas las reseñas de mi perfil de empresa en Google tienen cinco estrellas. Aquí tienes cada una que vino con texto, tal como se escribió, con el nombre que muestra Google y un enlace a la original.",
    count: { one: "{n} reseña en Google", other: "{n} reseñas en Google" },
    checked: "Copiadas de Google el {date}",
    profileLink: "Verlas en Google Maps",
    reviewLink: "Ver en Google",
    stars: "{n} de 5 estrellas",
    languageNote: "Cada reseña aparece en el idioma en que se escribió.",
    translatedFrom: { en: "Traducido del inglés", de: "Traducido del alemán" },
    label: "Opiniones",
  },
  ru: reviewsUiRu,
};

/** The page's words with the average, the count and the date filled in. */
export function reviewsCopy(lang: Lang) {
  const ui = reviewsUi[lang];
  const rating = formatNumber(REVIEW_AVERAGE, lang, 1);
  return {
    ...ui,
    rating,
    metaTitle: ui.metaTitle.replace("{rating}", rating),
    count: plural(lang, REVIEW_COUNT, ui.count),
    checked: ui.checked.replace("{date}", formatDate(REVIEWS_CHECKED, lang)),
  };
}

/** Stars as words: "5 out of 5 stars"; a string rating keeps its decimal, "5.0". */
export function starsLabel(rating: number | string, lang: Lang): string {
  const value = typeof rating === "number" ? formatNumber(rating, lang) : rating;
  return reviewsUi[lang].stars.replace("{n}", value);
}

/** "2026-10-03" -> "October 2026" / "octubre de 2026" / "октябрь 2026 г." */
export function formatReviewMonth(iso: string, lang: Lang): string {
  return new Intl.DateTimeFormat(LANG_META[lang].locale, {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${iso}T00:00:00Z`));
}

/** A review's text line by line, each line with the language it is written in. */
export function reviewLines(review: GoogleReview): { text: string; lang: string }[] {
  return (review.text ?? "")
    .split(/\n+/)
    .filter(Boolean)
    .map((text, i) => ({
      text,
      lang: Array.isArray(review.lang) ? (review.lang[i] ?? review.lang[0]) : (review.lang ?? "en"),
    }));
}

/** The language a review is written in; for one that switches, its first line's. */
export function reviewLang(review: GoogleReview): string {
  return Array.isArray(review.lang) ? review.lang[0] : (review.lang ?? "en");
}

/**
 * A review quoted on another page: whose, and the words shown. The excerpt is
 * cut from the review's text, with " […] " where words are left out, and is
 * never reworded.
 */
export type ReviewQuote = { author: string; excerpt: string };

/** A quote as a page prints it: the review's details joined on, checked. */
export type QuotedReview = {
  author: string;
  excerpt: string;
  /** the language the review is written in */
  lang: string;
  rating: number;
  date: string;
  url: string;
  /** the excerpt in the page's language, when the review is in another */
  translation?: string;
};

/**
 * The quote a page shows, checked against the reviews above. Fails the build
 * when the author has no written review, when a piece of the excerpt is not
 * in the review word for word (in order), or when the review is in another
 * language and the page has no translation or no label for one. `where` names
 * the page in the error.
 */
export function quoteReview(
  quote: ReviewQuote,
  pageLang: Lang,
  translation: string | undefined,
  where: string,
): QuotedReview {
  const review = WRITTEN_REVIEWS.find((candidate) => candidate.author === quote.author);
  if (!review?.text) {
    throw new Error(`${where}: no written Google review by "${quote.author}" in lib/reviews.ts`);
  }
  assertWordForWord(review.text, quote.excerpt, `${where}: ${quote.author}'s quote`);
  const lang = reviewLang(review);
  const foreign = lang !== pageLang;
  if (foreign && (!translation || !reviewsUi[pageLang].translatedFrom[lang])) {
    throw new Error(
      `${where}: ${quote.author}'s review is in "${lang}", so the ${pageLang} page needs a reviewTranslation and a translatedFrom label for "${lang}"`,
    );
  }
  return {
    author: review.author,
    excerpt: quote.excerpt,
    lang,
    rating: review.rating,
    date: review.date,
    url: review.url,
    translation: foreign ? translation : undefined,
  };
}

/**
 * Fails the build unless every piece of `excerpt` between " […] " cuts is in
 * `text`, in order: an excerpt may leave words out, never change them.
 */
function assertWordForWord(text: string, excerpt: string, what: string): void {
  let from = 0;
  for (const piece of excerpt.split(" […] ")) {
    const at = piece ? text.indexOf(piece, from) : -1;
    if (at === -1) throw new Error(`${what}: "${piece}" is not in the review word for word`);
    from = at + piece.length;
  }
}
