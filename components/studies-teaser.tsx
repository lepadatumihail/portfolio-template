import Link from "next/link";
import { HOME_COPY } from "@/lib/home";
import type { Lang } from "@/lib/i18n";
import { studyUi } from "@/lib/studies";
import { studiesFor, STUDY_INDEX_PATH } from "@/lib/studies-index";
import { SectionHeading } from "./section-heading";
import { joint, typeset, typesetWithTail } from "./typeset";

/**
 * Homepage entry point to the case studies. The Results section above states
 * the numbers; this is where the working is shown, which is the only reason to
 * believe them.
 */
export function StudiesTeaser({ lang }: { lang: Lang }) {
  const copy = HOME_COPY[lang].studies;

  return (
    <section id="case-studies" className="mx-auto w-full max-w-6xl scroll-mt-16 px-5 py-20 sm:px-8 sm:py-28">
      <SectionHeading lang={lang} index="08" title={copy.heading.title} accent={copy.heading.accent} />

      <p className="-mt-6 mb-12 max-w-2xl text-pretty text-sm leading-relaxed text-muted sm:mb-16 sm:text-base">
        {typeset(copy.note, lang)}
      </p>

      <ul className="grid gap-x-8 gap-y-12 sm:grid-cols-3">
        {studiesFor(lang).map((study) => (
          <li key={study.key} className="reveal border-t border-line pt-6">
            <Link href={study.slug} className="group block">
              <p className="text-xs text-accent">{typeset(study.hero.kicker, lang)}</p>
              <h3 className="mt-3 text-balance font-sans text-xl font-light leading-snug tracking-tight text-foreground">
                {typeset(study.hero.h1Main, lang)}
                {joint(study.hero.h1Main, lang)}
                {typesetWithTail(
                  study.hero.h1Accent,
                  lang,
                  <span className="ml-1.5 inline-block text-muted transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent">
                    {"↗︎"}
                  </span>,
                  {
                    wrap: (accent) => (
                      <span className="font-serif italic tracking-[-0.01em]">{accent}</span>
                    ),
                  },
                )}
              </h3>
              <p className="mt-3 text-pretty text-sm leading-relaxed text-muted">
                {typeset(study.summary[0], lang)}
              </p>
            </Link>
          </li>
        ))}
      </ul>

      <Link
        href={STUDY_INDEX_PATH[lang]}
        className="mt-12 inline-block text-sm font-medium text-foreground underline decoration-line underline-offset-4 transition-colors duration-200 hover:decoration-foreground"
      >
        {studyUi[lang].backToIndex}
      </Link>
    </section>
  );
}
