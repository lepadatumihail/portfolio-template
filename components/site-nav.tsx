import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { alternatesFor, pathFor } from "@/lib/alternates";
import { homePath, labelStyle, LANG_META, LANGS, type Lang } from "@/lib/i18n";
import { NAV_COPY, NAV_SERVICES } from "@/lib/nav";
import { BrandMark } from "./brand-mark";
import { NavPopover } from "./nav-popover";
import styles from "./site-nav.module.css";

const MENU_ID = "site-language-menu";
const SERVICES_ID = "site-services-menu";
const MOBILE_ID = "site-mobile-menu";

// Keyboard focus in the site's navy rather than the browser's blue ring.
const FOCUS_RING =
  " focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

/**
 * The nav every page shares, in every language: logo, Services (a menu of the
 * service pages), Work, Pricing, Reviews, the free review button and the
 * language picker. Below md the links and the picker move into a menu that
 * drops from the bar. The wide, transparent header contracts into a slim,
 * translucent glass bar over the first 160px of scroll.
 *
 * A server component: scroll-driven CSS and native popovers supply the
 * interactions (see site-nav.module.css). The only JavaScript is
 * components/nav-popover.tsx, which closes a menu when one of its links is
 * followed.
 *
 * Render it as the first child of the page's <main>. A sticky element only
 * sticks inside its parent, so inside the hero <header> it would scroll away
 * with it. It overlays the top of the page rather than pushing it down (the
 * negative margin equals its height), so the header beneath still starts at
 * the very top — its washes are not cut off — and its top padding includes
 * the nav's 3rem (3.25rem from sm).
 *
 * `pageKey` is the page's key in lib/alternates.ts: the picker lists the
 * languages that page exists in, the Services menu marks the page you are
 * on, and on "home" Work and Pricing are plain hash links. `pricingHere` is
 * the id of a page's own prices (service and sector pages, the chatbots
 * page): Pricing then scrolls there rather than leaving for the home page's.
 *
 * No entrance animation: the nav renders inside each page's <main>, so it
 * mounts again on every client-side navigation, and a fade-rise here would
 * blank the bar for most of a second on each in-site click.
 */
export function SiteNav({
  lang,
  pageKey,
  pricingHere,
}: {
  lang: Lang;
  pageKey: string;
  pricingHere?: string;
}) {
  const copy = NAV_COPY[lang];
  const home = homePath(lang);
  const onHome = pageKey === "home";
  const services = NAV_SERVICES.map((key) => ({ key, href: pathFor(key, lang), ...copy.services[key] }));
  const links = [
    { key: "work", label: copy.links.work, href: onHome ? "#work" : `${home}#work` },
    { key: "pricing", label: copy.links.pricing, href: pricingHere ? `#${pricingHere}` : onHome ? "#pricing" : `${home}#pricing` },
    { key: "reviews", label: copy.links.reviews, href: pathFor("reviews", lang) },
  ];
  const versions = languageVersions(pageKey);

  const linkClass =
    `flex h-11 items-center whitespace-nowrap rounded-full px-3 transition-colors duration-200 hover:text-foreground ${FOCUS_RING}`;
  const reviewClass =
    `ml-1.5 flex h-9 items-center whitespace-nowrap rounded-full bg-accent px-4 text-[13px] font-medium text-white transition-[opacity,scale] duration-200 hover:opacity-90 active:scale-[0.97] sm:ml-2 ${FOCUS_RING}`;

  return (
    <nav
      aria-label={copy.label}
      className={`${styles.nav} sticky z-40 -mb-12 h-12 sm:-mb-13 sm:h-13`}
    >
      <div className={`${styles.frame} relative mx-auto flex h-full items-center justify-between gap-3`}>
        {/* The mark carries the L, so the nav shows the first name only; the
            link's label keeps the full name for screen readers. */}
        <Link
          href={home}
          aria-label="Alex Doe"
          className={`flex h-11 shrink-0 items-center gap-2.5 rounded-md ${FOCUS_RING}`}
        >
          <BrandMark height={13} className="shrink-0" />
          <span className="text-sm font-medium tracking-tight text-foreground">Alex</span>
        </Link>

        {/* Full ink keeps the links readable over the translucent material. */}
        <div className="-mr-3 flex items-center text-[13px] text-foreground">
          <ul className="hidden items-center md:flex">
            <li>
              <button
                type="button"
                popoverTarget={SERVICES_ID}
                className={`${styles.servicesTrigger} ${styles.needsPopover} ${linkClass} gap-1`}
              >
                {copy.links.services}
                <Chevron />
              </button>
              {/* where the Popover API is missing: the home page's services */}
              <Link href={onHome ? "#services" : `${home}#services`} className={`${styles.popoverFallback} ${linkClass}`}>
                {copy.links.services}
              </Link>
            </li>
            {links.map((link) => (
              <li key={link.key}>
                <NavLink href={link.href} current={link.key === pageKey} className={linkClass}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* the one filled button: the free website review form on the home page */}
          <NavLink href={onHome ? "#review" : `${home}#review`} className={reviewClass}>
            {copy.review}
          </NavLink>

          <div className="hidden items-center md:flex">
            <LanguagePicker lang={lang} pageKey={pageKey} label={copy.language} />
          </div>

          <button
            type="button"
            popoverTarget={MOBILE_ID}
            aria-label={copy.menu}
            className={`${styles.needsPopover} ml-1 grid size-11 place-items-center rounded-full md:hidden ${FOCUS_RING}`}
          >
            <span aria-hidden className={styles.burgerLines}>
              <i />
              <i />
            </span>
          </button>
        </div>
      </div>

      {/* From md: the service pages, each with one line on what it is. */}
      <NavPopover id={SERVICES_ID} label={copy.links.services} className={styles.servicesMenu}>
        <ul>
          {services.map((service) => (
            <li key={service.key}>
              <Link
                href={service.href}
                aria-current={service.key === pageKey ? "page" : undefined}
                className={styles.serviceItem}
              >
                <span className={styles.serviceTitle}>{service.title}</span>
                <span className={styles.serviceLine}>{service.line}</span>
              </Link>
            </li>
          ))}
        </ul>
        <Link href={pathFor("industry-hub", lang)} className={styles.menuFoot}>
          {copy.industries}
          <Arrow />
        </Link>
      </NavPopover>

      {/* Below md: everything in one panel that drops from the bar. Each row
          carries its place in the stagger as --i. */}
      <NavPopover id={MOBILE_ID} label={copy.menu} className={styles.mobileMenu}>
        <p className={styles.groupLabel}>{copy.links.services}</p>
        <ul>
          {services.map((service, i) => (
            <li key={service.key} style={{ "--i": i } as CSSProperties}>
              <Link
                href={service.href}
                aria-current={service.key === pageKey ? "page" : undefined}
                className={styles.mobileItem}
              >
                {service.title}
              </Link>
            </li>
          ))}
          <li style={{ "--i": services.length } as CSSProperties}>
            <Link href={pathFor("industry-hub", lang)} className={`${styles.mobileItem} ${styles.mobileMuted}`}>
              {copy.industries}
              <Arrow />
            </Link>
          </li>
        </ul>
        <ul className={styles.mobilePrimary}>
          {links.map((link, i) => (
            <li key={link.key} style={{ "--i": services.length + 1 + i } as CSSProperties}>
              <NavLink href={link.href} current={link.key === pageKey} className={styles.mobileItem}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
        {versions.length > 1 ? (
          <ul aria-label={copy.language} className={styles.mobileLanguages}>
            {versions.map((version, i) => (
              <li key={version.lang} style={{ "--i": services.length + 1 + links.length + i } as CSSProperties}>
                <Link
                  href={version.path}
                  prefetch={false}
                  hrefLang={version.meta.htmlLang}
                  lang={version.meta.htmlLang}
                  aria-current={version.lang === lang ? "true" : undefined}
                  style={labelStyle(version.lang, lang)}
                  className={styles.languageChip}
                >
                  {version.meta.label}
                </Link>
              </li>
            ))}
          </ul>
        ) : null}
      </NavPopover>
    </nav>
  );
}

/**
 * A nav link: a plain anchor for a section on this page ("#work"), so the
 * browser scrolls there itself, and a Next link for anything else.
 */
function NavLink({
  href,
  current = false,
  className,
  children,
}: {
  href: string;
  current?: boolean;
  className: string;
  children: ReactNode;
}) {
  if (href.startsWith("#")) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} aria-current={current ? "page" : undefined} className={className}>
      {children}
    </Link>
  );
}

function Chevron() {
  return (
    <svg
      viewBox="0 0 16 16"
      className={`${styles.chevron} size-3 shrink-0`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="m4 6 4 4 4-4" />
    </svg>
  );
}

function Arrow() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="size-3.5 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M4 12h15m-6-6 6 6-6 6" />
    </svg>
  );
}

/** The languages a page exists in, in LANGS order, each with its path. */
function languageVersions(pageKey: string) {
  const alternates = alternatesFor(pageKey);
  return LANGS.flatMap((version) => {
    const path = alternates[version];
    return path ? [{ lang: version, path, meta: LANG_META[version] }] : [];
  });
}

/**
 * A button showing the current language's code; it opens a short list of the
 * languages this page exists in, each under its own name, the current one
 * checked. Nothing renders for a page that exists in one language only.
 *
 * The links are not prefetched: each language has its own root layout, so
 * following one is a full page load anyway, and a prefetch would pull the
 * other layout's font preloads into this page — Cyrillic files on a Latin one.
 */
function LanguagePicker({ lang, pageKey, label }: { lang: Lang; pageKey: string; label: string }) {
  const versions = languageVersions(pageKey);
  if (versions.length < 2) return null;

  const itemClass =
    // the ring sits inside the item, so the menu's edge never clips it
    "flex h-11 w-full items-center justify-between gap-6 rounded-lg px-3 text-left text-sm text-foreground hover:bg-foreground/[0.04] focus-visible:bg-foreground/[0.04] focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-accent sm:h-9";

  return (
    <>
      <span aria-hidden className="mx-1.5 hidden h-4 w-px bg-line sm:block" />
      <div className={styles.picker}>
        <button
          type="button"
          popoverTarget={MENU_ID}
          className={`${styles.trigger} flex h-11 items-center gap-1.5 rounded-full px-3 transition-[color,scale] duration-150 ease-out hover:text-foreground motion-safe:active:scale-[0.97] ${FOCUS_RING}`}
        >
          <svg
            viewBox="0 0 16 16"
            className="size-3.5 shrink-0"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.3"
            aria-hidden
          >
            <circle cx="8" cy="8" r="6.25" />
            <path d="M1.75 8h12.5M8 1.75c1.65 1.75 2.5 3.83 2.5 6.25S9.65 12.5 8 14.25C6.35 12.5 5.5 10.42 5.5 8S6.35 3.5 8 1.75Z" />
          </svg>
          {/* the visible code stays in the name, so "click EN" works by voice */}
          <span className="sr-only">{`${label}: `}</span>
          {LANG_META[lang].short}
          <svg
            viewBox="0 0 16 16"
            className={`${styles.chevron} size-3 shrink-0`}
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="m4 6 4 4 4-4" />
          </svg>
        </button>

        <div id={MENU_ID} popover="auto" className={styles.menu}>
          <ul aria-label={label}>
            {versions.map((version) => (
              <li key={version.lang}>
                {version.lang === lang ? (
                  // the page you are on: choosing it just closes the menu
                  <button
                    type="button"
                    popoverTarget={MENU_ID}
                    popoverTargetAction="hide"
                    aria-current="true"
                    lang={version.meta.htmlLang}
                    className={itemClass}
                  >
                    {version.meta.label}
                    <svg
                      viewBox="0 0 16 16"
                      className="size-4 shrink-0 text-accent"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden
                    >
                      <path d="m3.5 8.5 3 3 6-7" />
                    </svg>
                  </button>
                ) : (
                  <Link
                    href={version.path}
                    prefetch={false}
                    hrefLang={version.meta.htmlLang}
                    lang={version.meta.htmlLang}
                    style={labelStyle(version.lang, lang)}
                    className={itemClass}
                  >
                    {version.meta.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* shown only where the Popover API is missing */}
        <span className={`${styles.fallback} items-center gap-3 px-3`}>
          {versions
            .filter((version) => version.lang !== lang)
            .map((version) => (
              <Link
                key={version.lang}
                href={version.path}
                prefetch={false}
                hrefLang={version.meta.htmlLang}
                lang={version.meta.htmlLang}
                aria-label={version.meta.label}
                className={`flex h-11 items-center rounded-sm transition-colors duration-200 hover:text-foreground ${FOCUS_RING}`}
              >
                {version.meta.short}
              </Link>
            ))}
        </span>
      </div>
    </>
  );
}
