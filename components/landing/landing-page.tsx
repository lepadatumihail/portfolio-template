import Link from "next/link";
import { email, whatsappNumber } from "@/lib/data";
import { landingProjects } from "@/lib/home";
import { INDUSTRY_HUB_PATH, industryHubUi } from "@/lib/industries";
import { landingUi, type LandingConfig } from "@/lib/landing";
import { NAV_COPY } from "@/lib/nav";
import { SectionHeading } from "@/components/section-heading";
import { WhatsAppIcon } from "@/components/whatsapp-button";
import { HeroWashes } from "@/components/ornament";
import { LocalTime } from "@/components/local-time";
import { ReviewQuote } from "@/components/review-quote";
import { ReviewStrip } from "@/components/review-strip";
import { SiteNav } from "@/components/site-nav";
import {
  joint,
  narrowCell,
  typeset,
  typesetHeading,
  typesetWithTail,
} from "@/components/typeset";
import { LandingFaq } from "./landing-faq";

// CSS-only hero entrance (see .fade-rise in globals.css) — above-the-fold
// content stays visible even with JS disabled. Section reveals use the
// .reveal utility (components/reveals.tsx), so this whole page is a server
// component.
// The nav (components/site-nav.tsx) overlays the top of the header, whose
// top padding includes its height (3.5rem, 4rem from sm).
const rise = (delay: number) => ({ style: { animationDelay: `${delay}s` } });

// The H1 is 2.3rem up to 669 px. A Russian H1 can hold a group of words that
// may not break, wider than the column below 360 px: «для строительной» is
// 303 px at 2.3rem, and the column at 320 px is 280 px. Below 360 px the size
// follows the viewport instead, 10.25vw, which is 2.3rem at 360 px.
const H1_SIZE = {
  ru: "text-[length:min(10.25vw,clamp(2.3rem,5.5vw,4.2rem))]",
  other: "text-[clamp(2.3rem,5.5vw,4.2rem)]",
};

// «от 300 €/мес.» is 228 px at 2.25rem, and a price card at 320 px is 220 px
// inside, so below 343 px the price follows the viewport.
const PRICE_SIZE = "text-[length:min(2.25rem,10.5vw)]";

type LandingPageProps = {
  config: LandingConfig;
};

export function LandingPage({ config }: LandingPageProps) {
  const { lang } = config;
  const ui = landingUi[lang];
  const { copy } = config;
  const mailHref = `mailto:${email}?subject=${encodeURIComponent(config.mailSubject)}`;
  // primary CTAs go to WhatsApp with a per-service pre-filled message —
  // email stays available in the footer
  const waHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(config.waMessage)}`;
  const projects = landingProjects(lang);
  const proof = config.proofProjects
    .map((name) => projects.find((p) => p.name === name))
    .filter((p): p is (typeof projects)[number] => Boolean(p));
  // industry pages bring numbers from their own sector; the rest share one row
  const stats = config.stats ?? ui.stats;
  const statsNote = config.statsNote ?? ui.statsNote;
  const statsSource = config.statsSource ?? ui.statsSource;
  const tiers = config.tiers ?? ui.tiers;
  // sections are numbered in the order they appear, so a page that leaves the
  // proof block out has no gap in the sequence
  const showProof = !config.hideProof;
  const order = ["features", ...(showProof ? ["proof"] : []), "process", "pricing", "faq"];
  const sectionIndex = (key: string) => String(order.indexOf(key) + 1).padStart(2, "0");
  const processHeading = config.process?.heading ?? ui.sections.process;
  const processSteps = config.process?.steps ?? ui.processSteps;

  return (
    <main lang={lang} className="overflow-x-clip">
      {/* the nav's "Contact" scrolls to this page's own footer, #contact */}
      <SiteNav lang={lang} pageKey={config.key} pricingHere="pricing" />

      {/* ── hero — plain paper, no effects: these pages must load instantly ── */}
      <header className="relative">
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <HeroWashes />
        </div>
        <div className="relative mx-auto w-full max-w-6xl px-5 pb-16 pt-31 sm:px-8 sm:pb-20 sm:pt-45">
          {config.parent ? (
            <nav
              aria-label={ui.nav.breadcrumb}
              {...rise(0.08)}
              className="fade-rise mb-6 text-xs text-muted"
            >
              <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <li>
                  <Link
                    href={ui.nav.homeHref}
                    className="transition-colors duration-200 hover:text-foreground"
                  >
                    {ui.nav.home}
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li>
                  <Link
                    href={config.parent.href}
                    className="transition-colors duration-200 hover:text-foreground"
                  >
                    {config.parent.label}
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li aria-current="page" className="text-foreground">
                  {config.audience ?? config.serviceName}
                </li>
              </ol>
            </nav>
          ) : null}
          {/* the dot sits on the first line when the label wraps */}
          <p {...rise(0.1)} className="fade-rise flex items-start gap-2.5 text-sm text-muted">
            <span aria-hidden className="mt-[0.4375rem] size-1.5 shrink-0 rounded-full bg-accent" />
            <span>{typeset(copy.hero.label, lang)}</span>
          </p>

          <h1
            className={`mt-6 max-w-4xl text-balance font-sans ${lang === "ru" ? H1_SIZE.ru : H1_SIZE.other} font-light leading-[1.06] tracking-[-0.02em] text-foreground`}
          >
            <span {...rise(0.2)} className="fade-rise inline-block">
              {typesetHeading(copy.hero.h1Main, lang, "sm")}
              {joint(copy.hero.h1Main, lang)}
              <span className="font-serif italic tracking-[-0.01em]">
                {typesetHeading(copy.hero.h1Accent, lang, "sm")}
              </span>
            </span>
          </h1>

          <p
            {...rise(0.3)}
            className="fade-rise mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted sm:text-lg"
          >
            {typeset(copy.hero.sub, lang)}
          </p>

          <div {...rise(0.4)} className="fade-rise mt-9 flex flex-wrap items-center gap-6">
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-white transition-[scale,opacity] duration-300 hover:opacity-90 active:scale-[0.97]"
            >
              {typeset(copy.hero.ctaLabel, lang)}
            </a>
            <Link
              href={`${ui.nav.homeHref}#work`}
              className="text-sm font-medium text-foreground underline decoration-line underline-offset-4 transition-colors duration-200 hover:decoration-foreground"
            >
              {ui.seeWork}
            </Link>
          </div>

          <p {...rise(0.55)} className="fade-rise mt-14 text-xs text-muted">
            {ui.availability} · {ui.city} · <LocalTime />
          </p>
        </div>
      </header>

      {/* ── intro — the hairline sits inside the gutter, as the nav's edges and
          every section heading do ── */}
      <section className="mx-auto w-full max-w-6xl px-5 pb-4 sm:px-8">
        <div className="border-t border-line pt-14 sm:pt-16">
          <div className="max-w-3xl">
            {copy.intro.map((paragraph, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? "reveal text-pretty font-sans text-xl font-light leading-relaxed text-foreground sm:text-2xl"
                    : "reveal mt-6 text-pretty text-sm leading-relaxed text-muted sm:text-base"
                }
              >
                {typeset(paragraph, lang)}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ── features ── */}
      <section className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeading
          lang={lang}
          index={sectionIndex("features")}
          title={ui.sections.features.title}
          accent={ui.sections.features.accent}
        />
        <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
          {copy.features.map((feature) => (
            <div key={feature.title} className="reveal border-t border-line pt-6">
              <h3 className="font-sans text-xl font-medium tracking-tight text-foreground sm:text-2xl">
                {typesetHeading(feature.title, lang)}
              </h3>
              <p className="mt-3 text-pretty text-sm leading-relaxed text-muted">
                {typeset(feature.description, lang)}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── proof: stats + local work — a page may leave it out ── */}
      {showProof ? (
        // full width so the review strip can run edge to edge; the rest keeps
        // the page's column
        <section className="w-full py-20 sm:py-28">
          <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
            <SectionHeading
              lang={lang}
              index={sectionIndex("proof")}
              title={ui.sections.proof.title}
              accent={ui.sections.proof.accent}
            />
          </div>
          {config.reviewRail ? <ReviewStrip lang={lang} className="mb-16 sm:mb-20" /> : null}
          <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
            <div className="grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-sans text-3xl font-medium tracking-tight text-foreground tabular-nums sm:text-4xl">
                    {stat.value}
                  </p>
                  <p className={`mt-2 text-sm text-muted ${narrowCell(lang)}`}>
                    {typeset(stat.label, lang)}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-8 max-w-xl text-pretty text-sm leading-relaxed text-muted">
              {typeset(statsNote, lang)}{" "}
              <Link
                href={statsSource.href}
                className="text-foreground underline decoration-line underline-offset-4 transition-colors duration-200 hover:decoration-foreground"
              >
                {typeset(statsSource.label, lang)}
              </Link>
              .
            </p>

            <div className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2">
              {proof.map((project) => (
                <a
                  key={project.name}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="reveal group block"
                >
                  <div className="overflow-hidden rounded-xl border border-line bg-surface">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={project.image}
                        alt={project.alt}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                      />
                    </div>
                  </div>
                  <div className="mt-4 flex items-baseline justify-between gap-4">
                    <h3 className="font-sans text-lg font-medium tracking-tight text-foreground">
                      {typesetWithTail(
                        project.name,
                        lang,
                        <span className="ml-2 inline-block text-muted transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent">
                          {"↗︎"}
                        </span>,
                        { heading: "always" },
                      )}
                    </h3>
                    <span className="shrink-0 text-xs text-muted">
                      {new URL(project.url).hostname.replace("www.", "")}
                    </span>
                  </div>
                  <p className="mt-1.5 max-w-md text-pretty text-sm leading-relaxed text-muted">
                    {typeset(project.description, lang)}
                  </p>
                </a>
              ))}
            </div>

            {config.review ? (
              <ReviewQuote review={config.review} lang={lang} className="reveal mt-16 max-w-3xl" />
            ) : null}

            <p className="reveal mt-16 max-w-3xl border-l-2 border-accent/40 pl-6 text-pretty text-sm leading-relaxed text-foreground/80 sm:text-base">
              {typeset(copy.localNote, lang)}
            </p>
          </div>
        </section>
      ) : null}

      {/* ── process ── */}
      <section className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeading
          lang={lang}
          index={sectionIndex("process")}
          title={processHeading.title}
          accent={processHeading.accent}
        />
        <p className="-mt-6 mb-12 max-w-2xl text-pretty text-sm leading-relaxed text-muted sm:mb-16 sm:text-base">
          {typeset(copy.processNote, lang)}
        </p>
        <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <div key={step.title} className="reveal border-t border-line pt-6">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-accent">{step.day}</p>
              <h3 className="mt-4 font-sans text-2xl font-light tracking-tight text-foreground">
                {typesetHeading(step.title, lang, "never")}
              </h3>
              <p className="mt-3 text-pretty text-sm leading-relaxed text-muted">
                {typeset(step.description, lang)}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-14 max-w-xl text-pretty text-sm leading-relaxed text-muted">
          {typeset(config.process?.footnote ?? ui.processFootnote, lang)}
        </p>
      </section>

      {/* ── pricing ── */}
      <section id="pricing" className="mx-auto w-full max-w-6xl scroll-mt-16 px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeading
          lang={lang}
          index={sectionIndex("pricing")}
          title={ui.sections.pricing.title}
          accent={ui.sections.pricing.accent}
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {tiers.map((tier, i) => {
            const highlighted = i === config.highlightTier;
            return (
              <article
                key={tier.name}
                className={`reveal relative flex flex-col rounded-xl bg-surface p-7 sm:p-8 ${
                  highlighted ? "border-2 border-accent" : "border border-line"
                }`}
              >
                {highlighted ? (
                  <p className="absolute -top-3 left-7 rounded-full bg-accent px-3 py-1 text-xs font-medium text-white">
                    {config.tierBadge ?? ui.tierBadge}
                  </p>
                ) : null}
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted">
                  {tier.name}
                </p>
                <p className={`mt-4 font-sans ${PRICE_SIZE} font-light tracking-tight text-foreground`}>
                  {typesetHeading(tier.price, lang, "never")}
                </p>
                <p className="mt-2 text-sm text-muted">{typeset(tier.tagline, lang)}</p>
                <ul className="mt-7 flex flex-col gap-2.5 text-sm text-foreground/80">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-baseline gap-2.5">
                      <span aria-hidden className="text-accent">✓</span>
                      <span>{typeset(feature, lang)}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 inline-block rounded-full px-5 py-3 text-center text-sm font-medium transition-[scale,opacity,background-color] duration-300 active:scale-[0.97] ${
                    highlighted
                      ? "bg-accent text-white hover:opacity-90"
                      : "border border-line text-foreground hover:bg-foreground/[0.03]"
                  }`}
                >
                  {typeset(tier.cta, lang)}
                </a>
              </article>
            );
          })}
        </div>
        <p className="mt-12 max-w-xl text-pretty text-sm leading-relaxed text-muted">
          {typeset(config.pricingFootnote ?? ui.pricingFootnote, lang)}
        </p>
      </section>

      {/* ── faq ── */}
      <section className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeading
          lang={lang}
          index={sectionIndex("faq")}
          title={ui.sections.faq.title}
          accent={ui.sections.faq.accent}
        />
        <LandingFaq items={copy.faq} lang={lang} />

        <div className="mt-16 border-t border-line pt-8">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted">
            {ui.alsoLooking}
          </p>
          <p className="mt-4 max-w-2xl text-pretty text-sm leading-relaxed text-muted">
            {typeset(copy.crossLinksBlurb, lang)}
          </p>
          <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
            {config.siblings.map((sibling) => (
              <Link
                key={sibling.href}
                href={sibling.href}
                className="group font-sans text-lg font-light tracking-tight text-foreground transition-colors duration-300 hover:text-accent sm:text-xl"
              >
                {typesetWithTail(
                  sibling.label,
                  lang,
                  <span className="ml-2 inline-block text-muted transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent">
                    {"↗︎"}
                  </span>,
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── contact / footer ── */}
      <footer id="contact" className="scroll-mt-16 border-t border-line">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-5 py-24 text-center sm:px-8 sm:py-36">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted">
            {typeset(ui.contact.kicker, lang)}
          </p>
          <h2 className="mt-6 font-sans text-[clamp(2.8rem,8vw,6.5rem)] font-light leading-[0.98] tracking-[-0.02em] text-foreground">
            {ui.contact.titleMain ? (
              <>
                {typesetHeading(ui.contact.titleMain, lang, "sm")}
                {joint(ui.contact.titleMain, lang)}
              </>
            ) : null}
            <span className="font-serif italic">{typesetHeading(ui.contact.titleAccent, lang, "sm")}</span>
          </h2>
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-2.5 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-white transition-[scale,opacity] duration-300 hover:opacity-90 active:scale-[0.97]"
          >
            <WhatsAppIcon className="size-4" />
            {NAV_COPY[lang].whatsapp}
          </a>
          <a
            href={mailHref}
            className="mt-8 text-lg text-foreground underline decoration-line underline-offset-4 transition-colors duration-200 hover:text-accent hover:decoration-accent sm:text-2xl"
          >
            {email}
          </a>
        </div>

        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-5 pb-8 pr-20 text-xs text-muted sm:px-8 sm:pr-24">
          <p>© 2026 Alex Doe</p>
          <p>
            {ui.footerLocation} · <LocalTime />
          </p>
          <span className="flex gap-5">
            <Link
              href={ui.nav.homeHref}
              className="transition-colors duration-200 hover:text-foreground"
            >
              example.com
            </Link>
            <Link
              href={INDUSTRY_HUB_PATH[lang]}
              className="transition-colors duration-200 hover:text-foreground"
            >
              {typeset(industryHubUi[lang].label, lang)}
            </Link>
            <a
              href="https://instagram.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200 hover:text-foreground"
            >
              Instagram&nbsp;↗︎
            </a>
          </span>
        </div>
      </footer>
    </main>
  );
}
