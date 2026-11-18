import Link from "next/link";
import type { CSSProperties } from "react";
import type { Lang } from "@/lib/i18n";
import { REVIEW_AVERAGE, REVIEWS_PATH, reviewsCopy } from "@/lib/reviews";
import { Stars } from "./stars";
import { typeset } from "./typeset";

/**
 * "★★★★★ 5.0 · 17 reviews on Google", a link to the reviews page in the
 * page's language. The numbers come from lib/reviews.ts, so the line follows
 * the reviews when they are copied again. Not prefetched: it sits in the home
 * hero, and fetching the reviews page on every visit would cost the home page.
 */
export function RatingLink({
  lang,
  className = "",
  style,
}: {
  lang: Lang;
  className?: string;
  style?: CSSProperties;
}) {
  const copy = reviewsCopy(lang);
  return (
    <Link
      href={REVIEWS_PATH[lang]}
      prefetch={false}
      style={style}
      className={`group inline-flex w-fit items-center gap-2.5 text-sm text-muted transition-colors duration-200 hover:text-foreground ${className}`}
    >
      <Stars rating={REVIEW_AVERAGE} size="size-3.5" />
      <span>
        <span className="tabular-nums text-foreground">{copy.rating}</span>
        {" · "}
        <span className="underline decoration-line underline-offset-4 transition-colors duration-200 group-hover:decoration-foreground">
          {typeset(copy.count, lang)}
        </span>
      </span>
    </Link>
  );
}
