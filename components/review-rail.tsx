"use client";

import { useRef } from "react";
import { useDriftRail } from "./drift-rail";
import { Stars } from "./stars";

/** A review as a card shows it, with its words and dates already set for the page. */
export type RailReview = {
  author: string;
  /** the review's short line, in the language it was written in */
  text: string;
  lang: string;
  rating: number;
  /** the stars' accessible name: "5 out of 5 stars" */
  stars: string;
  /** "October 2026" */
  month: string;
  /** the review itself on Google */
  url: string;
};

/**
 * Short Google reviews drifting past as cards, each opening its review on
 * Google. The motion is the work rail's (components/drift-rail.ts). The words
 * and dates come in as props, so the reviews module stays out of the bundle.
 */
export function ReviewRail({ reviews, linkLabel }: { reviews: RailReview[]; linkLabel: string }) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useDriftRail(scrollerRef, reviews.length);

  return (
    <div className="rail reveal relative">
      <div
        ref={scrollerRef}
        className="no-scrollbar flex cursor-grab gap-4 overflow-x-auto overscroll-x-contain py-1 [mask-image:linear-gradient(to_right,transparent,#000_var(--rail-fade),#000_calc(100%-var(--rail-fade)),transparent)] sm:gap-5"
        style={{ scrollBehavior: "auto" }}
      >
        {reviews.map((review) => (
          <ReviewCard key={review.url} review={review} linkLabel={linkLabel} />
        ))}
        {reviews.map((review) => (
          <ReviewCard key={`${review.url}-loop`} review={review} linkLabel={linkLabel} duplicate />
        ))}
      </div>
    </div>
  );
}

function ReviewCard({
  review,
  linkLabel,
  duplicate,
}: {
  review: RailReview;
  linkLabel: string;
  duplicate?: boolean;
}) {
  return (
    <a
      href={review.url}
      target="_blank"
      rel="noopener noreferrer"
      draggable={false}
      // The second set is scenery: same pixels, no second stop for a screen
      // reader or the tab key.
      aria-hidden={duplicate || undefined}
      tabIndex={duplicate ? -1 : undefined}
      className="group flex w-[17rem] shrink-0 flex-col rounded-xl border border-line bg-surface p-5 transition-colors duration-300 hover:border-accent/30 sm:w-[20rem] sm:p-6"
    >
      <Stars rating={review.rating} label={review.stars} size="size-3.5" />
      {/* the reviewer's words, so no typesetting */}
      <p lang={review.lang} className="mt-4 text-pretty text-[0.9375rem] leading-relaxed text-foreground">
        {review.text}
      </p>
      {/* name over month, so a long name never squeezes the month onto two lines */}
      <div className="mt-auto flex items-end justify-between gap-3 pt-5 text-xs">
        <p className="min-w-0">
          <span className="block truncate text-foreground">{review.author}</span>
          <span className="mt-0.5 block text-muted">{review.month}</span>
        </p>
        <span className="shrink-0 text-muted transition-colors duration-200 group-hover:text-accent">
          {linkLabel}&nbsp;↗︎
        </span>
      </div>
    </a>
  );
}
