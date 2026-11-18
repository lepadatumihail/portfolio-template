import Link from "next/link";
import type { Lang } from "@/lib/i18n";
import { formatReadingTime, formatStudyDate, studyUi, type Study } from "@/lib/studies";
import { studiesFor } from "@/lib/studies-index";
import { SiteNav } from "@/components/site-nav";
import { joint, typeset, typesetHeading, typesetWithTail } from "@/components/typeset";
import { StudyBackground, StudyFooter } from "./study-chrome";

const rise = (delay: number) => ({ style: { animationDelay: `${delay}s` } });

/** The headline figure printed on a card — the first number the study reports. */
function leadStat(study: Study) {
  for (const block of study.blocks) {
    if (block.kind === "stats" && block.items.length) return block.items[0];
  }
  return null;
}

export function StudyIndex({ lang }: { lang: Lang }) {
  const ui = studyUi[lang];
  const studies = studiesFor(lang);

  return (
    <main lang={lang} className="overflow-x-clip">
      <StudyBackground />
      <SiteNav lang={lang} pageKey="case-studies" />

      <header className="relative">
        <div className="relative mx-auto w-full max-w-3xl px-5 pb-14 pt-31 sm:px-8 sm:pb-20 sm:pt-41">
          {/* the dot sits on the first line when the kicker wraps */}
          <p {...rise(0.1)} className="fade-rise flex items-start gap-2.5 text-sm text-muted">
            <span aria-hidden className="mt-[0.4375rem] size-1.5 shrink-0 rounded-full bg-accent" />
            <span>{typeset(ui.indexKicker, lang)}</span>
          </p>
          <h1
            {...rise(0.2)}
            className="fade-rise mt-6 text-balance font-sans text-[clamp(2.4rem,6vw,4rem)] font-light leading-[1.06] tracking-[-0.02em] text-foreground"
          >
            {typesetHeading(ui.indexTitle.main, lang, "sm")}
            {joint(ui.indexTitle.main, lang)}
            <span className="font-serif italic tracking-[-0.01em]">
              {typesetHeading(ui.indexTitle.accent, lang, "sm")}
            </span>
          </h1>
          <p
            {...rise(0.3)}
            className="fade-rise mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted"
          >
            {typeset(ui.indexDek, lang)}
          </p>
        </div>
      </header>

      <section className="mx-auto w-full max-w-3xl px-5 pb-8 sm:px-8">
        <ul className="flex flex-col">
          {studies.map((study) => {
            const stat = leadStat(study);
            return (
              <li key={study.key} className="reveal border-t border-line">
                <Link href={study.slug} className="group block py-10 sm:py-12">
                  <p className="text-sm text-accent">{typeset(study.hero.kicker, lang)}</p>
                  <h2 className="mt-4 text-balance font-sans text-2xl font-light leading-snug tracking-tight text-foreground sm:text-3xl">
                    {typesetHeading(study.hero.h1Main, lang)}
                    {joint(study.hero.h1Main, lang)}
                    {typesetWithTail(
                      study.hero.h1Accent,
                      lang,
                      <span className="ml-2 inline-block text-muted transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent">
                        {"↗︎"}
                      </span>,
                      {
                        heading: "always",
                        wrap: (accent) => (
                          <span className="font-serif italic tracking-[-0.01em]">{accent}</span>
                        ),
                      },
                    )}
                  </h2>
                  <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-muted">
                    {typeset(study.hero.dek, lang)}
                  </p>

                  <div className="mt-6 flex flex-wrap items-baseline gap-x-6 gap-y-2">
                    {stat ? (
                      <p className="font-sans text-sm text-foreground">
                        <span className="text-2xl font-medium tabular-nums tracking-tight">
                          {stat.value}
                        </span>{" "}
                        <span className="text-muted">{stat.label.toLowerCase()}</span>
                      </p>
                    ) : null}
                    <p className="text-xs text-muted">
                      {formatStudyDate(study.published, lang)} ·{" "}
                      {formatReadingTime(study.readingMinutes, lang)}
                    </p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      <StudyFooter lang={lang} />
    </main>
  );
}
