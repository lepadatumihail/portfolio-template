import { LandingPage } from "@/components/landing/landing-page";
import { webDesignEnConfig } from "@/lib/landing-configs";
import { landingJsonLd, landingMetadata } from "@/lib/landing-schema";

export const metadata = landingMetadata(webDesignEnConfig);

export default function WebDesignMarbella() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(landingJsonLd(webDesignEnConfig)).replace(/</g, "\\u003c"),
        }}
      />
      <LandingPage config={webDesignEnConfig} />
    </>
  );
}
