import Link from "next/link";
import { FOOTER_PAGES, otherVersions, pathFor } from "@/lib/alternates";
import { email, whatsappNumber } from "@/lib/data";
import { HOME_COPY } from "@/lib/home";
import { LANG_META, labelStyle, type Lang } from "@/lib/i18n";
import { INDUSTRY_CONFIGS } from "@/lib/industries-index";
import { NAV_COPY } from "@/lib/nav";
import { LocalTime } from "./local-time";
import { FooterOrnament } from "./ornament";
import { joint, typeset, typesetHeading } from "./typeset";
import { WhatsAppIcon } from "./whatsapp-button";

/**
 * `waMessage` is the WhatsApp button's pre-filled text: a page that sells one
 * service passes its own, so the chat opens on that subject. It defaults to
 * the home page's general one.
 */
export function Contact({ lang, waMessage }: { lang: Lang; waMessage?: string }) {
  const copy = HOME_COPY[lang].contact;
  const waHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(waMessage ?? HOME_COPY[lang].hero.waMessage)}`;
  const links: { label: string; href: string; lang?: string; target?: Lang }[] = [
    ...FOOTER_PAGES.map((page) => ({ label: copy.links[page], href: pathFor(page, lang) })),
    // the home page in each other language — not prefetched, as in the nav's language picker
    ...otherVersions("home", lang).map((version) => ({
      label: LANG_META[version.lang].label,
      href: version.path,
      lang: LANG_META[version.lang].htmlLang,
      target: version.lang,
    })),
  ];

  return (
    <footer id="contact" className="relative scroll-mt-16 overflow-hidden border-t border-line">
      <FooterOrnament />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center px-5 py-24 text-center sm:px-8 sm:py-36">
        <p className="reveal text-xs font-medium uppercase tracking-[0.14em] text-muted">
          {typeset(copy.kicker, lang)}
        </p>
        <h2 className="reveal mt-6 font-sans text-[clamp(2.8rem,8vw,6.5rem)] font-light leading-[0.98] tracking-[-0.02em] text-foreground">
          {copy.titleMain ? (
            <>
              {typesetHeading(copy.titleMain, lang, "sm")}
              {joint(copy.titleMain, lang)}
            </>
          ) : null}
          <span className="font-serif italic">{typesetHeading(copy.titleAccent, lang, "sm")}</span>
        </h2>
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          className="reveal mt-10 inline-flex items-center gap-2.5 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-white transition-[scale,opacity] duration-300 hover:opacity-90 active:scale-[0.97]"
        >
          <WhatsAppIcon className="size-4" />
          {NAV_COPY[lang].whatsapp}
        </a>
        <a
          href={`mailto:${email}`}
          className="reveal mt-8 text-lg text-foreground underline decoration-line underline-offset-4 transition-colors duration-200 hover:text-accent hover:decoration-accent sm:text-2xl"
        >
          {email}
        </a>
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-center gap-x-6 gap-y-2 px-5 pb-6 text-xs text-muted sm:px-8">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            prefetch={link.lang ? false : undefined}
            hrefLang={link.lang}
            lang={link.lang}
            style={link.target ? labelStyle(link.target, lang) : undefined}
            className="transition-colors duration-200 hover:text-foreground"
          >
            {typeset(link.label, lang)}
          </Link>
        ))}
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-center gap-x-5 gap-y-2 px-5 pb-6 text-xs text-muted/80 sm:px-8">
        <span>{typeset(copy.websitesFor, lang)}</span>
        {INDUSTRY_CONFIGS[lang].map((config) => (
          <Link
            key={config.slug}
            href={config.slug}
            className="transition-colors duration-200 hover:text-foreground"
          >
            {config.audience ? typeset(config.audience, lang) : null}
          </Link>
        ))}
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-5 pb-8 pr-20 text-xs text-muted sm:px-8 sm:pr-24">
        <p>© 2026 Alex Doe</p>
        <p>
          {typesetHeading(copy.location, lang)}
          {" · "}
          <LocalTime />
        </p>
        <a
          href="https://instagram.com/yourhandle"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors duration-200 hover:text-foreground"
        >
          Instagram&nbsp;↗︎
        </a>
      </div>
    </footer>
  );
}
