import Link from "next/link";
import { email, whatsappNumber } from "@/lib/data";
import { formatReadingTime, formatStudyDate, studyUi, type Study } from "@/lib/studies";
import { relatedStudies, STUDY_INDEX_PATH } from "@/lib/studies-index";
import { StudyBlocks } from "./study-blocks";
import { SiteNav } from "@/components/site-nav";
import { joint, typeset, typesetHeading, typesetWithTail } from "@/components/typeset";
import { StudyBackground, StudyFooter } from "./study-chrome";

const rise = (delay: number) => ({ style: { animationDelay: `${delay}s` } });

export function StudyPage({ study }: { study: Study }) {
  const { lang } = study;
  const ui = studyUi[lang];
  const waHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(study.cta.waMessage)}`;
  const related = relatedStudies(study);
  const indexHref = STUDY_INDEX_PATH[lang];

  return (
    <main lang={lang} className="overflow-x-clip">
      <StudyBackground />
      <SiteNav lang={lang} pageKey={study.key} />

      <header className="relative">
        <div className="relative mx-auto w-full max-w-3xl px-5 pb-10 pt-27 sm:px-8 sm:pb-14 sm:pt-37">
          <Link
            {...rise(0.05)}
            href={indexHref}
            className="fade-rise inline-flex items-center gap-2 text-sm text-muted transition-colors duration-200 hover:text-foreground"
          >
            <span aria-hidden>←</span>
            {ui.backToIndex}
          </Link>

          <p {...rise(0.1)} className="fade-rise mt-8 text-sm text-accent">
            {typeset(study.hero.kicker, lang)}
          </p>

          <h1
            {...rise(0.2)}
            className="fade-rise mt-5 text-balance font-sans text-[clamp(2.1rem,5vw,3.4rem)] font-light leading-[1.08] tracking-[-0.02em] text-foreground"
          >
            {typesetHeading(study.hero.h1Main, lang, "sm")}
            {joint(study.hero.h1Main, lang)}
            <span className="font-serif italic tracking-[-0.01em]">
              {typesetHeading(study.hero.h1Accent, lang, "sm")}
            </span>
          </h1>

          <p
            {...rise(0.3)}
            className="fade-rise mt-6 text-pretty text-lg leading-relaxed text-muted"
          >
            {typeset(study.hero.dek, lang)}
          </p>

          {/* each separator travels with the item before it, so a wrapped
              line never starts on a dot */}
          <p {...rise(0.4)} className="fade-rise mt-8 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted">
            {[
              `${ui.labels.published} ${formatStudyDate(study.published, lang)}`,
              formatReadingTime(study.readingMinutes, lang),
              "Alex Doe",
            ].map((item, i, items) => (
              <span key={i} className="whitespace-nowrap">
                {typesetHeading(item, lang)}
                {i < items.length - 1 ? (
                  <span aria-hidden className="ml-3">
                    ·
                  </span>
                ) : null}
              </span>
            ))}
          </p>
        </div>
      </header>

      {/* ── fact strip ── */}
      <div className="mx-auto w-full max-w-3xl px-5 sm:px-8">
        <dl className="grid grid-cols-2 gap-x-6 gap-y-5 border-y border-line py-6 sm:grid-cols-3 lg:grid-cols-5">
          {study.facts.map((fact) => (
            <div key={fact.label}>
              <dt className="text-[11px] font-medium uppercase tracking-[0.12em] text-muted">
                {fact.label}
              </dt>
              <dd className="mt-1.5 text-pretty text-sm leading-snug text-foreground">
                {typeset(fact.value, lang)}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      {study.image ? (
        <div className="mx-auto mt-10 w-full max-w-3xl px-5 sm:px-8">
          <div className="overflow-hidden rounded-xl border border-line bg-surface">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={study.image}
              alt={study.imageAlt ?? ""}
              className="aspect-[16/9] w-full object-cover"
            />
          </div>
          {study.clientUrl ? (
            <p className="mt-3 text-xs text-muted">
              <a
                href={study.clientUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-line underline-offset-4 transition-colors duration-200 hover:text-foreground"
              >
                {ui.labels.liveSite} — {study.clientLabel}&nbsp;↗︎
              </a>
            </p>
          ) : null}
        </div>
      ) : null}

      {/* ── summary: the part a reader (or a model) quotes ── */}
      <section className="mx-auto mt-12 w-full max-w-3xl px-5 sm:px-8">
        <div className="rounded-xl border border-line bg-surface p-6 sm:p-8">
          <h2 className="text-xs font-medium uppercase tracking-[0.14em] text-muted">
            {ui.labels.summary}
          </h2>
          <ul className="mt-5 flex flex-col gap-3.5">
            {study.summary.map((point, i) => (
              <li key={i} className="flex gap-3 text-pretty leading-relaxed text-foreground/85">
                <span aria-hidden className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent" />
                <span>{typeset(point, lang)}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── body ── */}
      <article className="mx-auto mt-16 w-full max-w-3xl px-5 sm:px-8">
        <StudyBlocks blocks={study.blocks} lang={lang} />

        {/* ── takeaways ── */}
        <section className="reveal mt-20 border-t border-line pt-10">
          <h2 className="mb-6 font-sans text-2xl font-light tracking-tight text-foreground sm:text-3xl">
            {ui.labels.takeaways}
          </h2>
          <ol className="flex flex-col gap-5">
            {study.takeaways.map((point, i) => (
              <li key={i} className="flex gap-4 text-pretty leading-relaxed text-foreground/85">
                <span className="shrink-0 font-sans text-sm tabular-nums text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{typeset(point, lang)}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* ── method & sources ── */}
        <section className="reveal mt-16 border-t border-line pt-8">
          <h2 className="text-xs font-medium uppercase tracking-[0.14em] text-muted">
            {ui.labels.method}
          </h2>
          <div className="mt-5 flex flex-col gap-4">
            {study.method.map((paragraph, i) => (
              <p key={i} className="text-pretty text-sm leading-relaxed text-muted">
                {typeset(paragraph, lang)}
              </p>
            ))}
          </div>
        </section>
      </article>

      {/* ── CTA ── */}
      <section className="mx-auto mt-20 w-full max-w-3xl px-5 sm:px-8">
        <div className="rounded-xl border border-line bg-surface p-8 sm:p-10">
          <h2 className="text-balance font-sans text-2xl font-light tracking-tight text-foreground sm:text-3xl">
            {typesetHeading(study.cta.heading, lang, "sm")}
          </h2>
          <p className="mt-4 max-w-xl text-pretty leading-relaxed text-muted">
            {typeset(study.cta.body, lang)}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-white transition-[scale,opacity] duration-300 hover:opacity-90 active:scale-[0.97]"
            >
              {typeset(study.cta.label, lang)}
            </a>
            <a
              href={`mailto:${email}`}
              className="text-sm font-medium text-foreground underline decoration-line underline-offset-4 transition-colors duration-200 hover:decoration-foreground"
            >
              {email}
            </a>
          </div>
        </div>
      </section>

      {/* ── read next ── */}
      {related.length ? (
        <section className="mx-auto mt-20 w-full max-w-3xl px-5 sm:px-8">
          <h2 className="border-t border-line pt-7 text-xs font-medium uppercase tracking-[0.14em] text-muted">
            {ui.labels.readNext}
          </h2>
          <div className="mt-8 grid gap-x-8 gap-y-10 sm:grid-cols-2">
            {related.map((other) => (
              <Link key={other.key} href={other.slug} className="reveal group block">
                <p className="text-xs text-accent">{typeset(other.hero.kicker, lang)}</p>
                <h3 className="mt-2.5 text-balance font-sans text-lg font-medium leading-snug tracking-tight text-foreground">
                  {typesetWithTail(
                    `${other.hero.h1Main} ${other.hero.h1Accent}`,
                    lang,
                    <span className="ml-1.5 inline-block text-muted transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent">
                      {"↗︎"}
                    </span>,
                    { heading: "always" },
                  )}
                </h3>
                <p className="mt-2 text-pretty text-sm leading-relaxed text-muted">
                  {typeset(other.hero.dek, lang)}
                </p>
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      <StudyFooter lang={lang} />
    </main>
  );
}
