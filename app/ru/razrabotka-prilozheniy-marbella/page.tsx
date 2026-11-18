import { LandingPage } from "@/components/landing/landing-page";
import { landingJsonLd, landingMetadata } from "@/lib/landing-schema";
import { appDevRuConfig } from "@/lib/ru/app-development";

export const metadata = landingMetadata(appDevRuConfig);

export default function AppDevelopmentMarbellaRu() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(landingJsonLd(appDevRuConfig)).replace(/</g, "\\u003c"),
        }}
      />
      <LandingPage config={appDevRuConfig} />
    </>
  );
}
