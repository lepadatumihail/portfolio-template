import { HeroShader } from "./hero-shader";
import { HeroWashes } from "./ornament";

/**
 * Full-site background: a fixed viewport-sized layer behind every section,
 * so the mesh flows under the whole page while you scroll. Static washes
 * cover SSR, no-JS and software-GL; the shader fades in on top when
 * hardware WebGL is available.
 */
export function SiteBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <HeroWashes />
      <HeroShader />
    </div>
  );
}
