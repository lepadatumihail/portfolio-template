import { LandingPage } from "@/components/landing/landing-page";
import { aiAutomationEsConfig } from "@/lib/landing-configs";
import { landingJsonLd, landingMetadata } from "@/lib/landing-schema";

export const metadata = landingMetadata(aiAutomationEsConfig);

export default function AutomatizacionIaMarbella() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(landingJsonLd(aiAutomationEsConfig)).replace(/</g, "\\u003c"),
        }}
      />
      <LandingPage config={aiAutomationEsConfig} />
    </>
  );
}
