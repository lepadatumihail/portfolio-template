import { LandingPage } from "@/components/landing/landing-page";
import { seoEsConfig } from "@/lib/landing-seo";
import { landingJsonLd, landingMetadata } from "@/lib/landing-schema";

export const metadata = landingMetadata(seoEsConfig);

export default function SeoMarbellaEs() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(landingJsonLd(seoEsConfig)).replace(/</g, "\\u003c"),
        }}
      />
      <LandingPage config={seoEsConfig} />
    </>
  );
}
