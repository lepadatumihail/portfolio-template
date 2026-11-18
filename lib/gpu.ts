// Module-cached probe: true when the browser gives us a hardware-accelerated
// WebGL2 context. Software rasterizers (SwiftShader in headless/VM Chrome,
// llvmpipe) refuse the context when failIfMajorPerformanceCaveat is set —
// exactly the environments where a full-screen fragment shader would burn
// seconds of main-thread time per frame. Callers show static CSS instead.
let cached: boolean | null = null;

export function hasAcceleratedWebGL(): boolean {
  if (typeof window === "undefined") return false;
  if (cached !== null) return cached;
  try {
    const gl = document
      .createElement("canvas")
      .getContext("webgl2", { failIfMajorPerformanceCaveat: true });
    cached = gl !== null;
    gl?.getExtension("WEBGL_lose_context")?.loseContext();
  } catch {
    cached = false;
  }
  return cached;
}
