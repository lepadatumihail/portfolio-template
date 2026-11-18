import type { Lang } from "@/lib/i18n";
import { formatReviewMonth, reviewsCopy, reviewsUi, type QuotedReview } from "@/lib/reviews";
import { RatingLink } from "./rating-link";
import { typeset } from "./typeset";

/**
 * A client's Google review on a sector page: the rating line, which links to
 * all the reviews; the reviewer's own words; a translation when they wrote in
 * another language than the page's; then who and when, with a link to the
 * original on Google.
 */
export function ReviewQuote({
  review,
  lang,
  className = "",
}: {
  review: QuotedReview;
  lang: Lang;
  className?: string;
}) {
  const copy = reviewsCopy(lang);
  return (
    <figure className={className}>
      <RatingLink lang={lang} />
      {/* the reviewer's words, so no typesetting */}
      <blockquote
        lang={review.lang}
        className="mt-6 text-pretty font-sans text-xl font-light leading-relaxed text-foreground sm:text-2xl"
      >
        <p>{review.excerpt}</p>
      </blockquote>
      {review.translation ? (
        <p className="mt-4 text-pretty text-sm leading-relaxed text-muted">
          <span className="text-foreground">{reviewsUi[lang].translatedFrom[review.lang]}:</span>{" "}
          {typeset(review.translation, lang)}
        </p>
      ) : null}
      <figcaption className="mt-5 flex flex-wrap items-baseline gap-x-4 gap-y-1 text-sm">
        <span className="text-foreground">{review.author}</span>
        <span className="text-muted">{formatReviewMonth(review.date, lang)}</span>
        <a
          href={review.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted transition-colors duration-200 hover:text-accent"
        >
          {typeset(copy.reviewLink, lang)}&nbsp;↗︎
        </a>
      </figcaption>
    </figure>
  );
}
