import { LandingPage } from "@/components/landing/landing-page";
import { webDesignEsConfig } from "@/lib/landing-configs";
import { landingJsonLd, landingMetadata } from "@/lib/landing-schema";

export const metadata = landingMetadata(webDesignEsConfig);

export default function DisenoWebMarbella() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(landingJsonLd(webDesignEsConfig)).replace(/</g, "\\u003c"),
        }}
      />
      <LandingPage config={webDesignEsConfig} />
    </>
  );
}
