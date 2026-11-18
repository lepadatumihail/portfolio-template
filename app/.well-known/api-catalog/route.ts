import {
  API_BASE,
  API_CATALOG_URL,
  API_DOCS_URL,
  API_STATUS_URL,
  LINKSET_CONTENT_TYPE,
  OPENAPI_URL,
  PUBLIC_CACHE_CONTROL,
} from "@/lib/api";

export const dynamic = "force-static";

// RFC 9727 API catalog, serialised as an RFC 9264 linkset.
//
// Two entries on purpose:
//  - anchored on the API itself, carrying the RFC 8631 metadata relations
//    (service-desc / service-doc / status) — Appendix A.1 of RFC 9727;
//  - anchored on the catalog, listing its members with "item" — Appendix A.2,
//    so a client that only walks "item" links still finds the API.
const catalog = {
  linkset: [
    {
      anchor: API_BASE,
      "service-desc": [
        {
          href: OPENAPI_URL,
          type: "application/json",
          title: "OpenAPI 3.1 description of the example.com content API",
        },
      ],
      "service-doc": [
        {
          href: API_DOCS_URL,
          type: "text/html",
          title: "Human-readable documentation for the example.com content API",
        },
      ],
      status: [
        {
          href: API_STATUS_URL,
          type: "application/json",
          title: "Health check for the example.com content API",
        },
      ],
    },
    {
      anchor: API_CATALOG_URL,
      item: [
        {
          href: API_BASE,
          title: "example.com content API v1 — services, pricing and portfolio",
        },
      ],
    },
  ],
};

const headers = {
  "content-type": LINKSET_CONTENT_TYPE,
  "cache-control": PUBLIC_CACHE_CONTROL,
  "access-control-allow-origin": "*",
};

export async function GET() {
  return new Response(JSON.stringify(catalog, null, 2), { headers });
}

// RFC 9727 §2: a HEAD request here SHALL respond with a Link header carrying
// the api-catalog relation — supplied site-wide by next.config.ts.
export async function HEAD() {
  return new Response(null, { headers });
}
