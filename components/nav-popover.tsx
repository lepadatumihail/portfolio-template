"use client";

import { useRef, type ReactNode } from "react";

/**
 * A nav panel built on the Popover API: a popovertarget button opens it, and
 * the browser closes it on Esc or a tap outside. The one thing HTML can't do
 * is close it when one of its links is followed — a link to a section on the
 * same page would scroll there with the panel still open over it — so that is
 * all this does.
 */
export function NavPopover({
  id,
  label,
  className,
  children,
}: {
  id: string;
  /** the panel's accessible name */
  label: string;
  className: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={ref}
      id={id}
      popover="auto"
      role="group"
      aria-label={label}
      className={className}
      onClick={(event) => {
        if (event.target instanceof Element && event.target.closest("a")) ref.current?.hidePopover();
      }}
    >
      {children}
    </div>
  );
}
