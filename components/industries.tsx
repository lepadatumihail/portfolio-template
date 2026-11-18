import Link from "next/link";
import { HOME_COPY } from "@/lib/home";
import type { Lang } from "@/lib/i18n";
import { INDUSTRY_HUB_PATH, industryHubUi } from "@/lib/industries";
import { INDUSTRY_CONFIGS } from "@/lib/industries-index";
import { SectionHeading } from "./section-heading";
import { typeset } from "./typeset";

const EASE = "ease-[cubic-bezier(0.16,1,0.3,1)]";

/**
 * The nine sector pages, linked from the body of the home page and not only
 * from the footer: the home is where the site's signals collect, and the
 * sector pages face the weakest competition. The intro is the hub's own dek;
 * the links are the sector names in the page's language.
 */
export function Industries({ lang }: { lang: Lang }) {
  const copy = HOME_COPY[lang].industries;

  return (
    <section id="industries" className="mx-auto w-full max-w-6xl scroll-mt-16 px-5 py-20 sm:px-8 sm:py-28">
      <SectionHeading lang={lang} index="10" title={copy.heading.title} accent={copy.heading.accent} />

      <p className="max-w-2xl text-pretty text-sm leading-relaxed text-muted sm:text-base">
        {typeset(industryHubUi[lang].dek, lang)}
      </p>

      <ul className="reveal mt-10 grid gap-x-10 border-t border-line sm:grid-cols-2 lg:grid-cols-3">
        {INDUSTRY_CONFIGS[lang].map((config) => (
          <li key={config.slug} className="border-b border-line">
            <Link
              href={config.slug}
              className="group flex min-h-14 items-center justify-between gap-4 py-4 text-foreground transition-colors duration-200 hover:text-accent"
            >
              <span>{config.audience ? typeset(config.audience, lang) : null}</span>
              <span
                aria-hidden
                className={`shrink-0 text-muted transition-transform duration-300 ${EASE} motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5`}
              >
                {"↗︎"}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <Link
        href={INDUSTRY_HUB_PATH[lang]}
        className="mt-8 inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-accent"
      >
        {typeset(copy.all, lang)}
        <span aria-hidden>{"↗︎"}</span>
      </Link>
    </section>
  );
}
