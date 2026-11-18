"use client";

import { useEffect, useState } from "react";
import { MeshGradient } from "@paper-design/shaders-react";
import { hasAcceleratedWebGL } from "@/lib/gpu";

/**
 * Light-mode site shader: a slow blue mesh flowing over the paper
 * background — atmosphere, not spectacle. Lives in the fixed SiteBackground
 * layer, so it sits behind the entire page while scrolling. Every color
 * stays within a few steps of the page palette so ink text is readable
 * anywhere on top; a paper veil on the left keeps the text column calm.
 * Renders only with hardware WebGL (static washes underneath cover SSR,
 * no-JS and software-GL environments), speed 0 under reduced motion.
 */
export function HeroShader() {
  const [show, setShow] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setShow(hasAcceleratedWebGL());
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  if (!show) return null;

  return (
    <div className="fade-in absolute inset-0">
      <MeshGradient
        colors={[
          "#fbfbf9",
          "#d6e2f0",
          "#f6f4ef",
          "#aac4e0",
          "#e9eff6",
          "#8fadcc",
        ]}
        distortion={0.9}
        swirl={0.7}
        grainMixer={0}
        speed={reduced ? 0 : 0.4}
        // soft gradient: capping resolution is invisible but halves+ GPU cost
        minPixelRatio={1}
        maxPixelCount={1920 * 1080}
        style={{ width: "100%", height: "100%" }}
      />
      {/* paper veil: lighter on the right so the mesh shows, calmer where text sits */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(251,251,249,0.7)_0%,rgba(251,251,249,0.25)_45%,rgba(251,251,249,0)_80%)]" />
    </div>
  );
}
