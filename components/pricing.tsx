import { email } from "@/lib/data";
import { HOME_COPY, homeTiers } from "@/lib/home";
import type { Lang } from "@/lib/i18n";
import { SectionHeading } from "./section-heading";
import { typeset, typesetHeading } from "./typeset";
import styles from "./pricing.module.css";

export function Pricing({ lang }: { lang: Lang }) {
  const copy = HOME_COPY[lang].pricing;
  return (
    <section id="pricing" className="mx-auto w-full max-w-6xl scroll-mt-16 px-5 py-20 sm:px-8 sm:py-28">
      <SectionHeading lang={lang} index="04" title={copy.heading.title} accent={copy.heading.accent} />
      <div className={styles.grid}>
        {homeTiers(lang).map((tier) => (
          <article key={tier.name} className={`reveal ${styles.card} ${tier.highlighted ? styles.featured : ""}`}>
            {tier.highlighted ? <p className={styles.badge}><span aria-hidden />{copy.badge}</p> : null}
            <div className={styles.intro}>
              <h3 className={styles.name}>{typeset(tier.name, lang)}</h3>
              <p className={styles.price}>{typesetHeading(tier.price, lang, "never")}</p>
              <p className={styles.tagline}>{typeset(tier.tagline, lang)}</p>
            </div>
            <div className={styles.body}>
              <ul className={styles.features}>
                {tier.features.map((feature) => (
                  <li key={feature}>
                    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="m4 10 4 4 8-8" /></svg>
                    <span>{typeset(feature, lang)}</span>
                  </li>
                ))}
              </ul>
              <a href={`mailto:${email}?subject=${encodeURIComponent(tier.subject)}`} className={styles.cta}>
                <span>{typeset(tier.cta, lang)}</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M4 12h15m-6-6 6 6-6 6" /></svg>
              </a>
            </div>
          </article>
        ))}
      </div>
      <p className="reveal mt-8 max-w-2xl text-pretty text-sm leading-relaxed text-muted">{typeset(copy.note, lang)}</p>
    </section>
  );
}
