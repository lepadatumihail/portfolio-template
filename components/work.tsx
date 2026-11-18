import { HOME_COPY, homeProjects } from "@/lib/home";
import type { Lang } from "@/lib/i18n";
import { SectionHeading } from "./section-heading";
import { WorkMarquee } from "./work-marquee";

export function Work({ lang }: { lang: Lang }) {
  const { heading } = HOME_COPY[lang].work;

  return (
    <section id="work" className="w-full scroll-mt-16 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <SectionHeading lang={lang} index="02" title={heading.title} accent={heading.accent} />
      </div>

      <WorkMarquee projects={homeProjects(lang)} lang={lang} />
    </section>
  );
}
