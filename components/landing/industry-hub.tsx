import Link from "next/link";
import { industryHubUi, industryPath, type Lang } from "@/lib/industries";
import { INDUSTRIES } from "@/lib/industries-index";
import { SiteNav } from "@/components/site-nav";
import { StudyBackground, StudyFooter } from "@/components/study/study-chrome";
import { joint, typeset, typesetHeading, typesetWithTail } from "@/components/typeset";

const rise = (delay: number) => ({ style: { animationDelay: `${delay}s` } });

/** The /web-design hub and its twins: every sector page, one line each. */
export function IndustryHub({ lang }: { lang: Lang }) {
  const ui = industryHubUi[lang];

  return (
    <main lang={lang} className="overflow-x-clip">
      <StudyBackground />
      <SiteNav lang={lang} pageKey="industry-hub" />

      <header className="relative">
        <div className="relative mx-auto w-full max-w-3xl px-5 pb-14 pt-31 sm:px-8 sm:pb-20 sm:pt-41">
          {/* the dot sits on the first line when the kicker wraps */}
          <p {...rise(0.1)} className="fade-rise flex items-start gap-2.5 text-sm text-muted">
            <span aria-hidden className="mt-[0.4375rem] size-1.5 shrink-0 rounded-full bg-accent" />
            <span>{typeset(ui.kicker, lang)}</span>
          </p>
          <h1
            {...rise(0.2)}
            className="fade-rise mt-6 text-balance font-sans text-[clamp(2.4rem,6vw,4rem)] font-light leading-[1.06] tracking-[-0.02em] text-foreground"
          >
            {typesetHeading(ui.title.main, lang, "sm")}
            {joint(ui.title.main, lang)}
            <span className="font-serif italic tracking-[-0.01em]">
              {typesetHeading(ui.title.accent, lang, "sm")}
            </span>
          </h1>
          <p
            {...rise(0.3)}
            className="fade-rise mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted"
          >
            {typeset(ui.dek, lang)}
          </p>
        </div>
      </header>

      <section className="mx-auto w-full max-w-3xl px-5 pb-8 sm:px-8">
        <ul className="flex flex-col">
          {INDUSTRIES.map((entry) => {
            const sector = entry[lang];
            return (
              <li key={entry.key} className="reveal border-t border-line">
                <Link href={industryPath(lang, sector.slug)} className="group block py-8 sm:py-10">
                  <h2 className="text-balance font-sans text-2xl font-light leading-snug tracking-tight text-foreground sm:text-3xl">
                    {typesetWithTail(
                      sector.serviceName,
                      lang,
                      <span
                        aria-hidden
                        className="ml-2 inline-block text-muted transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                      >
                        {"↗︎"}
                      </span>,
                      { heading: "always" },
                    )}
                  </h2>
                  <p className="mt-3 max-w-2xl text-pretty leading-relaxed text-muted">
                    {typeset(sector.summary, lang)}
                  </p>
                </Link>
              </li>
            );
          })}
        </ul>

        <p className="mt-4 max-w-2xl border-t border-line pt-10 text-pretty leading-relaxed text-muted">
          {typeset(ui.outro, lang)}{" "}
          <Link
            href={ui.general.href}
            className="text-foreground underline decoration-line underline-offset-4 transition-colors duration-200 hover:decoration-foreground"
          >
            {typeset(ui.general.label, lang)}
          </Link>
          .
        </p>
      </section>

      <StudyFooter lang={lang} />
    </main>
  );
}
