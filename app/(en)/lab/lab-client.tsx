"use client";

import { useEffect, useState } from "react";
import {
  DotGrid,
  GodRays,
  GrainGradient,
  MeshGradient,
  NeuroNoise,
  PulsingBorder,
  Voronoi,
  Warp,
} from "@paper-design/shaders-react";

/* atlas-graph palette */
const RED = "#ef4444";
const RED_DEEP = "#7f1d1d";
const INK = "#0b0b0d";

const fill = { position: "absolute" as const, inset: 0, width: "100%", height: "100%" };

type Treatment = {
  name: string;
  bestFor: string;
  cost: "cheap" | "medium" | "heavy";
  /** Rendered inside the card's upper panel (where a UI mockup would sit). */
  render: (speed: number) => React.ReactNode;
  /** Full-card treatments (borders/glows) render behind everything instead. */
  fullCard?: boolean;
};

const TREATMENTS: Treatment[] = [
  {
    name: "NeuroNoise",
    bestFor: "Networks, graphs, relationships — reads as connected nodes",
    cost: "medium",
    render: (speed) => (
      <NeuroNoise
        colorFront={RED}
        colorMid={RED_DEEP}
        colorBack={INK}
        brightness={0.9}
        contrast={1}
        speed={speed * 0.5}
        style={fill}
      />
    ),
  },
  {
    name: "Voronoi",
    bestFor: "Registries, segments, datasets — cellular and structured",
    cost: "medium",
    render: (speed) => (
      <Voronoi
        colors={[RED, RED_DEEP, "#450a0a"]}
        colorGap={INK}
        colorGlow={RED}
        stepsPerColor={2}
        distortion={0.3}
        gap={0.06}
        glow={0.5}
        speed={speed * 0.35}
        style={fill}
      />
    ),
  },
  {
    name: "GrainGradient",
    bestFor: "Safe default — ambient colour wash with film grain",
    cost: "medium",
    render: (speed) => (
      <GrainGradient
        colorBack={INK}
        colors={[RED, RED_DEEP, "#f97316"]}
        softness={0.8}
        intensity={0.45}
        noise={0.35}
        speed={speed * 0.6}
        style={fill}
      />
    ),
  },
  {
    name: "GodRays",
    bestFor: "A focal point — light beams from behind an icon or logo",
    cost: "medium",
    render: (speed) => (
      <GodRays
        colorBack={INK}
        colorBloom={RED}
        colors={[RED, "#fb923c", RED_DEEP]}
        spotty={0.25}
        midSize={0.6}
        midIntensity={0.35}
        density={0.55}
        intensity={0.5}
        bloom={0.5}
        speed={speed * 0.5}
        style={fill}
      />
    ),
  },
  {
    name: "Warp",
    bestFor: "Premium/marbled feel — closest cousin to your hero mesh",
    cost: "heavy",
    render: (speed) => (
      <Warp
        colors={[RED, INK, RED_DEEP, "#1c1917"]}
        proportion={0.4}
        softness={1}
        distortion={0.28}
        swirl={0.75}
        swirlIterations={8}
        shapeScale={0.15}
        speed={speed * 0.5}
        style={fill}
      />
    ),
  },
  {
    name: "MeshGradient",
    bestFor: "What example.com uses — boldest, best as a hero not a card",
    cost: "heavy",
    render: (speed) => (
      <MeshGradient
        colors={[RED, "#1a0a0a", "#f97316", INK, RED_DEEP, "#292524"]}
        distortion={1}
        swirl={0.8}
        grainMixer={0.12}
        speed={speed * 0.6}
        style={fill}
      />
    ),
  },
  {
    name: "DotGrid",
    bestFor: "Data texture — static, near-zero cost, never distracts",
    cost: "cheap",
    render: () => (
      <DotGrid
        colorBack={INK}
        colorFill={RED}
        colorStroke={RED_DEEP}
        size={1.6}
        gapX={22}
        gapY={22}
        strokeWidth={0}
        sizeRange={0.5}
        opacityRange={0.7}
        style={fill}
      />
    ),
  },
  {
    name: "PulsingBorder",
    bestFor: "Highlighting ONE card — glowing animated edge, content stays clean",
    cost: "medium",
    fullCard: true,
    render: (speed) => (
      <PulsingBorder
        colorBack="#00000000"
        colors={[RED, "#fb923c", RED_DEEP]}
        aspectRatio="auto"
        fit="cover"
        roundness={0.06}
        thickness={0.02}
        margin={0.005}
        softness={0.4}
        intensity={0.5}
        bloom={0.7}
        spots={4}
        spotSize={0.35}
        pulse={0.12}
        smoke={0.35}
        smokeSize={0.5}
        speed={speed * 0.8}
        style={fill}
      />
    ),
  },
];

const COST_LABEL = {
  cheap: "static · cheapest",
  medium: "animated",
  heavy: "animated · heaviest",
} as const;

function ShaderCard({ treatment, mounted }: { treatment: Treatment; mounted: boolean }) {
  const [hovered, setHovered] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  const speed = reduced ? 0 : 1;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative overflow-hidden rounded-2xl bg-[#0b0b0d] shadow-[0_0_0_1px_rgba(255,255,255,0.08)]"
    >
      {/* full-card treatments sit behind everything */}
      {mounted && treatment.fullCard ? (
        <div className="pointer-events-none absolute inset-0">{treatment.render(speed)}</div>
      ) : null}

      {/* upper panel — stands in for the UI mockup area */}
      <div className="relative m-3 mb-0 h-44 overflow-hidden rounded-xl bg-[#0b0b0d]">
        {mounted && !treatment.fullCard ? (
          <div
            className="absolute inset-0 transition-opacity duration-500 ease-out"
            style={{ opacity: hovered ? 0.95 : 0.4 }}
          >
            {treatment.render(speed)}
          </div>
        ) : null}

        {/* a stand-in mockup chip, so you can judge legibility over the shader */}
        <div className="absolute inset-0 grid place-items-center">
          <div className="rounded-lg bg-black/45 px-4 py-2.5 shadow-[0_0_0_1px_rgba(255,255,255,0.1)] backdrop-blur-sm">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/70">
              your ui mockup here
            </p>
          </div>
        </div>
      </div>

      {/* content — mirrors the atlas-graph card layout */}
      <div className="relative p-6">
        <div className="flex items-center gap-3">
          <span
            className="grid size-9 place-items-center rounded-lg"
            style={{ backgroundColor: "rgba(239,68,68,0.12)" }}
          >
            <span className="size-3.5 rounded-sm" style={{ backgroundColor: RED }} />
          </span>
          <h3 className="font-sans text-xl text-white">{treatment.name}</h3>
        </div>

        <p className="mt-4 min-h-[3.5rem] text-pretty text-sm leading-relaxed text-white/50">
          {treatment.bestFor}
        </p>

        <div className="mt-5 flex items-center justify-between">
          <span className="text-sm transition-transform duration-300 group-hover:translate-x-0.5" style={{ color: RED }}>
            Explore {"→"}
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/30">
            {COST_LABEL[treatment.cost]}
          </span>
        </div>
      </div>
    </div>
  );
}

export function LabPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <main className="min-h-svh bg-[#050505] px-5 py-16 font-sans sm:px-8 sm:py-24">
      <div className="mx-auto w-full max-w-6xl">
        <p className="font-mono text-[11px] uppercase tracking-[0.25em]" style={{ color: RED }}>
          shader lab
        </p>
        <h1 className="mt-5 text-balance text-4xl font-light tracking-tight text-white sm:text-5xl">
          Card treatments, in{" "}
          <span className="font-serif italic">atlas-graph red</span>
        </h1>
        <p className="mt-4 max-w-xl text-pretty text-sm leading-relaxed text-white/50">
          Each card runs a different shader from the same library. Hover to see
          it come alive — at rest they sit at 40% so a UI mockup on top stays
          readable. Same API for all of them, so switching is a one-word change.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TREATMENTS.map((t) => (
            <ShaderCard key={t.name} treatment={t} mounted={mounted} />
          ))}
        </div>

        <p className="mt-14 max-w-xl text-pretty text-xs leading-relaxed text-white/35">
          Note: every animated card is its own WebGL context and browsers cap
          those around 8–16 per page. On a real page, shader two or three cards
          — or use DotGrid (static) for the rest.
        </p>
      </div>
    </main>
  );
}
