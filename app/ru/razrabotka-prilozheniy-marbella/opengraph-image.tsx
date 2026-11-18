import {
  landingOgContentType,
  landingOgImage,
  landingOgSize,
  landingOgText,
} from "@/components/landing/landing-og";
import { appDevRuConfig } from "@/lib/ru/app-development";

export const alt = appDevRuConfig.copy.ogAlt;
export const size = landingOgSize;
export const contentType = landingOgContentType;

export default function Image() {
  return landingOgImage(landingOgText(appDevRuConfig));
}
