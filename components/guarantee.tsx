import { HOME_COPY } from "@/lib/home";
import type { Lang } from "@/lib/i18n";
import { SectionHeading } from "./section-heading";
import { typeset, typesetHeading } from "./typeset";

export function Guarantee({ lang }: { lang: Lang }) {
  const copy = HOME_COPY[lang].guarantee;

  return (
    <section
      id="guarantee"
      className="mx-auto w-full max-w-6xl scroll-mt-16 px-5 py-20 sm:px-8 sm:py-28"
    >
      <SectionHeading lang={lang} index="05" title={copy.heading.title} accent={copy.heading.accent} />

      <div className="reveal rounded-xl border border-line bg-surface p-7 sm:p-12">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-accent">
              {typeset(copy.kicker, lang)}
            </p>
            <h3 className="mt-5 text-balance font-sans text-3xl font-light leading-[1.1] tracking-tight text-foreground sm:text-5xl">
              {/* both clauses atomic so the line can only break at the comma */}
              <span className="inline-block">{typesetHeading(copy.titleMain, lang, "never")}</span>{" "}
              <span className="inline-block font-serif italic text-accent">
                {typesetHeading(copy.titleAccent, lang, "never")}
              </span>
            </h3>
            <p className="mt-6 max-w-xl text-pretty leading-relaxed text-muted">
              {typeset(copy.body, lang)}
            </p>
          </div>

          <div className="flex flex-col items-start gap-3.5 lg:items-end lg:gap-0">
            <p className="font-sans text-[5rem] font-light leading-[0.85] tracking-tight text-accent sm:text-[7rem]">
              100<span className="font-serif italic">%</span>
            </p>
            <div className="lg:mt-5 lg:text-right">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted">
                {typeset(copy.score, lang)}
              </p>
              <p className="mt-1.5 text-xs text-muted/70">{typeset(copy.scoreNote, lang)}</p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-9 border-t border-line pt-9 sm:grid-cols-3 sm:gap-10">
          {copy.points.map((point, i) => (
            <div key={point.title} className="reveal">
              <p className="text-xs font-medium tracking-[0.14em] text-accent">0{i + 1}</p>
              <h4 className="mt-4 font-sans text-xl font-medium tracking-tight text-foreground">
                {typeset(point.title, lang)}
              </h4>
              <p className="mt-2.5 text-pretty text-sm leading-relaxed text-muted">
                {typeset(point.description, lang)}
              </p>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-12 max-w-xl text-pretty text-sm leading-relaxed text-muted">
        {typeset(copy.note, lang)}
      </p>
    </section>
  );
}
