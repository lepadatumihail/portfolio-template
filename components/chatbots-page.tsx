import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import type { ChatbotsConfig } from "@/lib/chatbots";
import { email, whatsappNumber } from "@/lib/data";
import { homePath } from "@/lib/i18n";
import { SiteNav } from "@/components/site-nav";
import { Contact } from "@/components/contact";
import { typeset, typesetHeading } from "@/components/typeset";
import { LandingFaq } from "@/components/landing/landing-faq";
import { WhatsAppIcon } from "@/components/whatsapp-button";
import styles from "./chatbots-page.module.css";

/**
 * Persuade: show three practical business workflows, then invite a scoped call.
 * Inherit the portfolio's coastal imagery, quiet neutral copy, serif accents and
 * slim glass navigation. The demos are illustrative and captioned so; the one
 * real result is the Northwind CRM case, in its own section, with its own numbers.
 * Every WhatsApp link carries a message that says which service the reader wants.
 * Four homepage categories stay intact. No invented prices or outcome metrics.
 */
function Arrow({ down = false }: { down?: boolean }) {
  return <svg aria-hidden="true" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d={down ? "M12 4v16m-6-6 6 6 6-6" : "M4 12h16m-6-6 6 6-6 6"} /></svg>;
}

function Check() {
  return <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="m5 12 4 4L19 6" /></svg>;
}

const waLink = (message: string) => `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

function Conversation({ visual }: { visual: ChatbotsConfig["visual"] }) {
  return <div className={styles.conversation}>
    <div className={styles.chatHeader}>
      <span className={styles.avatar} aria-hidden="true"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 5v14M5 12h14" /></svg></span>
      <div><strong>{visual.business}</strong><span>{visual.assistant}</span></div>
      <span className={styles.channel}>{visual.channel}</span>
    </div>
    <div className={styles.messages}>
      <p className={styles.incoming}>{visual.incoming}</p>
      <p className={styles.reply}>{visual.reply}</p>
      <p className={styles.incoming}>{visual.followup}</p>
    </div>
    <div className={styles.saved}><Check />{visual.saved}</div>
  </div>;
}

function Typing({ className }: { className: string }) {
  return <span className={`${styles.typing} ${className}`} aria-hidden="true"><i /><i /><i /></span>;
}

/**
 * The hero's conversation, looped by CSS alone: a patient writes at 23:47,
 * the assistant answers with the price and two free slots, the patient picks
 * one and the booking lands in the calendar. Every line holds its final place
 * from the first paint and only fades in (opacity and transform), so the card
 * never changes size and nothing around it moves. Under reduced motion it is
 * the finished conversation; screen readers get the whole text either way.
 */
function ClinicDemo({ demo, visual }: { demo: ChatbotsConfig["demo"]; visual: ChatbotsConfig["visual"] }) {
  return <div className={`${styles.conversation} ${styles.demo}`}>
    <div className={styles.chatHeader}>
      <span className={styles.avatar} aria-hidden="true"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 5v14M5 12h14" /></svg></span>
      <div><strong>{visual.business}</strong><span>{demo.status}</span></div>
      <span className={styles.channel}>{visual.channel}</span>
    </div>
    <div className={styles.messages}>
      <span className={styles.time}>{demo.time}</span>
      <p className={`${styles.incoming} ${styles.stepAsk}`}>{demo.ask}</p>
      <div className={styles.turn}>
        <Typing className={styles.typingOffer} />
        <div className={`${styles.reply} ${styles.offer} ${styles.stepOffer}`}>
          <span className={styles.treatment}><span><strong>{demo.treatment}</strong><small>{demo.detail}</small></span><b>{demo.price}</b></span>
          <span className={styles.slotsLabel}>{demo.slotsLabel}</span>
          <span className={styles.slots}>{demo.slots.map((slot, i) => <span key={slot} className={i === 0 ? styles.picked : undefined}>{slot}</span>)}</span>
        </div>
      </div>
      <p className={`${styles.incoming} ${styles.stepPick}`}>{demo.pick}</p>
      <div className={styles.turn}>
        <Typing className={styles.typingBooked} />
        <p className={`${styles.reply} ${styles.stepBooked}`}>{demo.booked}</p>
      </div>
    </div>
    <div className={`${styles.saved} ${styles.stepSaved}`}><Check />{demo.saved}</div>
  </div>;
}

function Voice({ visual }: { visual: ChatbotsConfig["visual"] }) {
  return <div className={styles.voice}>
    <div className={styles.waveform} aria-hidden="true">{[10,18,12,28,42,25,52,36,62,44,28,48,66,38,54,32,22,40,26,16,30,18,10].map((height, i) => <i key={i} style={{ "--bar-height": `${height}px`, "--bar-delay": `${i * 25}ms` } as CSSProperties} />)}</div>
    <p className={styles.voiceQuote}>{visual.voiceLine}</p>
    <div className={styles.voiceStatus}><span aria-hidden="true" />{visual.voiceStatus}</div>
  </div>;
}

const LOG_ICONS: Record<ChatbotsConfig["visual"]["metaLog"][number]["kind"], ReactNode> = {
  insights: <path d="M5 19v-8m7 8V5m7 14v-5" />,
  budget: <path d="M4 8h13l-3-3m3 3-3 3m6 5H7l3-3m-3 3 3 3" />,
  post: <><rect x="4" y="4" width="16" height="16" rx="3" /><path d="m4 15 4-4 4 4 3-3 5 5" /></>,
  pause: <path d="M9 6v12m6-12v12" />,
};

/** One day of the Meta workflow as a log a business owner can read at a glance. */
function MetaDay({ visual }: { visual: ChatbotsConfig["visual"] }) {
  return <div className={styles.publishing}>
    <div className={styles.publishingHeader}><strong>{visual.metaTitle}</strong><span>{visual.metaStatus}</span></div>
    <ol className={styles.log}>{visual.metaLog.map(entry => <li key={entry.time} data-kind={entry.kind}>
      <span className={styles.logTime}>{entry.time}</span>
      <span className={styles.logIcon} aria-hidden="true"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">{LOG_ICONS[entry.kind]}</svg></span>
      <span className={styles.logText}><strong>{entry.title}</strong><span>{entry.detail}</span></span>
    </li>)}</ol>
  </div>;
}

export function ChatbotsPage({ config }: { config: ChatbotsConfig }) {
  const { lang, copy, labels, visual, demo, proof } = config;
  const waHref = waLink(config.waMessage);
  const tier = config.tiers?.[0];
  const demos = [<Conversation key="chat" visual={visual} />, <Voice key="voice" visual={visual} />, <MetaDay key="meta" visual={visual} />];
  return <main lang={lang} className={styles.page}>
    <SiteNav lang={lang} pageKey={config.key} pricingHere="quote" />
    <header className={styles.hero}>
      <div className={styles.heroInner}>
        <div className={styles.heroCopy}>
          <h1>{typeset(copy.hero.h1Main, lang)} <em>{typeset(copy.hero.h1Accent, lang)}</em></h1>
          <p>{typeset(copy.hero.sub, lang)}</p>
          <div className={styles.actions}>
            <a href={waHref} target="_blank" rel="noopener noreferrer" className={styles.primary}><WhatsAppIcon className={styles.waIcon} />{copy.hero.ctaLabel}</a>
            <a href="#capabilities" className={styles.secondary}>{labels.secondary}<Arrow down /></a>
          </div>
        </div>
        <figure className={styles.heroDemo}>
          <ClinicDemo demo={demo} visual={visual} />
          <div className={styles.connected}><span aria-hidden="true" /><span>{visual.voiceTitle}</span><span>{visual.metaStatus}</span></div>
          <figcaption>{demo.caption}</figcaption>
        </figure>
      </div>
    </header>

    <section className={`${styles.container} ${styles.intro}`}>
      <p>{typeset(copy.intro[0], lang)}</p>
      <p>{typeset(copy.intro[1], lang)}</p>
    </section>

    <section id="capabilities" className={`${styles.container} ${styles.capabilities}`}>
      <h2>{labels.sectionTitle} <em>{labels.sectionAccent}</em></h2>
      {copy.features.map((feature, i) => <article key={feature.title} className={`${styles.feature} ${i === 1 ? styles.reverse : ""}`}>
        <figure className={`${styles.featureDemo} ${styles[`scene${i}`]}`}>{demos[i]}<figcaption>{visual.caption}</figcaption></figure>
        <div className={styles.featureCopy}>
          <h3>{typeset(feature.title, lang)}</h3>
          <p>{typeset(feature.description, lang)}</p>
          <ul>{feature.includes?.map(line => <li key={line}><Check /><span>{typeset(line, lang)}</span></li>)}</ul>
          {config.asks[i] ? <a href={waLink(config.asks[i].waMessage)} target="_blank" rel="noopener noreferrer" className={styles.ask}><WhatsAppIcon className={styles.waIcon} />{config.asks[i].label}</a> : null}
        </div>
      </article>)}
    </section>

    <section className={`${styles.container} ${styles.proof}`}>
      <div className={styles.proofCopy}>
        <h2>{proof.title} <em>{proof.accent}</em></h2>
        <p>{typeset(proof.intro, lang)}</p>
        <ul>{proof.does.map(line => <li key={line}><Check /><span>{typeset(line, lang)}</span></li>)}</ul>
      </div>
      <figure className={styles.report}>
        <div className={styles.reportCard}>
          <div className={styles.reportHeader}><strong>{proof.report.title}</strong><span>{proof.report.status}</span></div>
          <p className={styles.reportValue}><strong>{typesetHeading(proof.report.value, lang, "never")}</strong><span>{proof.report.unit}</span></p>
          <dl className={styles.reportRows}>{proof.report.rows.map(row => <div key={row.label}><dt>{row.label}</dt><dd>{row.value}</dd></div>)}</dl>
          <div className={styles.estimate}>
            <p>{proof.report.estimate.label}</p>
            <dl className={styles.reportRows}>{proof.report.estimate.rows.map(row => <div key={row.label}><dt>{row.label}</dt><dd>{row.value}</dd></div>)}</dl>
          </div>
        </div>
        <figcaption>{proof.report.caption}</figcaption>
      </figure>
    </section>

    <section className={`${styles.container} ${styles.process}`}>
      <h2>{config.process!.heading.title} <em>{config.process!.heading.accent}</em></h2>
      <p className={styles.sectionDescription}>{copy.processNote}</p>
      <ol className={styles.steps}>{config.process!.steps.map(step => <li key={step.day}><span>{step.day}</span><h3>{step.title}</h3><p>{step.description}</p></li>)}</ol>
      <p className={styles.processFoot}>{config.process!.footnote}</p>
    </section>

    <section id="quote" className={`${styles.container} ${styles.quote}`}>
      <div>
        <h2>{labels.priceTitle} <em>{labels.priceAccent}</em></h2>
        {tier ? <><p className={styles.price}>{typesetHeading(tier.price, lang, "never")}</p><p className={styles.priceNote}>{typeset(tier.tagline, lang)}</p></> : null}
        <p>{config.pricingFootnote}</p>
      </div>
      <div className={styles.quoteActions}><a href={waHref} target="_blank" rel="noopener noreferrer" className={styles.primary}><WhatsAppIcon className={styles.waIcon} />{copy.hero.ctaLabel}</a><a href={`mailto:${email}?subject=${encodeURIComponent(config.mailSubject)}`} className={styles.secondary}>{email}<Arrow /></a></div>
    </section>

    <section className={`${styles.container} ${styles.faq}`}><h2>{labels.faqTitle}</h2><LandingFaq items={copy.faq} lang={lang} /></section>
    <aside className={`${styles.container} ${styles.related}`}><p>{copy.crossLinksBlurb}</p><div>{config.siblings.map(link => <Link key={link.href} href={link.href}>{link.label}<Arrow /></Link>)}<Link href={`${homePath(lang)}#services`}>{lang === "en" ? "All services" : lang === "es" ? "Todos los servicios" : "Все услуги"}<Arrow /></Link></div></aside>
    <Contact lang={lang} waMessage={config.waMessage} />
  </main>;
}
