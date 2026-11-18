import {
  landingOgContentType,
  landingOgImage,
  landingOgSize,
  landingOgText,
} from "@/components/landing/landing-og";
import { aiAutomationEnConfig } from "@/lib/landing-configs";

export const alt = aiAutomationEnConfig.copy.ogAlt;
export const size = landingOgSize;
export const contentType = landingOgContentType;

export default function Image() {
  return landingOgImage(landingOgText(aiAutomationEnConfig));
}
