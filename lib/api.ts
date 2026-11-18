// Public read-only API surface — shared constants so the RFC 9727 catalog at
// /.well-known/api-catalog, the OpenAPI document and the human docs page can
// never drift apart.

export const SITE = "https://example.com";

export const API_VERSION = "1.3.0";

/** Anchor URI of the API in the catalog — also the base every path hangs off. */
export const API_BASE = `${SITE}/api/v1`;

export const API_CATALOG_URL = `${SITE}/.well-known/api-catalog`;
export const OPENAPI_URL = `${API_BASE}/openapi.json`;
export const API_DOCS_URL = `${SITE}/api-docs`;
export const API_STATUS_URL = `${API_BASE}/health`;

/**
 * application/linkset+json with the profile parameter RFC 9727 §4.2 asks for,
 * so a client can tell this linkset is an API catalog without parsing it.
 */
export const LINKSET_CONTENT_TYPE =
  'application/linkset+json; profile="https://www.rfc-editor.org/info/rfc9727"';

// The `api-catalog` Link header RFC 9727 §2/§3 asks for is set site-wide in
// next.config.ts, which takes precedence over headers set here.

/** Everything here is public and static; let the CDN and clients hold it. */
export const PUBLIC_CACHE_CONTROL = "public, max-age=3600, s-maxage=86400";

/** JSON response with the headers every endpoint shares. */
export function apiJson(body: unknown, cacheControl = PUBLIC_CACHE_CONTROL) {
  return Response.json(body, {
    headers: {
      "cache-control": cacheControl,
      "access-control-allow-origin": "*",
    },
  });
}
