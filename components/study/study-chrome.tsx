import Link from "next/link";
import { FOOTER_PAGES, pathFor } from "@/lib/alternates";
import { email } from "@/lib/data";
import type { Lang } from "@/lib/i18n";
import { studyUi } from "@/lib/studies";
import { LocalTime } from "@/components/local-time";
import { HeroWashes } from "@/components/ornament";
import { typeset } from "@/components/typeset";

/**
 * Shared background + footer for the case-study pages, their index and the
 * industry hub. The nav is components/site-nav.tsx, the first child of each
 * page's <main>.
 */

/**
 * Viewport-sized background layer, the same trick components/site-background
 * uses on the home page: the washes are blurred circles, so clipping them to
 * a short header leaves a visible hard edge where the blur is cut. Fixed and
 * full-viewport, they never end mid-page. No shader here — a reading page
 * should not pay for WebGL.
 */
export function StudyBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <HeroWashes />
    </div>
  );
}

export function StudyFooter({ lang }: { lang: Lang }) {
  const ui = studyUi[lang];
  const links = FOOTER_PAGES.map((page) => ({ label: ui.footer[page], href: pathFor(page, lang) }));

  return (
    <footer className="mt-24 border-t border-line">
      <div className="mx-auto flex w-full max-w-3xl flex-wrap items-center justify-center gap-x-6 gap-y-2 px-5 pb-6 pt-8 text-xs text-muted sm:px-8">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="transition-colors duration-200 hover:text-foreground"
          >
            {typeset(link.label, lang)}
          </Link>
        ))}
      </div>
      <div className="mx-auto flex w-full max-w-3xl flex-wrap items-center justify-between gap-4 px-5 pb-8 pr-20 text-xs text-muted sm:px-8 sm:pr-24">
        <p>© 2026 Alex Doe</p>
        <p>
          {ui.footerLocation} · <LocalTime />
        </p>
        {/* the hubs have no contact block of their own, so the address is
            one click away here, as it was in the old top bar */}
        <span className="flex flex-wrap gap-x-5 gap-y-2">
          <a href={`mailto:${email}`} className="transition-colors duration-200 hover:text-foreground">
            {email}
          </a>
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
  );
}
