/**
 * Quiet background layers for the paper theme. HeroWashes is the static
 * CSS underlay — pale blue radial washes that are always in the SSR HTML,
 * standing alone wherever the WebGL shader doesn't run (landing pages,
 * no-JS, software GL). FooterOrnament is a single centered wash.
 */

export function HeroWashes() {
  return (
    <>
      <div className="absolute -top-48 right-[-14%] size-[42rem] rounded-full bg-accent/[0.06] blur-3xl" />
      <div className="absolute right-[16%] top-[30%] size-[26rem] rounded-full bg-[#b7c9dd]/[0.22] blur-3xl" />
      <div className="absolute left-[-14%] top-[42%] size-[34rem] rounded-full bg-[#7f9cc0]/[0.08] blur-3xl" />
    </>
  );
}

export function FooterOrnament() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute left-1/2 top-1/2 size-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.05] blur-3xl" />
    </div>
  );
}
