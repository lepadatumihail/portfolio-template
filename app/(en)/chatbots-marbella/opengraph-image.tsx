import { landingOgContentType, landingOgImage, landingOgSize, landingOgText } from "@/components/landing/landing-og";
import { CHATBOTS_CONFIGS } from "@/lib/chatbots";

const config = CHATBOTS_CONFIGS.en;
export const alt = config.copy.ogAlt;
export const size = landingOgSize;
export const contentType = landingOgContentType;

export default function Image() { return landingOgImage(landingOgText(config)); }
