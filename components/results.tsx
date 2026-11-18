import type { CSSProperties } from "react";
import type { StatKey } from "@/lib/data";
import cards from "./card-grid.module.css";
import { HOME_COPY, homeStats } from "@/lib/home";
import { formatNumber, type Lang } from "@/lib/i18n";
import { CountUp } from "./count-up";
import { typeset } from "./typeset";

function ProofIcon({ kind }: { kind: StatKey }) {
  const paths = {
    impressions: <><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" /><circle cx="12" cy="12" r="3" /></>,
    clicks: <path d="m5 3 14 9-6 1.5L10 20 5 3Zm8 10.5 5 6" />,
    projects: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18m-13 5 3 3 5-5" /></>,
    languages: <><circle cx="12" cy="12" r="9" /><ellipse cx="12" cy="12" rx="4" ry="9" /><path d="M3 12h18" /></>,
  };
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>{paths[kind]}</svg>;
}

export function Results({ lang }: { lang: Lang }) {
  const copy = HOME_COPY[lang].results;
  const stats = homeStats(lang);
  // Keep the figures inside their padded cards in every locale. Container
  // units cap the font size using the longest formatted value in this row.
  const longest = Math.max(
    ...stats.map((stat) => formatNumber(stat.value, lang, stat.decimals).length + stat.suffix.length),
  );
  const fit = { "--stat-fit": `${(200 / longest).toFixed(2)}cqi` } as CSSProperties;

  return (
    <section id="results" className="mx-auto w-full max-w-6xl scroll-mt-16 px-5 py-20 sm:px-8 sm:py-28">
      <div className="reveal mb-10 border-t border-line pt-7 sm:mb-12">
        <h2 className="text-balance font-sans text-[26px] font-medium tracking-[-0.025em] text-foreground sm:text-[30px]">
          {typeset(copy.heading.title, lang)}
        </h2>
        <p className="mt-4 max-w-xl text-pretty text-sm leading-relaxed text-muted sm:text-base">
          {typeset(copy.intro, lang)}
        </p>
      </div>

      <ul style={fit} className={cards.grid}>
        {stats.map((stat) => (
          <li key={stat.key} className={`reveal @container ${cards.card}`}>
            <span className={cards.icon}><ProofIcon kind={stat.key} /></span>
            {/* text-4xl / sm:text-6xl, capped at --stat-fit where container
                units work (the caps come after the sizes in the CSS) */}
            <p className="mt-6 font-sans text-4xl font-light tracking-tight text-foreground supports-[font-size:1cqi]:text-[length:min(2.25rem,var(--stat-fit))] sm:text-6xl sm:supports-[font-size:1cqi]:text-[length:min(3.75rem,var(--stat-fit))]">
              <CountUp value={stat.value} suffix={stat.suffix} decimals={stat.decimals} lang={lang} />
            </p>
            <p className="mt-3 text-sm text-foreground/80">{typeset(stat.label, lang)}</p>
            <p className="mt-1 text-xs text-muted">
              {typeset(stat.note, lang)}
            </p>
          </li>
        ))}
      </ul>

      <p className="reveal mt-7 max-w-2xl text-pretty text-sm leading-relaxed text-muted">
        {typeset(copy.note, lang)}
      </p>
    </section>
  );
}
