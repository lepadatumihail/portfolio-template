import type { Lang } from "@/lib/i18n";
import {
  formatReviewMonth,
  GOOGLE_PROFILE_URL,
  REVIEW_AVERAGE,
  reviewLines,
  reviewsCopy,
  starsLabel,
  WRITTEN_REVIEWS,
} from "@/lib/reviews";
import { SiteNav } from "@/components/site-nav";
import { Stars } from "@/components/stars";
import { StudyBackground, StudyFooter } from "@/components/study/study-chrome";
import { joint, typeset, typesetHeading } from "@/components/typeset";

const rise = (delay: number) => ({ style: { animationDelay: `${delay}s` } });

export function ReviewsPage({ lang }: { lang: Lang }) {
  const copy = reviewsCopy(lang);

  return (
    <main lang={lang} className="overflow-x-clip">
      <StudyBackground />
      <SiteNav lang={lang} pageKey="reviews" />

      <header className="relative">
        <div className="relative mx-auto w-full max-w-3xl px-5 pb-14 pt-31 sm:px-8 sm:pb-20 sm:pt-41">
          {/* the dot sits on the first line when the kicker wraps */}
          <p {...rise(0.1)} className="fade-rise flex items-start gap-2.5 text-sm text-muted">
            <span aria-hidden className="mt-[0.4375rem] size-1.5 shrink-0 rounded-full bg-accent" />
            <span>{typeset(copy.kicker, lang)}</span>
          </p>
          <h1
            {...rise(0.2)}
            className="fade-rise mt-6 text-balance font-sans text-[clamp(2.4rem,6vw,4rem)] font-light leading-[1.06] tracking-[-0.02em] text-foreground"
          >
            {typesetHeading(copy.title.main, lang, "sm")}
            {joint(copy.title.main, lang)}
            <span className="font-serif italic tracking-[-0.01em]">
              {typesetHeading(copy.title.accent, lang, "sm")}
            </span>
          </h1>
          <p
            {...rise(0.3)}
            className="fade-rise mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted"
          >
            {typeset(copy.dek, lang)}
          </p>

          <div {...rise(0.4)} className="fade-rise mt-10 flex items-center gap-4">
            <p className="font-sans text-5xl font-light leading-none tabular-nums tracking-tight text-foreground">
              {copy.rating}
            </p>
            <div className="flex flex-col gap-1.5">
              <Stars rating={REVIEW_AVERAGE} size="size-4" />
              <p className="text-sm text-foreground">{typeset(copy.count, lang)}</p>
            </div>
          </div>
          {/* two items rather than one line with a "·": on a phone they wrap
              onto a line each instead of leaving the dot at a line's end */}
          <p
            {...rise(0.45)}
            className="fade-rise mt-5 flex flex-wrap gap-x-4 gap-y-1.5 text-xs leading-relaxed text-muted"
          >
            <span>{typeset(copy.checked, lang)}</span>
            <a
              href={GOOGLE_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap text-foreground underline decoration-line underline-offset-4 transition-colors duration-200 hover:text-accent hover:decoration-accent"
            >
              {typeset(copy.profileLink, lang)}&nbsp;↗︎
            </a>
          </p>
        </div>
      </header>

      <section className="mx-auto w-full max-w-3xl px-5 pb-8 sm:px-8">
        <ul className="flex flex-col">
          {WRITTEN_REVIEWS.map((review) => {
            const lines = reviewLines(review);
            return (
              <li key={review.url} className="reveal border-t border-line">
                <figure className="py-10 sm:py-12">
                  <Stars rating={review.rating} label={starsLabel(review.rating, lang)} size="size-3.5" />
                  {/* word for word, so no typesetting: the text is the reviewer's */}
                  <blockquote
                    lang={lines[0].lang}
                    className="mt-5 text-pretty text-lg font-light leading-relaxed text-foreground sm:text-xl"
                  >
                    {lines.map((line, i) => (
                      <p
                        key={i}
                        lang={line.lang === lines[0].lang ? undefined : line.lang}
                        className={i ? "mt-3" : undefined}
                      >
                        {line.text}
                      </p>
                    ))}
                  </blockquote>
                  <figcaption className="mt-6 flex flex-wrap items-baseline gap-x-4 gap-y-1 text-sm">
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
              </li>
            );
          })}
        </ul>
        <p className="border-t border-line pt-8 text-xs text-muted">{typeset(copy.languageNote, lang)}</p>
      </section>

      <StudyFooter lang={lang} />
    </main>
  );
}
