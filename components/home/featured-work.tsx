import { featuredProjects, HOME_COPY } from "@/lib/home";
import type { Lang } from "@/lib/i18n";
import { WorkSlides } from "./work-slides";

/**
 * Selected work as a slideshow: the two local businesses first, then the
 * range. The words come from lib/home/{en,es,ru}.ts; the slides, arrows and
 * scrolling are components/home/work-slides.tsx.
 */
export function FeaturedWork({ lang }: { lang: Lang }) {
  const { work, compact } = HOME_COPY[lang];
  const slides = featuredProjects(lang).map((project) => ({
    name: project.name,
    url: project.url,
    image: project.image,
    alt: project.alt,
    description: project.description,
    label: project.linkLabel ?? new URL(project.url).hostname.replace(/^www\./, ""),
  }));

  return (
    <section id="work" className="mx-auto w-full max-w-6xl scroll-mt-16 px-5 sm:px-8">
      <WorkSlides lang={lang} heading={work.heading} slides={slides} labels={compact.work} />
    </section>
  );
}
