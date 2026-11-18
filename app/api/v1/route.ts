import {
  API_BASE,
  API_DOCS_URL,
  API_STATUS_URL,
  API_VERSION,
  OPENAPI_URL,
  apiJson,
} from "@/lib/api";

export const dynamic = "force-static";

// The URI the API catalog anchors on. RFC 9727 §4.1 asks publishers to make the
// per-API metadata available at the endpoint URIs they list, so this index
// repeats the catalog's relations for a client that landed here directly.
export async function GET() {
  return apiJson({
    name: "example.com content API",
    version: API_VERSION,
    description:
      "Read-only access to the services, pricing and portfolio published on example.com.",
    links: {
      "service-desc": OPENAPI_URL,
      "service-doc": API_DOCS_URL,
      status: API_STATUS_URL,
    },
    endpoints: [
      { method: "GET", href: `${API_BASE}/health`, summary: "Health check" },
      {
        method: "GET",
        href: `${API_BASE}/profile`,
        summary: "Profile, services, pricing and process",
      },
      {
        method: "GET",
        href: `${API_BASE}/projects`,
        summary: "Portfolio and case studies",
      },
      {
        method: "GET",
        href: `${API_BASE}/industries`,
        summary: "Web design by industry: one page per sector, with its FAQ",
      },
    ],
  });
}
