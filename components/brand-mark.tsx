/** Navy, the site's accent — same value as --color-accent in globals.css. */
export const MARK_NAVY = "#1e3a5f";
/** The full stop's sunset on paper. */
export const MARK_SUNSET = "#d4693f";
/** A lighter sunset for the full stop on navy, where #d4693f goes muddy. */
export const MARK_SUNSET_ON_NAVY = "#e8804f";

/**
 * A placeholder mark: a ring, then a full stop in sunset — swap in your own
 * logo here. Drawn on a 48-unit grid, like the site's line icons, with the
 * viewBox cropped to the ink so the mark sizes like a word next to text.
 *
 * Colours are plain attributes rather than classes so next/og can draw it too
 * (app/apple-icon.tsx and the OG cards). public/logo.svg is the same mark on a
 * navy tile; public/icon.svg is a heavier cut of it that holds up at 16px.
 */
export function BrandMark({
  height,
  ink = MARK_NAVY,
  dot = MARK_SUNSET,
  className,
}: {
  height: number;
  ink?: string;
  dot?: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="2.9 9.9 41.8 28.2"
      width={Math.round((height * 41.8) / 28.2)}
      height={height}
      className={className}
      aria-hidden
    >
      <circle cx="19" cy="24" r="11.9" fill="none" stroke={ink} strokeWidth="4.2" />
      <circle cx="42.4" cy="35.4" r="2.3" fill={dot} />
    </svg>
  );
}
