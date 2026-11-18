import { LandingPage } from "@/components/landing/landing-page";
import { landingJsonLd, landingMetadata } from "@/lib/landing-schema";
import { aiAutomationRuConfig } from "@/lib/ru/ai-automation";

export const metadata = landingMetadata(aiAutomationRuConfig);

export default function AiAutomationMarbellaRu() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(landingJsonLd(aiAutomationRuConfig)).replace(/</g, "\\u003c"),
        }}
      />
      <LandingPage config={aiAutomationRuConfig} />
    </>
  );
}
