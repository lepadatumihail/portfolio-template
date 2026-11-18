import { LandingPage } from "@/components/landing/landing-page";
import { appDevEnConfig } from "@/lib/landing-configs";
import { landingJsonLd, landingMetadata } from "@/lib/landing-schema";

export const metadata = landingMetadata(appDevEnConfig);

export default function AppDevelopmentMarbella() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(landingJsonLd(appDevEnConfig)).replace(/</g, "\\u003c"),
        }}
      />
      <LandingPage config={appDevEnConfig} />
    </>
  );
}
