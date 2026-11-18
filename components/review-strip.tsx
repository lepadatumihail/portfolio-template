import type { Lang } from "@/lib/i18n";
import {
  formatReviewMonth,
  GOOGLE_PROFILE_URL,
  REVIEW_AVERAGE,
  reviewLang,
  reviewsCopy,
  starsLabel,
  STRIP_REVIEWS,
} from "@/lib/reviews";
import { ReviewRail, type RailReview } from "./review-rail";
import { Stars } from "./stars";
import { typeset } from "./typeset";

/**
 * The Google reviews on a service page: a line with the rating that links to
 * the listing on Google, over a drifting strip of short reviews, each card
 * opening its own review there. The words are the reviewers', in the
 * language they wrote in.
 */
export function ReviewStrip({ lang, className = "" }: { lang: Lang; className?: string }) {
  const copy = reviewsCopy(lang);
  const reviews: RailReview[] = STRIP_REVIEWS.map((review) => ({
    author: review.author,
    text: review.short,
    lang: reviewLang(review),
    rating: review.rating,
    stars: starsLabel(review.rating, lang),
    month: formatReviewMonth(review.date, lang),
    url: review.url,
  }));

  return (
    <div className={className}>
      <div className="mx-auto mb-5 w-full max-w-6xl px-5 sm:px-8">
        <a
          href={GOOGLE_PROFILE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="reveal group inline-flex w-fit items-center gap-2.5 text-sm text-muted transition-colors duration-200 hover:text-foreground"
        >
          <Stars rating={REVIEW_AVERAGE} size="size-3.5" />
          <span>
            <span className="tabular-nums text-foreground">{copy.rating}</span>
            {" · "}
            <span className="underline decoration-line underline-offset-4 transition-colors duration-200 group-hover:decoration-foreground">
              {typeset(copy.count, lang)}
            </span>
            &nbsp;↗︎
          </span>
        </a>
      </div>
      <ReviewRail reviews={reviews} linkLabel={copy.reviewLink} />
    </div>
  );
}
