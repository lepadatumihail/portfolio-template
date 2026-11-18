import { LandingPage } from "@/components/landing/landing-page";
import { seoEnConfig } from "@/lib/landing-seo";
import { landingJsonLd, landingMetadata } from "@/lib/landing-schema";

export const metadata = landingMetadata(seoEnConfig);

export default function SeoMarbella() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(landingJsonLd(seoEnConfig)).replace(/</g, "\\u003c"),
        }}
      />
      <LandingPage config={seoEnConfig} />
    </>
  );
}
