/**
 * Route table + Accept parsing for markdown content negotiation.
 *
 * Kept free of imports on purpose: `proxy.ts` pulls this in and runs on every
 * page request, so it must stay tiny.
 */

/**
 * Site paths that have a markdown representation. Russian paths are Latin
 * transliterations on purpose: a Cyrillic path reaches the proxy
 * percent-encoded and would never match these literals.
 */
export const MARKDOWN_ROUTES = [
  "/",
  "/es",
  "/ru",
  "/web-design-marbella",
  "/app-development-marbella",
  "/ai-automation-marbella",
  "/chatbots-marbella",
  "/es/chatbots-marbella",
  "/ru/chat-boty-marbella",
  "/es/diseno-web-marbella",
  "/es/desarrollo-apps-marbella",
  "/es/automatizacion-ia-marbella",
  "/seo-marbella",
  "/es/seo-marbella",
  "/ru/sozdanie-saytov-marbella",
  "/ru/razrabotka-prilozheniy-marbella",
  "/ru/avtomatizatsiya-ii-marbella",
  "/ru/seo-marbella",
  // industry pages — keep in sync with the slugs in lib/industries-content/
  // and lib/ru/industries/
  "/web-design",
  "/web-design/real-estate",
  "/web-design/dental-clinics",
  "/web-design/aesthetic-clinics",
  "/web-design/construction-companies",
  "/web-design/car-rental",
  "/web-design/car-wash-detailing",
  "/web-design/restaurants",
  "/web-design/hotels-holiday-rentals",
  "/web-design/law-firms",
  "/es/diseno-web",
  "/es/diseno-web/inmobiliarias",
  "/es/diseno-web/clinicas-dentales",
  "/es/diseno-web/clinicas-esteticas",
  "/es/diseno-web/empresas-de-reformas",
  "/es/diseno-web/alquiler-de-coches",
  "/es/diseno-web/lavaderos-de-coches",
  "/es/diseno-web/restaurantes",
  "/es/diseno-web/hoteles-apartamentos-turisticos",
  "/es/diseno-web/abogados",
  "/ru/sozdanie-saytov",
  "/ru/sozdanie-saytov/nedvizhimost",
  "/ru/sozdanie-saytov/stomatologii",
  "/ru/sozdanie-saytov/esteticheskie-kliniki",
  "/ru/sozdanie-saytov/remont-i-stroitelstvo",
  "/ru/sozdanie-saytov/prokat-avtomobiley",
  "/ru/sozdanie-saytov/avtomoyki-i-deteyling",
  "/ru/sozdanie-saytov/restorany",
  "/ru/sozdanie-saytov/oteli-i-apartamenty",
  "/ru/sozdanie-saytov/yuridicheskie-firmy",
  // case studies — keep in sync with lib/studies-index.ts. Literals rather
  // than an import: this module is pulled into the proxy, which runs on every
  // request and must not drag the content modules in with it.
  "/case-studies",
  "/case-studies/marbella-website-speed-report",
  "/case-studies/acme-clinic-marbella-seo",
  "/case-studies/harbor-homes-multilingual-seo",
  "/es/casos",
  "/es/casos/informe-velocidad-webs-marbella",
  "/es/casos/seo-clinica-acme-marbella",
  "/es/casos/harbor-homes-seo-multiidioma",
  "/ru/keysy",
  "/ru/keysy/skorost-saytov-marbella",
  "/ru/keysy/seo-kliniki-acme-marbella",
  "/ru/keysy/harbor-homes-mnogoyazychnoe-seo",
  // reviews — keep in sync with REVIEWS_PATH in lib/reviews.ts
  "/reviews",
  "/es/opiniones",
  "/ru/otzyvy",
] as const;

export type MarkdownRoute = (typeof MARKDOWN_ROUTES)[number];

/** Internal route handler that renders the markdown (see app/md/[[...slug]]). */
export const MARKDOWN_ROUTE_PREFIX = "/md";

/** Set by the proxy when markdown was negotiated at the page's own URL. */
export const NEGOTIATED_HEADER = "x-markdown-negotiated";

/** Drop a trailing slash so "/es/foo/" and "/es/foo" resolve the same. */
export function normalizePathname(pathname: string): string {
  const trimmed = pathname.replace(/\/+$/, "");
  return trimmed === "" ? "/" : trimmed;
}

export function isMarkdownRoute(pathname: string): pathname is MarkdownRoute {
  return (MARKDOWN_ROUTES as readonly string[]).includes(normalizePathname(pathname));
}

/** "/web-design-marbella" -> "/md/web-design-marbella", "/" -> "/md" */
export function markdownRouteFor(pathname: string): string {
  const path = normalizePathname(pathname);
  return path === "/" ? MARKDOWN_ROUTE_PREFIX : `${MARKDOWN_ROUTE_PREFIX}${path}`;
}

/**
 * The ".md" alias form: "/web-design-marbella.md" -> "/web-design-marbella",
 * "/index.md" -> "/". Returns null when the path has no ".md" suffix.
 */
export function pathFromMarkdownAlias(pathname: string): string | null {
  if (!pathname.endsWith(".md")) return null;
  const base = pathname.slice(0, -".md".length);
  return base === "" || base === "/index" ? "/" : base;
}

/**
 * True when the client explicitly asked for markdown and didn't rank HTML
 * higher. A wildcard Accept (curl, most crawlers) deliberately does not
 * match — HTML stays the default for anything that didn't ask for markdown
 * by name.
 */
export function prefersMarkdown(accept: string | null | undefined): boolean {
  if (!accept) return false;

  let markdownQ = -1;
  let htmlQ = -1;

  for (const range of accept.split(",")) {
    const [rawType, ...params] = range.split(";");
    const type = rawType.trim().toLowerCase();
    if (type !== "text/markdown" && type !== "text/html") continue;

    let q = 1;
    for (const param of params) {
      const [key, value] = param.split("=");
      if (key?.trim().toLowerCase() !== "q") continue;
      const parsed = Number.parseFloat(value ?? "");
      if (!Number.isNaN(parsed)) q = parsed;
    }

    if (type === "text/markdown") markdownQ = Math.max(markdownQ, q);
    else htmlQ = Math.max(htmlQ, q);
  }

  return markdownQ > 0 && markdownQ >= htmlQ;
}
