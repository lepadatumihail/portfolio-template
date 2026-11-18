import { LandingPage } from "@/components/landing/landing-page";
import { aiAutomationEnConfig } from "@/lib/landing-configs";
import { landingJsonLd, landingMetadata } from "@/lib/landing-schema";

export const metadata = landingMetadata(aiAutomationEnConfig);

export default function AiAutomationMarbella() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(landingJsonLd(aiAutomationEnConfig)).replace(/</g, "\\u003c"),
        }}
      />
      <LandingPage config={aiAutomationEnConfig} />
    </>
  );
}
