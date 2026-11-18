import { whatsappNumber } from "@/lib/data";
import { HOME_COPY } from "@/lib/home";
import type { Lang } from "@/lib/i18n";
import { HeroShowcase } from "./hero-showcase";
import { RatingLink } from "./rating-link";
import { joint, typeset, typesetHeading } from "./typeset";
import { WhatsAppIcon } from "./whatsapp-button";

// CSS-only entrance (see .fade-rise in globals.css) — the hero is a server
// component and its content is visible even with JS disabled.
//
// The nav is not in here: components/site-nav.tsx sits above the hero as the
// first child of <main> and overlays it, so the top padding below includes
// the nav's height (3rem, 3.25rem from sm) — the text sits where it did when
// the hero had its own top bar.
const rise = (delay: number) => ({ style: { animationDelay: `${delay}s` } });

export function Hero({ lang }: { lang: Lang }) {
  const { hero } = HOME_COPY[lang];
  const waHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(hero.waMessage)}`;
  // From xl the headline shares the row with the showcase and gets 36rem. The
  // Russian one (56 characters against English's 34) ran to six lines there at
  // full size and pushed the button below the fold; a long headline steps down.
  const longHeadline = (hero.h1Main + hero.h1Accent).length > 40;

  // The desktop composition owns the first viewport; shorter screens keep
  // enough room for the content. Mobile retains its existing natural height.
  return (
    <header className="relative">
      <div className="relative mx-auto flex w-full max-w-6xl flex-col px-5 pb-6 pt-28 sm:px-8 sm:pb-8 sm:pt-36 xl:static xl:min-h-[max(42rem,100svh)] xl:justify-center xl:pb-16 xl:pt-28">
        {/* the dot sits on the first line when the line wraps */}
        <p {...rise(0.05)} className="fade-rise flex items-start gap-2.5 text-sm text-muted">
          <span aria-hidden className="mt-[0.4375rem] size-1.5 shrink-0 rounded-full bg-accent" />
          <span>{typeset(hero.availability, lang)}</span>
        </p>

        <h1
          {...rise(0.15)}
          className={`fade-rise mt-6 max-w-3xl text-balance font-sans text-[clamp(2.5rem,6vw,4.5rem)] font-light leading-[1.05] tracking-[-0.02em] text-foreground xl:max-w-[36rem] ${longHeadline ? "xl:text-[3.25rem]" : ""}`}
        >
          {typesetHeading(hero.h1Main, lang, "sm")}
          {joint(hero.h1Main, lang)}
          <span className="font-serif italic tracking-[-0.01em]">
            {typesetHeading(hero.h1Accent, lang, "sm")}
          </span>
        </h1>

        <p
          {...rise(0.25)}
          className="fade-rise mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted sm:text-lg"
        >
          {typeset(hero.sub, lang)}
        </p>

        <div {...rise(0.35)} className="fade-rise mt-9 flex flex-wrap items-center gap-6">
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-white transition-[scale,opacity] duration-300 hover:opacity-90 active:scale-[0.97]"
          >
            <WhatsAppIcon className="size-4" />
            {hero.cta}
          </a>
          <a
            href="#work"
            className="text-sm font-medium text-foreground underline decoration-line underline-offset-4 transition-colors duration-200 hover:decoration-foreground"
          >
            {hero.seeWork}
          </a>
        </div>

        {/* the Google rating, linking to the reviews word for word */}
        <RatingLink lang={lang} {...rise(0.45)} className="fade-rise mt-7" />

        {/* Below xl the sites sit under the buttons, wider than the column so
            they run off the right edge. From xl they move beside the text,
            positioned against the header (this column turns static): the left
            edge 5rem right of centre, clear of the 36rem text, and the frames
            run off the viewport. */}
        <HeroShowcase
          lang={lang}
          className="mt-9 w-[min(118%,46rem)] sm:mt-10 xl:absolute xl:left-[calc(50%+5rem)] xl:top-[calc(50%+1.5rem)] xl:mt-0 xl:w-[42rem] xl:-translate-y-1/2"
        />
      </div>
    </header>
  );
}
