import { LandingPage } from "@/components/landing/landing-page";
import { appDevEsConfig } from "@/lib/landing-configs";
import { landingJsonLd, landingMetadata } from "@/lib/landing-schema";

export const metadata = landingMetadata(appDevEsConfig);

export default function DesarrolloAppsMarbella() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(landingJsonLd(appDevEsConfig)).replace(/</g, "\\u003c"),
        }}
      />
      <LandingPage config={appDevEsConfig} />
    </>
  );
}
