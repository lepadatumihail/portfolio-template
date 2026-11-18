import Link from "next/link";
import { pathFor } from "@/lib/alternates";
import type { ReactNode } from "react";
import { HOME_COPY, homeServices, type HomeCopy } from "@/lib/home";
import type { Lang } from "@/lib/i18n";
import type { ServiceKey } from "@/lib/landing";
import { SectionHeading } from "./section-heading";
import { typeset } from "./typeset";
import styles from "./services.module.css";

/** Four services in an even grid, each with its own setting and visible scope. */
type Sketches = HomeCopy["services"]["sketches"];

type IconName = "arrow" | "check" | "chat" | "search" | "pin" | "spark" | "file" | "window";

function Icon({ name }: { name: IconName }) {
  const paths: Record<typeof name, ReactNode> = {
    arrow: <><path d="M5 12h14M13 6l6 6-6 6" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    chat: <path d="M20 11.5a8 8 0 0 1-8 8 9 9 0 0 1-3-.5l-5 1 1-4a8 8 0 1 1 15-4.5Z" />,
    search: <><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 4 4" /></>,
    pin: <><path d="M18 10c0 5-6 10-6 10S6 15 6 10a6 6 0 1 1 12 0Z" /><circle cx="12" cy="10" r="2" /></>,
    spark: <path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5L12 3Z" />,
    file: <><path d="M14 3H6v18h12V7l-4-4ZM14 3v5h4M9 12h6M9 16h4" /></>,
    window: <><rect x="3" y="4" width="18" height="16" rx="3" /><path d="M3 9h18M8 9v11M6 6.5h.01M9 6.5h.01" /></>,
  };
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

function SiteSketch({ copy }: { copy: Sketches["site"] }) {
  return (
    <div className={styles.siteScene}>
      <div className={styles.browserFrame}>
        <div className={styles.browserChrome}><span><i /><i /><i /></span><span>{copy.business}</span><Icon name="window" /></div>
        <div className={styles.siteHero}>
          <div className={styles.siteLanguages}><b>EN</b><span>ES</span><span>DE</span></div>
          <strong>{copy.headline}</strong>
          <span className={styles.typeLine} /><span className={styles.shortLine} />
        </div>
        <div className={styles.bookingStrip}><span>{copy.day}</span><span>{copy.party}</span><b>{copy.book}<Icon name="arrow" /></b></div>
      </div>
      <div className={styles.message}><span><Icon name="chat" /></span>{copy.message}<i /></div>
    </div>
  );
}

function FoundSketch({ copy }: { copy: Sketches["found"] }) {
  return (
    <div className={styles.foundScene}>
      <div className={styles.searchBox}><Icon name="search" /><span>{copy.question}</span></div>
      <div className={styles.foundChannels}>
        <div><span><Icon name="search" /></span><small>Google</small></div>
        <div><span><Icon name="pin" /></span><small>{copy.maps}</small></div>
        <div><span><Icon name="spark" /></span><small>ChatGPT</small></div>
      </div>
      <div className={styles.searchResult}><span className={styles.resultMark}><Icon name="check" /></span><div><strong>{copy.result}</strong><span>{copy.domain}</span></div><span className={styles.resultStatus}>{copy.open}</span></div>
    </div>
  );
}

function AutomationSketch({ copy }: { copy: Sketches["automation"] }) {
  return (
    <div className={styles.automationScene}>
      <div className={styles.document}><Icon name="file" /><strong>{copy.file}</strong><span /><span /><span /><span /></div>
      <div className={styles.connection}><i /><span><Icon name="spark" /></span><i /></div>
      <div className={styles.extraction}>
        <div className={styles.extractionHeader}><Icon name="spark" /><strong>{copy.read}</strong></div>
        <div className={styles.field}><span>{copy.client}</span><i /></div>
        <div className={styles.field}><span>{copy.date}</span><strong>{copy.dateValue}</strong></div>
        <div className={styles.field}><span>{copy.total}</span><strong>{copy.totalValue}</strong></div>
        <div className={styles.saved}><Icon name="check" />{copy.saved}</div>
      </div>
    </div>
  );
}

function DashboardSketch({ copy }: { copy: Sketches["dashboard"] }) {
  return (
    <div className={styles.dashboardScene}>
      <div className={styles.dashboard}>
        <div className={styles.dashboardHeader}><span><Icon name="window" />{copy.title}</span><b>{copy.add}<span>+</span></b></div>
        <div className={styles.dashboardRows}>{copy.rows.map((row, index) => <div className={styles.dashboardRow} key={index}><span className={styles.person}><i /><span style={{ width: `${41 + index * 6}px` }} /></span><span>{row.date}</span><span className={index === 0 ? styles.currentStatus : styles.status}>{row.status}</span></div>)}</div>
        <div className={styles.dashboardFoot}><span /><span /><span /></div>
      </div>
      <span className={styles.dashboardSeal}><Icon name="check" /></span>
    </div>
  );
}

function sketchFor(key: ServiceKey, sketches: Sketches): ReactNode {
  switch (key) {
    case "web-design": return <SiteSketch copy={sketches.site} />;
    case "seo": return <FoundSketch copy={sketches.found} />;
    case "ai-automation": return <AutomationSketch copy={sketches.automation} />;
    case "app-development": return <DashboardSketch copy={sketches.dashboard} />;
  }
}

/**
 * `compact` is the short home page: the same cards and drawings, with the
 * one-line copy from `compact.services` and no intro or "Includes" list —
 * the service page behind each card has those.
 */
export function Services({ lang, compact = false }: { lang: Lang; compact?: boolean }) {
  const copy = HOME_COPY[lang].services;
  const short = HOME_COPY[lang].compact.services;
  const heading = compact ? short.heading : copy.heading;
  return (
    <section id="services" className={`${styles.section} mx-auto w-full max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28`}>
      <div className={styles.heading}>
        <SectionHeading lang={lang} index="01" title={heading.title} accent={heading.accent} />
        {compact ? null : <p className={`reveal ${styles.intro}`}>{typeset(copy.intro, lang)}</p>}
      </div>
      <div className={styles.grid}>
        {homeServices(lang).map((service) => (
          <article key={service.key} className={`reveal ${styles.card} ${styles[service.key]}`}>
            <div aria-hidden="true" className={styles.art}>
              <div className={styles.scene}>{sketchFor(service.key, copy.sketches)}</div>
            </div>
            <div className={styles.cardBody}>
              <div className={styles.cardIntro}>
                <h3>{typeset(compact ? short.items[service.key].title : service.title, lang)}</h3>
                <p>{typeset(compact ? short.items[service.key].line : service.summary, lang)}</p>
              </div>
              {compact ? (
                <div className={styles.compactGap} />
              ) : (
                <div className={styles.includedBlock}>
                  <p className={styles.includesLabel}>{copy.includes}</p>
                  <ul className={styles.includes}>
                    {service.includes.map((line) => (
                      <li key={line}><Icon name="check" /><span>{typeset(line, lang)}</span></li>
                    ))}
                  </ul>
                </div>
              )}
              {service.key === "ai-automation" ? <Link href={pathFor("chatbots", lang)} className={styles.serviceLink}><span>{copy.chatbotsLink}</span><Icon name="arrow" /></Link> : null}
              <Link href={service.href} className={styles.serviceLink}>
                <span>{typeset(service.linkLabel, lang)}</span><Icon name="arrow" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
