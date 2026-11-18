import { useEffect, type RefObject } from "react";

/**
 * The motion behind the full-width rails: the home page's selected work
 * (components/work-marquee.tsx) and the Google reviews on the service pages
 * (components/review-rail.tsx). One native scroll container holds its list
 * twice and is nudged along by rAF, wrapped at the loop point so it never
 * reaches an end. Everything the browser already does well — touch swipe,
 * trackpad, keyboard focus scrolling — is left alone; the loop only adds the
 * drift and a mouse drag-to-scroll. It holds still only while someone is
 * moving it themselves (and briefly after), while a keyboard user is inside
 * it, and under reduced motion.
 *
 * The markup renders and scrolls fine with no JS at all — the drift, and the
 * starting position below, are the only things hydration adds.
 */

/** drift speed, px per second — slow enough to read a card as it passes */
const SPEED = 34;
/** how long the rail stays still after a manual scroll or swipe */
const RESUME_DELAY = 1400;
/** scrollLeft drift (px) beyond which we assume the user, not us, moved it */
const USER_SCROLL_EPSILON = 1.5;
/** pointer travel (px) past which a drag shouldn't end in following the link */
const DRAG_SLOP = 5;

/** `count` is how many items one set holds: the second set starts at that index. */
export function useDriftRail(scrollerRef: RefObject<HTMLDivElement | null>, count: number) {
  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    // Our own idea of scrollLeft, kept as a float: a 0.57px-per-frame nudge
    // would be lost to rounding if we read the DOM value back every frame.
    let position = scroller.scrollLeft;
    let loopWidth = 0;
    let focused = false;
    let dragging = false;
    let visible = true;
    let resumeAt = 0;
    let frame = 0;
    let lastTime = 0;

    /** distance from a card to its copy in the second set — the exact period */
    const measure = () => {
      const items = scroller.children;
      const first = items[0] as HTMLElement | undefined;
      const clone = items[count] as HTMLElement | undefined;
      loopWidth = first && clone ? clone.offsetLeft - first.offsetLeft : 0;
    };

    const tick = (time: number) => {
      frame = requestAnimationFrame(tick);
      const delta = lastTime ? Math.min((time - lastTime) / 1000, 0.05) : 0;
      lastTime = time;

      if (!loopWidth) return;

      // The user (or a focus jump) moved the rail out from under us.
      if (Math.abs(scroller.scrollLeft - position) > USER_SCROLL_EPSILON) {
        position = scroller.scrollLeft;
        if (!dragging) resumeAt = time + RESUME_DELAY;
      }

      const running =
        !focused &&
        !dragging &&
        visible &&
        time >= resumeAt &&
        !reduceMotion.matches &&
        !document.hidden;

      if (running) position += SPEED * delta;

      // Wrap in both directions so scrolling back is endless too.
      if (position >= loopWidth) position -= loopWidth;
      else if (position < 0) position += loopWidth;

      if (running || scroller.scrollLeft !== position) scroller.scrollLeft = position;
    };

    measure();
    // Start one loop in, with the first item under the section heading and
    // the end of the list already filling the space to its left — so the rail
    // reads edge to edge from its first frame. The rail is almost always below
    // the fold at hydration, so the jump from the server's position goes unseen.
    const heading = scroller.closest("section")?.querySelector("h2");
    if (heading && loopWidth) {
      const gutter = heading.getBoundingClientRect().left - scroller.getBoundingClientRect().left;
      position = loopWidth - Math.max(0, gutter);
      scroller.scrollLeft = position;
    }
    frame = requestAnimationFrame(tick);

    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(scroller);

    // Don't animate a rail nobody can see.
    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
      },
      { rootMargin: "200px" },
    );
    intersectionObserver.observe(scroller);

    // Only keyboard focus holds it: a clicked card keeps focus after its tab
    // opens, which would otherwise leave the rail stopped on return.
    const onFocusIn = (event: FocusEvent) => {
      focused = (event.target as HTMLElement).matches(":focus-visible");
    };
    const onFocusOut = () => {
      focused = false;
    };

    // Mouse drag-to-scroll. Touch is left to the browser — native swipe keeps
    // its momentum and its vertical pass-through, both of which we'd break.
    //
    // The move/up handlers live on window rather than on a captured pointer:
    // setPointerCapture retargets the compatibility mouse events too, so the
    // browser would compute every click's target as this container and the
    // card links would never fire.
    let dragStartX = 0;
    let dragStartScroll = 0;
    let dragDistance = 0;

    const onPointerDown = (event: PointerEvent) => {
      if (event.pointerType !== "mouse" || event.button !== 0) return;
      dragging = true;
      dragStartX = event.clientX;
      dragStartScroll = scroller.scrollLeft;
      dragDistance = 0;
      scroller.classList.add("cursor-grabbing", "select-none");
    };

    const onPointerMove = (event: PointerEvent) => {
      if (!dragging) return;
      const travelled = event.clientX - dragStartX;
      dragDistance = Math.max(dragDistance, Math.abs(travelled));
      position = dragStartScroll - travelled;
      if (loopWidth) {
        if (position >= loopWidth) position -= loopWidth;
        else if (position < 0) position += loopWidth;
        dragStartScroll = position + travelled;
      }
      scroller.scrollLeft = position;
    };

    // Also the escape hatch for a drag that ends off-window, where no
    // pointerup ever arrives.
    const onPointerUp = () => {
      if (!dragging) return;
      dragging = false;
      resumeAt = performance.now() + RESUME_DELAY;
      scroller.classList.remove("cursor-grabbing", "select-none");
    };

    // Native image/link dragging would hijack the grab.
    const preventDefault = (event: Event) => event.preventDefault();

    // A drag that ends on a card shouldn't open it.
    const onClickCapture = (event: MouseEvent) => {
      if (dragDistance > DRAG_SLOP) {
        event.preventDefault();
        event.stopPropagation();
        dragDistance = 0;
      }
    };

    scroller.addEventListener("focusin", onFocusIn);
    scroller.addEventListener("focusout", onFocusOut);
    scroller.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("pointercancel", onPointerUp);
    window.addEventListener("blur", onPointerUp);
    scroller.addEventListener("click", onClickCapture, true);
    scroller.addEventListener("dragstart", preventDefault);

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      scroller.removeEventListener("focusin", onFocusIn);
      scroller.removeEventListener("focusout", onFocusOut);
      scroller.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointercancel", onPointerUp);
      window.removeEventListener("blur", onPointerUp);
      scroller.removeEventListener("click", onClickCapture, true);
      scroller.removeEventListener("dragstart", preventDefault);
    };
  }, [scrollerRef, count]);
}
