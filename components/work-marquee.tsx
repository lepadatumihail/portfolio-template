"use client";

import { useRef } from "react";
import type { LocalizedProject } from "@/lib/home";
import type { Lang } from "@/lib/i18n";
import { BrowserFrame } from "./browser-frame";
import { useDriftRail } from "./drift-rail";
import { typeset, typesetWithTail } from "./typeset";

/**
 * Selected work as a full-width rail that never stops drifting. The motion —
 * the drift, the loop, the mouse drag and when it holds still — is
 * useDriftRail in components/drift-rail.ts; the markup renders and scrolls
 * fine with no JS at all.
 */
export function WorkMarquee({ projects, lang }: { projects: LocalizedProject[]; lang: Lang }) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useDriftRail(scrollerRef, projects.length);

  return (
    <div className="rail reveal relative">
      <div
        ref={scrollerRef}
        className="no-scrollbar flex cursor-grab gap-5 overflow-x-auto overscroll-x-contain pb-6 pt-1 [mask-image:linear-gradient(to_right,transparent,#000_var(--rail-fade),#000_calc(100%-var(--rail-fade)),transparent)] sm:gap-6"
        style={{ scrollBehavior: "auto" }}
      >
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} lang={lang} />
        ))}
        {projects.map((project) => (
          <ProjectCard key={`${project.name}-loop`} project={project} lang={lang} duplicate />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({
  project,
  lang,
  duplicate,
}: {
  project: LocalizedProject;
  lang: Lang;
  duplicate?: boolean;
}) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      // The second set is scenery: same pixels, no second stop for a screen
      // reader or the tab key.
      aria-hidden={duplicate || undefined}
      tabIndex={duplicate ? -1 : undefined}
      className="group block w-[17rem] shrink-0 sm:w-[22rem] lg:w-[25rem]"
    >
      <BrowserFrame address={project.linkLabel ?? new URL(project.url).hostname.replace(/^www\./, "")} className="shadow-[0_1px_2px_rgb(20_22_26/0.06),0_18px_40px_-14px_rgb(30_58_95/0.28)]">
        <div className="relative aspect-[16/10] overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.image}
            alt={project.alt}
            loading="lazy"
            draggable={false}
            className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
          />
        </div>
      </BrowserFrame>

      <div className="mt-4 flex items-baseline justify-between gap-3">
        <h3 className="font-sans text-base font-medium tracking-tight text-foreground">
          {typesetWithTail(
            project.name,
            lang,
            <span className="ml-1.5 inline-block text-muted transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent">
              {"↗︎"}
            </span>,
            { heading: "always" },
          )}
        </h3>
        <span className="shrink-0 text-[11px] text-muted/80">
          {project.linkLabel ?? new URL(project.url).hostname.replace("www.", "")}
        </span>
      </div>
      <p className="mt-1.5 text-pretty text-sm leading-relaxed text-muted">
        {typeset(project.description, lang)}
      </p>
    </a>
  );
}
