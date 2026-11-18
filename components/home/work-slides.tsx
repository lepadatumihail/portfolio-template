"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Lang } from "@/lib/i18n";
import { BrowserFrame } from "../browser-frame";
import { SectionHeading } from "../section-heading";
import { typeset, typesetWithTail } from "../typeset";

export type WorkSlide = {
  name: string;
  url: string;
  image: string;
  alt: string;
  description: string;
  /** the address shown on the frame and beside the name */
  label: string;
};

/**
 * A row of project cards, two to a view from md and one on phones, in one
 * native scroll container with snap points: swipe, trackpad and the tab key
 * all move it on their own. The arrows beside the heading step one card at a
 * time and grey out at either end.
 */
export function WorkSlides({
  lang,
  heading,
  slides,
  labels,
}: {
  lang: Lang;
  heading: { title: string; accent: string };
  slides: WorkSlide[];
  labels: { previous: string; next: string };
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const update = () => {
      setAtStart(track.scrollLeft <= 2);
      setAtEnd(track.scrollLeft + track.clientWidth >= track.scrollWidth - 2);
    };
    update();
    track.addEventListener("scroll", update, { passive: true });
    const resize = new ResizeObserver(update);
    resize.observe(track);
    return () => {
      track.removeEventListener("scroll", update);
      resize.disconnect();
    };
  }, []);

  const step = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const [first, second] = track.children as HTMLCollectionOf<HTMLElement>;
    const distance = second ? second.offsetLeft - first.offsetLeft : track.clientWidth;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    track.scrollBy({ left: direction * distance, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <>
      <SectionHeading
        lang={lang}
        index="02"
        title={heading.title}
        accent={heading.accent}
        aside={
          <div className="flex gap-2">
            <Arrow label={labels.previous} disabled={atStart} onClick={() => step(-1)} flip />
            <Arrow label={labels.next} disabled={atEnd} onClick={() => step(1)} />
          </div>
        }
      />

      <div
        ref={trackRef}
        className="reveal no-scrollbar -mx-5 flex snap-x snap-mandatory scroll-px-5 gap-5 overflow-x-auto overscroll-x-contain px-5 pb-10 pt-1 sm:-mx-8 sm:scroll-px-8 sm:px-8 md:gap-8 lg:gap-12"
      >
        {slides.map((slide) => (
          <a
            key={slide.name}
            href={slide.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block w-[86%] shrink-0 snap-start md:w-[calc((100%-2rem)/2)] lg:w-[calc((100%-3rem)/2)]"
          >
            <BrowserFrame
              address={slide.label}
              className="shadow-[0_1px_2px_rgb(20_22_26/0.06),0_18px_40px_-14px_rgb(30_58_95/0.28)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  draggable={false}
                  sizes="(min-width: 1152px) 34rem, (min-width: 768px) 46vw, 86vw"
                  className="object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02]"
                />
              </div>
            </BrowserFrame>
            <div className="mt-5 flex items-baseline justify-between gap-4">
              <h3 className="text-xl font-medium tracking-tight text-foreground">
                {typesetWithTail(
                  slide.name,
                  lang,
                  <span className="ml-1.5 inline-block text-muted transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent">
                    {"↗︎"}
                  </span>,
                  { heading: "always" },
                )}
              </h3>
              <span className="shrink-0 text-xs text-muted">{slide.label}</span>
            </div>
            <p className="mt-2 max-w-lg text-pretty leading-relaxed text-muted">{typeset(slide.description, lang)}</p>
          </a>
        ))}
      </div>
    </>
  );
}

function Arrow({
  label,
  disabled,
  onClick,
  flip = false,
}: {
  label: string;
  disabled: boolean;
  onClick: () => void;
  flip?: boolean;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      className="grid size-11 place-items-center rounded-full border border-[rgb(32_33_30/14%)] bg-[#fdfdfb] text-foreground transition-[background-color,border-color,opacity,scale] duration-200 hover:border-[#91978c] hover:bg-[#f0f1ea] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent active:scale-[0.96] disabled:pointer-events-none disabled:opacity-35"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
        className={`size-[18px] ${flip ? "rotate-180" : ""}`}
      >
        <path d="M4 12h15m-6-6 6 6-6 6" />
      </svg>
    </button>
  );
}
