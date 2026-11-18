import type { NextConfig } from "next";

/**
 * RFC 8288 Link relations, served on every page so an agent that fetches the URL
 * without parsing the HTML still finds the machine-readable summary of the site.
 * Only IANA-registered relation types are used:
 *   describedby — "a resource providing information about the link's context" (POWDER)
 *   api-catalog — the RFC 9727 catalog of this site's APIs. Serving it here also
 *                 satisfies RFC 9727 §2, which requires a HEAD request to
 *                 /.well-known/api-catalog to answer with this relation.
 *   me          — profiles of the site and its author; mirrors the `sameAs` lists
 *                 in the JSON-LD (lib/site-schema.ts): Instagram for the business,
 *                 X and GitHub for Alex
 * The llms.txt and api-catalog references are relative, so they resolve correctly
 * on localhost and Vercel preview deployments as well as production.
 */
const AGENT_LINK_HEADER = [
  '</llms.txt>; rel="describedby"; type="text/plain"; title="llms.txt: site summary for agents"',
  '</.well-known/api-catalog>; rel="api-catalog"; type="application/linkset+json"; title="API catalog (RFC 9727)"',
  '<https://www.instagram.com/yourhandle/>; rel="me"',
  '<https://x.com/yourhandle>; rel="me"',
  '<https://github.com/your-username>; rel="me"',
].join(", ");

const linkHeader = [{ key: "Link", value: AGENT_LINK_HEADER }];

/**
 * The English pages live in the app/(en) route group, and Next gives every
 * metadata route inside a route group a hash of its folder as a suffix: the
 * card of /web-design-marbella is served from
 * /web-design-marbella/opengraph-image-1046iv, and the page's og:image says so.
 * Previews shared before the move point at the plain address, so it keeps
 * answering. The hash is Next's (djb2 of the folder path, base 36, six
 * characters — see next/dist/lib/metadata/get-metadata-route.js); if an upgrade
 * changes it, these addresses 404 rather than serve the wrong card.
 */
function groupSuffix(folder: string): string {
  let hash = 5381;
  for (let i = 0; i < folder.length; i++) {
    hash = ((hash << 5) + hash + folder.charCodeAt(i)) & 0xffffffff;
  }
  return (hash >>> 0).toString(36).slice(0, 6);
}

// [public path of the page, its folder under app/, what follows the card's name]
const ENGLISH_CARDS: [string, string, string][] = [
  ["/web-design-marbella", "/(en)/web-design-marbella", ""],
  ["/app-development-marbella", "/(en)/app-development-marbella", ""],
  ["/ai-automation-marbella", "/(en)/ai-automation-marbella", ""],
  ["/seo-marbella", "/(en)/seo-marbella", ""],
  ["/web-design", "/(en)/web-design", ""],
  ["/web-design/:industry", "/(en)/web-design/[industry]", "/:id"],
  ["/case-studies", "/(en)/case-studies", ""],
  ["/case-studies/:slug", "/(en)/case-studies/[slug]", ""],
  ["/reviews", "/(en)/reviews", ""],
];

const nextConfig: NextConfig = {
  async rewrites() {
    return ENGLISH_CARDS.map(([path, folder, rest]) => ({
      source: `${path}/opengraph-image${rest}`,
      destination: `${path}/opengraph-image-${groupSuffix(folder)}${rest}`,
    }));
  },
  experimental: {
    // app/global-not-found.tsx: with one root layout per language there is no
    // single layout left to render the 404 for an unmatched URL in
    globalNotFound: true,
  },
  async headers() {
    return [
      // Homepage, matched on its own so it never depends on how the pattern
      // below treats an empty path segment.
      { source: "/", headers: linkHeader },
      // Every other page. Build assets under /_next/ (chunks, fonts, optimized
      // images) are excluded — nothing there is an entry point for an agent.
      { source: "/:path((?!_next/).*)", headers: linkHeader },
      // Each language has its own root layout and <html lang>; the header
      // repeats it at the HTTP level, which is the signal Bing reads. The
      // home pages' markdown aliases (/es.md, /ru.md) sit outside the folder.
      { source: "/es/:path*", headers: [{ key: "Content-Language", value: "es" }] },
      { source: "/es.md", headers: [{ key: "Content-Language", value: "es" }] },
      { source: "/ru/:path*", headers: [{ key: "Content-Language", value: "ru" }] },
      { source: "/ru.md", headers: [{ key: "Content-Language", value: "ru" }] },
      // Agent Skills discovery (RFC v0.2.0) is a public, read-only document
      // set: the spec says to send CORS headers so browser-based agents can
      // fetch it cross-origin. Content types are already correct — Next serves
      // .json as application/json and .md as text/markdown from /public.
      {
        source: "/.well-known/agent-skills/:path*",
        headers: [{ key: "Access-Control-Allow-Origin", value: "*" }],
      },
    ];
  },
};

export default nextConfig;
