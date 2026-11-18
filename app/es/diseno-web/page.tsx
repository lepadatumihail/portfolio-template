import { IndustryHub } from "@/components/landing/industry-hub";
import { industryHubJsonLd, industryHubMetadata } from "@/lib/landing-schema";

export const metadata = industryHubMetadata("es");

export default function DisenoWebPorSectores() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(industryHubJsonLd("es")).replace(/</g, "\\u003c"),
        }}
      />
      <IndustryHub lang="es" />
    </>
  );
}
