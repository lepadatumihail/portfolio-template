import type { ReactNode } from "react";

/** Shared presentation for the hero and selected-work previews. */
export function BrowserFrame({
  children,
  address,
  className = "",
}: {
  children: ReactNode;
  address?: string;
  className?: string;
}) {
  return (
    <div className={`overflow-hidden rounded-[0.875rem] bg-surface ring-1 ring-foreground/[0.07] ${className}`}>
      <div aria-hidden className="flex h-6 items-center border-b border-line px-2.5 sm:h-7 sm:px-3">
        <span className="flex w-8 shrink-0 gap-1">
          {[0, 1, 2].map((dot) => <span key={dot} className="size-1.5 rounded-full bg-line sm:size-[7px]" />)}
        </span>
        {address ? (
          <span className="mx-auto truncate rounded-full bg-background px-2.5 py-[3px] text-[9px] leading-none text-muted sm:text-[10px]">
            {address}
          </span>
        ) : (
          <span className="mx-auto h-3 w-1/4 rounded-full bg-background sm:h-[15px]" />
        )}
        <span className="w-8 shrink-0" />
      </div>
      {children}
    </div>
  );
}
