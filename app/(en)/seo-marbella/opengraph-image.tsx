import {
  landingOgContentType,
  landingOgImage,
  landingOgSize,
  landingOgText,
} from "@/components/landing/landing-og";
import { seoEnConfig } from "@/lib/landing-seo";

export const alt = seoEnConfig.copy.ogAlt;
export const size = landingOgSize;
export const contentType = landingOgContentType;

export default function Image() {
  return landingOgImage(landingOgText(seoEnConfig));
}
