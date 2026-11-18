import { notFound } from "next/navigation";
import {
  landingOgContentType,
  landingOgImage,
  landingOgSize,
  landingOgText,
} from "@/components/landing/landing-og";
import { industryConfigBySegment } from "@/lib/industries-index";

// One card per page, declared here rather than as static exports so each
// carries its own alt text. The price of that: Next serves a file with
// generateImageMetadata from its own route, which is not prerendered — each
// card is drawn on its first request and cached from then on. Next also calls
// this once at build without the route param, hence the optional chaining.
export function generateImageMetadata({ params }: { params: { industry?: string } }) {
  const config = params.industry ? industryConfigBySegment("en", params.industry) : undefined;
  return [
    {
      id: "card",
      alt: config?.copy.ogAlt ?? "example.com",
      size: landingOgSize,
      contentType: landingOgContentType,
    },
  ];
}

export default async function Image({ params }: { params: Promise<{ industry: string }> }) {
  const { industry } = await params;
  const config = industryConfigBySegment("en", industry);
  if (!config) notFound();
  return landingOgImage(landingOgText(config));
}
