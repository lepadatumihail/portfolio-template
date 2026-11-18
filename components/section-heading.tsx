import type { ReactNode } from "react";
import type { Lang } from "@/lib/i18n";
import { joint, typesetHeading } from "./typeset";

type SectionHeadingProps = {
  index: string;
  title: string;
  accent?: string;
  /** the page's language, for its line-breaking rules (components/typeset.tsx) */
  lang?: Lang;
  /**
   * controls at the heading's right, level with its last line (the work
   * slideshow's arrows); a long heading wraps before it reaches them
   */
  aside?: ReactNode;
};

export function SectionHeading({ index, title, accent, lang = "en", aside }: SectionHeadingProps) {
  const heading = (
    <h2 className={`${aside ? "min-w-0" : "mt-4"} text-balance font-sans text-3xl font-light tracking-tight text-foreground sm:text-5xl`}>
      {typesetHeading(title, lang, "sm")}
      {accent ? joint(title, lang) : null}
      {accent ? (
        <span className="font-serif italic text-foreground">{typesetHeading(accent, lang, "sm")}</span>
      ) : null}
    </h2>
  );
  return (
    <div className="reveal reveal-heading relative mb-9 border-t border-transparent pt-6 sm:mb-10 sm:pt-7">
      {/* the top hairline, as an element so it can draw in (globals.css) */}
      <span aria-hidden className="reveal-rule absolute inset-x-0 -top-px h-px bg-line" />
      <p className="text-xs font-medium tracking-[0.14em] text-muted">{index}</p>
      {aside ? (
        <div className="mt-4 flex items-end justify-between gap-4">
          {heading}
          <div className="shrink-0">{aside}</div>
        </div>
      ) : (
        heading
      )}
    </div>
  );
}
