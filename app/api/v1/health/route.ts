import { API_VERSION, apiJson } from "@/lib/api";

// Liveness only — this API serves content compiled into the deployment, so
// there is no upstream to probe. A 200 here means the deployment is serving.
export const dynamic = "force-dynamic";

export async function GET() {
  return apiJson(
    {
      status: "pass", // RFC 9727 "status" link target; health+json vocabulary
      version: API_VERSION,
      checkedAt: new Date().toISOString(),
    },
    "no-store",
  );
}
