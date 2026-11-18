import { HOME_COPY } from "@/lib/home";
import type { Lang } from "@/lib/i18n";
import { LandingFaq } from "./landing/landing-faq";
import { SectionHeading } from "./section-heading";

/**
 * The home page's questions, in the accordion the service pages use: collapsed
 * answers stay in the server HTML, so crawlers and AI assistants read all of
 * them. The same items go out as a FAQPage from components/home-page.tsx.
 */
export function Faq({ lang, index = "09" }: { lang: Lang; index?: string }) {
  const copy = HOME_COPY[lang].faq;

  return (
    <section id="faq" className="mx-auto w-full max-w-6xl scroll-mt-16 px-5 py-20 sm:px-8 sm:py-28">
      <SectionHeading lang={lang} index={index} title={copy.heading.title} accent={copy.heading.accent} />
      <div className="reveal">
        <LandingFaq items={copy.items} lang={lang} />
      </div>
    </section>
  );
}
