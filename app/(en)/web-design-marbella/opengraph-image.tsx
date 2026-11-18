import {
  landingOgContentType,
  landingOgImage,
  landingOgSize,
  landingOgText,
} from "@/components/landing/landing-og";
import { webDesignEnConfig } from "@/lib/landing-configs";

export const alt = webDesignEnConfig.copy.ogAlt;
export const size = landingOgSize;
export const contentType = landingOgContentType;

export default function Image() {
  return landingOgImage(landingOgText(webDesignEnConfig));
}
