import Image from "next/image";
import { BrowserFrame } from "./browser-frame";
import type { CSSProperties } from "react";
import { heroShowcase, projects } from "@/lib/data";
import { HOME_COPY, homeStats } from "@/lib/home";
import { formatNumber, type Lang } from "@/lib/i18n";
import { typeset } from "./typeset";

/**
 * Three live client sites layered in browser frames, with the strongest search
 * figure pinned to the front one. It fills the half of the hero that used to be
 * empty shader, and replaced a row of four numbers that repeated "Numbers, not
 * promises" further down.
 *
 * Every position is a percentage of one box (aspect 10 / 9), so the same
 * layout serves both places it sits: under the buttons below xl, bleeding off
 * the right edge, and beside the headline from xl, where hero.tsx positions
 * the box. The frames carry no transforms of their own, so the .fade-rise
 * entrance stays consistent. The previews are display-only.
 */

type Slot = { style: CSSProperties; z: string; delay: number; shadow: string };

const NEAR =
  "shadow-[0_1px_2px_rgb(20_22_26/0.06),0_18px_40px_-14px_rgb(30_58_95/0.28),0_52px_100px_-36px_rgb(30_58_95/0.32)]";
const FAR = "shadow-[0_1px_2px_rgb(20_22_26/0.05),0_14px_36px_-16px_rgb(30_58_95/0.22)]";

// front, back-top, back-bottom — in heroShowcase order
const SLOTS: Slot[] = [
  { style: { left: "0%", top: "22%", width: "78%" }, z: "z-30", delay: 0.45, shadow: NEAR },
  { style: { left: "30%", top: "0%", width: "76%" }, z: "z-10", delay: 0.6, shadow: FAR },
  { style: { left: "42%", top: "50%", width: "64%" }, z: "z-20", delay: 0.7, shadow: FAR },
];

export function HeroShowcase({ lang, className = "" }: { lang: Lang; className?: string }) {
  const copy = HOME_COPY[lang];
  const impressions = homeStats(lang).find((stat) => stat.key === "impressions")!;
  const shown = heroShowcase.map((name) => projects.find((project) => project.name === name)!);

  return (
    <div className={`relative isolate aspect-[10/9] ${className}`}>
      {shown.map((project, i) => {
        const slot = SLOTS[i];
        return (
          <div
            key={project.name}
            style={{ ...slot.style, animationDelay: `${slot.delay}s` }}
            className={`fade-rise absolute block rounded-[0.875rem] ${slot.z}`}
          >
            <BrowserFrame
              address={i === 0 ? new URL(project.url).hostname.replace(/^www\./, "") : undefined}
              className={slot.shadow}
            >
              <Image
                src={project.image}
                alt={copy.work.imageAlt.replace("{name}", project.name)}
                width={1400}
                height={875}
                sizes="(min-width: 1280px) 36rem, 90vw"
                {...(i === 0 ? { loading: "eager", fetchPriority: "high" } : {})}
                className="block h-auto w-full"
              />
            </BrowserFrame>
          </div>
        );
      })}

      {/* not a link any more: the results section it pointed to isn't on the compact home page */}
      <div
        style={{ left: "4%", top: "72%", animationDelay: "0.85s" }}
        className="fade-rise absolute z-40 block rounded-2xl bg-white/75 px-4 py-3.5 ring-1 ring-foreground/[0.06] backdrop-blur-md shadow-[0_1px_2px_rgb(20_22_26/0.05),0_20px_44px_-18px_rgb(30_58_95/0.35)] sm:px-5 sm:py-4"
      >
        <span className="block font-sans text-2xl font-light leading-none tracking-tight text-foreground tabular-nums sm:text-[2rem]">
          {formatNumber(impressions.value, lang, impressions.decimals)}
          {impressions.suffix}
        </span>
        <span className="mt-2 block text-xs font-medium text-foreground/85">{typeset(impressions.label, lang)}</span>
        <span className="mt-0.5 block text-[11px] text-muted sm:text-xs">{typeset(impressions.note, lang)}</span>
      </div>
    </div>
  );
}
