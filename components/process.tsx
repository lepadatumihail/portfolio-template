import { HOME_COPY } from "@/lib/home";
import type { Lang } from "@/lib/i18n";
import { SectionHeading } from "./section-heading";
import { typeset } from "./typeset";
import styles from "./process.module.css";
import cards from "./card-grid.module.css";

function StepIcon({ step }: { step: number }) {
  const drawings = [
    <path key="call" d="M8 3H5a2 2 0 0 0-2 2c0 8.8 7.2 16 16 16a2 2 0 0 0 2-2v-3l-5-2-2 2a14 14 0 0 1-6-6l2-2-2-5Z" />,
    <g key="build"><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18M8 4v5m1 4-2 2 2 2m6-4 2 2-2 2" /></g>,
    <g key="feedback"><path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5H4l-2 2V11.5a9.5 9.5 0 0 1 19 0Z" /><path d="m8 11 3 3 5-5" /></g>,
    <g key="launch"><path d="M12 3a7 7 0 0 1 7 7c0 5-7 11-7 11S5 15 5 10a7 7 0 0 1 7-7Z" /><path d="m9 10 3-3 3 3m-3-3v7" /></g>,
  ];
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>{drawings[step]}</svg>;
}

/**
 * `compact` is the short home page: three steps from `compact.steps` (brief,
 * agreement, build) in the same cards, drawn with the call, build and launch
 * icons.
 */
export function Process({ lang, compact = false }: { lang: Lang; compact?: boolean }) {
  const copy = HOME_COPY[lang].process;
  const steps = compact
    ? HOME_COPY[lang].compact.steps.map((step, i) => ({ day: step.day, title: step.title, description: step.line, icon: [0, 1, 3][i] }))
    : copy.steps.map((step, i) => ({ ...step, icon: i }));
  return (
    <section id="process" className="mx-auto w-full max-w-6xl scroll-mt-16 px-5 py-20 sm:px-8 sm:py-28">
      <SectionHeading lang={lang} index="03" title={copy.heading.title} accent={copy.heading.accent} />
      <ol className={`${cards.grid} ${compact ? styles.three : ""}`}>
        {steps.map((step) => (
          <li key={step.title} className={`reveal ${cards.card} ${styles.card}`}>
            <div className={styles.top}>
              <span className={cards.icon}><StepIcon step={step.icon} /></span>
              <p className={styles.day}>{typeset(step.day, lang)}</p>
            </div>
            <h3>{typeset(step.title, lang)}</h3>
            <p className={styles.description}>{typeset(step.description, lang)}</p>
          </li>
        ))}
      </ol>
      <p className="reveal mt-7 max-w-2xl text-pretty text-sm leading-relaxed text-muted">
        {typeset(copy.note, lang)}
      </p>
    </section>
  );
}
