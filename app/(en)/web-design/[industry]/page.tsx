import { notFound } from "next/navigation";
import { LandingPage } from "@/components/landing/landing-page";
import { industryConfigBySegment, industrySegments } from "@/lib/industries-index";
import { landingJsonLd, landingMetadata } from "@/lib/landing-schema";

type Params = { params: Promise<{ industry: string }> };

// the set is a fixed list in lib/industries-index.ts, so anything else is a 404
export const dynamicParams = false;

export function generateStaticParams() {
  return industrySegments("en").map((industry) => ({ industry }));
}

export async function generateMetadata({ params }: Params) {
  const { industry } = await params;
  const config = industryConfigBySegment("en", industry);
  return config ? landingMetadata(config) : {};
}

export default async function IndustryPage({ params }: Params) {
  const { industry } = await params;
  const config = industryConfigBySegment("en", industry);
  if (!config) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(landingJsonLd(config)).replace(/</g, "\\u003c"),
        }}
      />
      <LandingPage config={config} />
    </>
  );
}
