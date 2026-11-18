import type { ReactNode } from "react";
import { HOME_COPY, homeCaseStudies, type HomeCopy } from "@/lib/home";
import type { Lang } from "@/lib/i18n";
import { SectionHeading } from "./section-heading";
import { typeset } from "./typeset";

/* ── The drawings ─────────────────────────────────────────────────────────
   Each card opens on a quiet line drawing of what the product does, in the
   same hand as the "What I do" panels, rather than a screenshot of a
   client's admin screen. Decoration only: aria-hidden, generic placeholder
   words, one navy mark per row. */

const LANGS = ["DE", "EN", "IT"];

const DISHES = [
  { name: "w-28", note: "w-36", codes: ["1", "7"] },
  { name: "w-24", note: "w-32", codes: ["3"] },
  { name: "w-32", note: "w-28", codes: ["7", "8"] },
];

/** Menu Atelier: a chef's PDF goes in, a printed trilingual menu comes out. */
function MenuSketch() {
  return (
    <div className="flex w-full items-center justify-center gap-3 sm:gap-5">
      <div className="w-16 shrink-0 -rotate-6 rounded-md border border-line bg-surface px-2.5 pb-3.5 pt-2.5 sm:w-20">
        <span className="block text-[9px] font-medium leading-none tracking-[0.08em] text-muted">
          PDF
        </span>
        {["w-full", "w-4/5", "w-full", "w-3/5", "w-4/5", "w-2/3"].map((width, i) => (
          <span key={i} className={`mt-1.5 block h-1 rounded-full bg-foreground/10 ${width}`} />
        ))}
      </div>

      <span className="shrink-0 text-xs leading-none text-muted/70">{"→"}</span>

      <div className="w-full max-w-[17rem] rounded-lg border border-line bg-surface px-4 pb-4 pt-3.5 sm:px-5 sm:pb-5">
        <div className="flex items-center justify-between gap-3">
          <span className="font-serif text-[15px] italic leading-none text-foreground sm:text-base">
            Menü · Menu · Menù
          </span>
          <span className="flex shrink-0 overflow-hidden rounded-full border border-line text-[9px] font-medium leading-none">
            {LANGS.map((lang, i) => (
              <span
                key={lang}
                className={`px-1.5 py-1 ${i === 0 ? "bg-accent text-white" : "text-muted"}`}
              >
                {lang}
              </span>
            ))}
          </span>
        </div>
        <span className="mt-3 block h-px w-full bg-line" />
        <div className="mt-3 flex flex-col gap-3">
          {DISHES.map((dish, i) => (
            <div key={i} className="flex items-start justify-between gap-3">
              <span className="flex min-w-0 flex-col gap-1.5">
                <span className={`h-1.5 max-w-full rounded-full bg-foreground/25 ${dish.name}`} />
                <span className={`h-1 max-w-full rounded-full bg-foreground/10 ${dish.note}`} />
              </span>
              <span className="flex shrink-0 gap-1">
                {dish.codes.map((code) => (
                  <span
                    key={code}
                    className="flex size-4 items-center justify-center rounded-full border border-line text-[8px] font-medium leading-none text-muted"
                  >
                    {code}
                  </span>
                ))}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const STEPS = 6;
const DONE = 4;

/** the document rows' states; their words are in the copy, row for row */
const DOCUMENT_STATES = ["done", "open", "open"];

/** Consular Platform: one client's case — the tracker, the document slots, the invoice. */
function PortalSketch({ copy }: { copy: HomeCopy["caseStudies"]["sketches"]["portal"] }) {
  const documents = copy.documents.map((doc, i) => ({ ...doc, state: DOCUMENT_STATES[i] }));
  const [requested, current, ready] = copy.steps;

  return (
    <div className="w-full max-w-[19rem] rounded-lg border border-line bg-surface sm:max-w-[21rem]">
      <div className="flex items-center gap-2.5 border-b border-line px-4 py-2.5">
        <span className="size-5 shrink-0 rounded-full bg-foreground/10" />
        <span className="flex flex-1 flex-col gap-1">
          <span className="h-1.5 w-20 rounded-full bg-foreground/25" />
          <span className="h-1 w-14 rounded-full bg-foreground/10" />
        </span>
        <span className="rounded-full border border-accent/25 bg-accent/[0.06] px-1.5 py-[3px] text-[9px] font-medium leading-none text-accent">
          {copy.active}
        </span>
      </div>

      {/* the six-step tracker, four steps done */}
      <div className="px-4 pb-1 pt-3.5">
        <div className="flex items-center">
          {Array.from({ length: STEPS }, (_, i) => (
            <span key={i} className={`flex items-center ${i < STEPS - 1 ? "flex-1" : ""}`}>
              <span
                className={`size-2 shrink-0 rounded-full ${
                  i < DONE ? "bg-accent" : i === DONE ? "border-[1.5px] border-accent bg-surface" : "border border-line bg-surface"
                }`}
              />
              {i < STEPS - 1 ? (
                <span className={`h-px flex-1 ${i < DONE - 1 ? "bg-accent" : "bg-line"}`} />
              ) : null}
            </span>
          ))}
        </div>
        <div className="mt-1.5 flex justify-between text-[8px] leading-none text-muted">
          <span>{requested}</span>
          <span className="text-accent">{current}</span>
          <span>{ready}</span>
        </div>
      </div>

      <div className="mt-2.5 divide-y divide-line border-t border-line">
        {documents.map((doc) => (
          <div key={doc.name} className="flex h-8 items-center gap-2.5 px-4">
            <span className="h-3 w-2.5 shrink-0 rounded-[2px] border border-foreground/20" />
            <span className="flex-1 truncate text-[10px] leading-none text-foreground/70">{doc.name}</span>
            <span
              className={`rounded-full border px-1.5 py-[3px] text-[9px] font-medium leading-none ${
                doc.state === "done" ? "border-accent/25 bg-accent/[0.06] text-accent" : "border-line text-muted"
              }`}
            >
              {doc.status}
            </span>
          </div>
        ))}
        <div className="flex h-8 items-center gap-2.5 px-4">
          <span className="text-[10px] leading-none text-foreground/70">{copy.invoice}</span>
          <span className="h-1 w-10 rounded-full bg-foreground/10" />
          <span className="ml-auto rounded-full bg-accent px-1.5 py-[3px] text-[9px] font-medium leading-none text-white">
            {copy.paid}
          </span>
        </div>
      </div>
    </div>
  );
}

export function CaseStudies({ lang }: { lang: Lang }) {
  const copy = HOME_COPY[lang].caseStudies;
  /** keyed by product name, so reordering lib/data.ts keeps the pairs */
  const sketches: Record<string, ReactNode> = {
    "Menu Atelier": <MenuSketch />,
    "Consular Platform": <PortalSketch copy={copy.sketches.portal} />,
  };

  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <SectionHeading lang={lang} index="07" title={copy.heading.title} accent={copy.heading.accent} />

      <div className="grid gap-6 lg:grid-cols-2">
        {homeCaseStudies(lang).map((study) => (
          <article
            key={study.name}
            className="reveal group flex flex-col overflow-hidden rounded-xl border border-line bg-surface"
          >
            <div
              aria-hidden
              className="flex aspect-[4/3] items-center justify-center overflow-hidden border-b border-line bg-background px-6 sm:aspect-[16/10] sm:px-10"
            >
              <div className="flex w-full justify-center transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] motion-safe:group-hover:-translate-y-1 lg:scale-[1.2]">
                {sketches[study.name]}
              </div>
            </div>

            <div className="flex flex-1 flex-col p-7 sm:p-9">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-accent">
                {typeset(study.client, lang)}
              </p>
              <h3 className="mt-3 font-sans text-2xl font-light tracking-tight text-foreground sm:text-3xl">
                {study.name}
              </h3>
              <p className="mt-4 text-pretty text-sm leading-relaxed text-muted">
                {typeset(study.description, lang)}
              </p>
              <ul className="mt-6 grid gap-2 text-sm text-foreground/80 sm:grid-cols-2">
                {study.features.map((feature) => (
                  <li key={feature} className="flex items-baseline gap-2">
                    <span className="text-muted">—</span>
                    <span>{typeset(feature, lang)}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex flex-wrap items-center gap-2 pt-7">
                {study.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-line px-3 py-1 text-xs text-muted"
                  >
                    {tech}
                  </span>
                ))}
                {study.url ? (
                  <a
                    href={study.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto inline-flex items-baseline gap-1.5 text-sm text-foreground transition-colors hover:text-accent"
                  >
                    {study.linkLabel ?? copy.demoLabel}
                    <span aria-hidden className="text-muted transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                      {"↗︎"}
                    </span>
                  </a>
                ) : null}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
