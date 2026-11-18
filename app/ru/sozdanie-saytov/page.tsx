import { IndustryHub } from "@/components/landing/industry-hub";
import { industryHubJsonLd, industryHubMetadata } from "@/lib/landing-schema";

export const metadata = industryHubMetadata("ru");

export default function WebDesignByIndustryRu() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(industryHubJsonLd("ru")).replace(/</g, "\\u003c"),
        }}
      />
      <IndustryHub lang="ru" />
    </>
  );
}
