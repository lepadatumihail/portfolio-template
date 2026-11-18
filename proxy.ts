import { NextResponse, type NextRequest } from "next/server";
import {
  isMarkdownRoute,
  markdownRouteFor,
  normalizePathname,
  NEGOTIATED_HEADER,
  pathFromMarkdownAlias,
  prefersMarkdown,
} from "@/lib/markdown/routes";

/**
 * Markdown content negotiation.
 *
 * Agents that send `Accept: text/markdown` get the markdown representation of
 * the page from the same URL; everything else — browsers, crawlers, anything
 * sending a wildcard Accept — still gets the HTML. "/page.md" serves the same
 * markdown at a plain URL for clients that don't negotiate.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const aliased = pathFromMarkdownAlias(pathname);
  if (aliased) {
    if (!isMarkdownRoute(aliased)) return NextResponse.next();
    // the alias always carries noindex: drop the header that says the markdown
    // was negotiated, in case a client sent it itself
    const headers = new Headers(request.headers);
    headers.delete(NEGOTIATED_HEADER);
    return NextResponse.rewrite(new URL(markdownRouteFor(aliased), request.url), {
      request: { headers },
    });
  }

  if (!isMarkdownRoute(pathname)) return NextResponse.next();
  const path = normalizePathname(pathname);

  if (prefersMarkdown(request.headers.get("accept"))) {
    const headers = new Headers(request.headers);
    headers.set(NEGOTIATED_HEADER, "1");
    return NextResponse.rewrite(new URL(markdownRouteFor(path), request.url), {
      request: { headers },
    });
  }

  // HTML answer: advertise the markdown alternate for agents that read Link
  // headers instead of guessing at the URL. `Vary: Accept` belongs here too,
  // but Next rebuilds Vary on page responses for its router protocol and drops
  // anything added from here — the markdown response carries it instead, which
  // is the direction that matters: it stops a shared cache handing markdown to
  // a browser.
  const response = NextResponse.next();
  response.headers.append(
    "Link",
    `<${path === "/" ? "/index.md" : `${path}.md`}>; rel="alternate"; type="text/markdown"`,
  );
  return response;
}

export const config = {
  matcher: [
    "/",
    // pages only: no build assets, API routes, the markdown handler itself,
    // well-known documents, or anything with a file extension
    "/((?!_next/|api/|md/|\\.well-known/|.*\\.).*)",
    // the "/page.md" alias
    "/(.*\\.md)",
  ],
};
