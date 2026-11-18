"use client";

import { useEffect, useRef } from "react";
import { animate, motion, useInView, useMotionValue, useTransform } from "motion/react";
import { formatNumber, type Lang } from "@/lib/i18n";

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

/** A number that counts up from 0 the first time it scrolls into view. */
export function CountUp({
  value,
  suffix,
  decimals,
  lang,
}: {
  value: number;
  suffix: string;
  decimals: number;
  /** decimal separator: "6.32" in English, "6,32" in Spanish and Russian */
  lang: Lang;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  // Seeded with the final number, not 0: motion serializes the current value
  // into the server HTML, so crawlers and no-JS visitors read "6.32M" rather
  // than "0.00M". The count-up rewinds to 0 only once the element scrolls
  // into view — by then this has been painted offscreen, so nothing flashes.
  const mv = useMotionValue(value);
  const text = useTransform(mv, (v) => `${formatNumber(v, lang, decimals)}${suffix}`);

  useEffect(() => {
    if (!inView) return;
    mv.set(0);
    const controls = animate(mv, value, { duration: 1.6, ease: EASE_OUT_EXPO });
    return () => controls.stop();
  }, [inView, mv, value]);

  return (
    <motion.span ref={ref} className="tabular-nums">
      {text}
    </motion.span>
  );
}
