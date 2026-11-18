import type { NextRequest } from "next/server";
import { renderMarkdown } from "@/lib/markdown/render";
import { NEGOTIATED_HEADER } from "@/lib/markdown/routes";
import { estimateTokens } from "@/lib/markdown/tokens";

/**
 * Serves the markdown representation of a page.
 *
 * Reached two ways, both via proxy.ts: a rewrite when a request for the page
 * itself carries `Accept: text/markdown`, and a rewrite from the plain
 * "/page.md" alias. Requests that land here directly work too.
 */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug?: string[] }> },
) {
  const { slug } = await params;
  const markdown = renderMarkdown(`/${(slug ?? []).join("/")}`);

  if (!markdown) {
    return new Response("No markdown representation for this path.\n", {
      status: 404,
      headers: { "content-type": "text/plain; charset=utf-8" },
    });
  }

  const headers = new Headers({
    "content-type": "text/markdown; charset=utf-8",
    // context budgeting hint — see lib/markdown/tokens.ts for the estimate
    "x-markdown-tokens": String(estimateTokens(markdown)),
    // the page URL answers with HTML or markdown depending on the request
    vary: "Accept",
    "cache-control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
  });

  // The ".md" alias is a second address for a page that is already indexed as
  // HTML, so keep it out of the index. Never set on the negotiated response —
  // a crawler asking for the page itself must not see a noindex.
  if (request.headers.get(NEGOTIATED_HEADER) !== "1") {
    headers.set("x-robots-tag", "noindex");
  }

  return new Response(markdown, { headers });
}
