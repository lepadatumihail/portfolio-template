import { LandingPage } from "@/components/landing/landing-page";
import { landingJsonLd, landingMetadata } from "@/lib/landing-schema";
import { seoRuConfig } from "@/lib/ru/seo";

export const metadata = landingMetadata(seoRuConfig);

export default function SeoMarbellaRu() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(landingJsonLd(seoRuConfig)).replace(/</g, "\\u003c"),
        }}
      />
      <LandingPage config={seoRuConfig} />
    </>
  );
}
