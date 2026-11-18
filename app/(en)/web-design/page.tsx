import { IndustryHub } from "@/components/landing/industry-hub";
import { industryHubJsonLd, industryHubMetadata } from "@/lib/landing-schema";

export const metadata = industryHubMetadata("en");

export default function WebDesignByIndustry() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(industryHubJsonLd("en")).replace(/</g, "\\u003c"),
        }}
      />
      <IndustryHub lang="en" />
    </>
  );
}
