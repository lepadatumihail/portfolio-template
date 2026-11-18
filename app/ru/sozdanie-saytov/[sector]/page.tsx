import { notFound } from "next/navigation";
import { LandingPage } from "@/components/landing/landing-page";
import { industryConfigBySegment, industrySegments } from "@/lib/industries-index";
import { landingJsonLd, landingMetadata } from "@/lib/landing-schema";

type Params = { params: Promise<{ sector: string }> };

// the set is a fixed list in lib/industries-index.ts, so anything else is a 404
export const dynamicParams = false;

export function generateStaticParams() {
  return industrySegments("ru").map((sector) => ({ sector }));
}

export async function generateMetadata({ params }: Params) {
  const { sector } = await params;
  const config = industryConfigBySegment("ru", sector);
  return config ? landingMetadata(config) : {};
}

export default async function SectorPageRu({ params }: Params) {
  const { sector } = await params;
  const config = industryConfigBySegment("ru", sector);
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
