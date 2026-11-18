"use client";

import { useState } from "react";
import { motion } from "motion/react";
import type { Lang } from "@/lib/i18n";
import { typeset, typesetHeading } from "@/components/typeset";

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

type LandingFaqProps = {
  items: { q: string; a: string }[];
  /** the page's language, for its line-breaking rules (components/typeset.tsx) */
  lang?: Lang;
};

/**
 * Same accordion pattern as the services section — plus-to-minus toggle,
 * height-animated reveal. Unlike the services accordion, answers are never
 * unmounted: they collapse to height 0, so every answer exists in the
 * server HTML for crawlers (and matches the FAQPage schema on the page).
 */
export function LandingFaq({ items, lang = "en" }: LandingFaqProps) {
  const [open, setOpen] = useState<number>(0);

  return (
    // No bottom rule: whatever follows the questions brings its own (the
    // footer's top border, or the next section's heading rule), and two
    // hairlines a section apart read as a double border.
    <div className="divide-y divide-line border-t border-line">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="group flex w-full items-center justify-between gap-6 py-6 text-left sm:py-7"
            >
              <span className="font-sans text-lg font-light tracking-tight text-foreground transition-colors duration-300 group-hover:text-accent sm:text-2xl">
                {typesetHeading(item.q, lang)}
              </span>
              <span className="relative size-4 shrink-0" aria-hidden>
                <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-muted transition-colors duration-300 group-hover:bg-accent" />
                <span
                  className={`absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-muted transition-[rotate,background-color] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:bg-accent ${isOpen ? "rotate-90" : "rotate-0"}`}
                />
              </span>
            </button>
            <motion.div
              initial={false}
              animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
              transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
              className="overflow-hidden"
              aria-hidden={!isOpen}
            >
              <p className="max-w-3xl pb-7 text-pretty text-sm leading-relaxed text-muted sm:text-base">
                {typeset(item.a, lang)}
              </p>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
