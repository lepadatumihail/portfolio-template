import {
  landingOgContentType,
  landingOgFoot,
  landingOgImage,
  landingOgSize,
} from "@/components/landing/landing-og";
import { industryHubUi } from "@/lib/industries";

const ui = industryHubUi.es;

export const alt = ui.ogAlt;
export const size = landingOgSize;
export const contentType = landingOgContentType;

export default function Image() {
  return landingOgImage({ ...ui.og, foot: landingOgFoot.es });
}
