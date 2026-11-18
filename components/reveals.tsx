"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Plays every .reveal once, the first time it scrolls in (see .reveal in
 * globals.css). The server HTML shows everything; after hydration this arms
 * only the elements still below the fold, so the first screen, crawlers and
 * no-JS visitors never see anything hidden and LCP is untouched. Elements that
 * enter together (a row of cards) are staggered in reading order.
 *
 * Nothing here reads layout during hydration: which elements sit below the
 * fold comes from an observer's first report, which the browser computes with
 * the frame. A forced layout in the hydration task cost the home page ~0.6 s
 * of Lighthouse's simulated Speed Index, which weighs late layouts.
 */
const STAGGER_MS = 70;
const MAX_STAGGER_STEPS = 4;

export function Reveals() {
  const pathname = usePathname();

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const candidates = document.querySelectorAll<HTMLElement>(".reveal:not([data-reveal])");
    if (!candidates.length) return;

    let live = true;
    const armed = new Set<HTMLElement>();

    const show = (el: HTMLElement, delay: number) => {
      el.style.setProperty("--reveal-delay", `${delay}ms`);
      el.dataset.reveal = "shown";
      armed.delete(el);
      reveal.unobserve(el);
    };

    // Plays an armed element once its top crosses a line 10% above the
    // viewport's bottom edge.
    const reveal = new IntersectionObserver(
      (entries) => {
        if (!live) return;
        const entering = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top || a.boundingClientRect.left - b.boundingClientRect.left);
        // A fast fling can skip an element between frames; settle anything now
        // above the viewport so scrolling back up doesn't replay it from the
        // top. All reads happen before the writes below.
        const passed = [...armed].filter(
          (el) => !entering.some((entry) => entry.target === el) && el.getBoundingClientRect().bottom < 0,
        );
        entering.forEach((entry, i) => show(entry.target as HTMLElement, Math.min(i, MAX_STAGGER_STEPS) * STAGGER_MS));
        passed.forEach((el) => show(el, 0));
      },
      { rootMargin: "0px 0px -10% 0px" },
    );

    // One report on where everything is, then this observer is done.
    const probe = new IntersectionObserver((entries) => {
      probe.disconnect();
      const viewport = entries[0].rootBounds?.height || window.innerHeight;
      // no viewport (a hidden or prerendering frame): leave everything visible
      if (!live || !viewport) return;
      // read once, before any write dirties the style
      const scrolled = window.scrollY;
      const lastScroll = document.documentElement.scrollHeight - viewport;
      for (const { target, isIntersecting, boundingClientRect } of entries) {
        const { top, height } = boundingClientRect;
        // in view, above it, not rendered, or unable to reach the trigger
        // line even at the end of the page: stays simply visible
        if (isIntersecting || top < viewport || !height || top + scrolled - lastScroll >= viewport * 0.88) continue;
        const el = target as HTMLElement;
        el.dataset.reveal = "armed";
        armed.add(el);
        reveal.observe(el);
      }
    });
    candidates.forEach((el) => probe.observe(el));

    return () => {
      live = false;
      probe.disconnect();
      reveal.disconnect();
      // Anything still waiting goes back to plain visible, so an element that
      // outlives this page (a layout's) is re-armed by the next scan, not stuck.
      for (const el of armed) delete el.dataset.reveal;
    };
  }, [pathname]);

  return null;
}
