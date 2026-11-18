import { LandingPage } from "@/components/landing/landing-page";
import { landingJsonLd, landingMetadata } from "@/lib/landing-schema";
import { webDesignRuConfig } from "@/lib/ru/web-design";

export const metadata = landingMetadata(webDesignRuConfig);

export default function WebDesignMarbellaRu() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(landingJsonLd(webDesignRuConfig)).replace(/</g, "\\u003c"),
        }}
      />
      <LandingPage config={webDesignRuConfig} />
    </>
  );
}
