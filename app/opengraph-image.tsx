import { homeOgAlt, homeOgContentType, homeOgImage, homeOgSize } from "@/components/home-og";

// The English home page's card, also used by the English pages that have no
// card of their own (see rootCard in lib/site-metadata.ts). The Spanish and
// Russian homes have theirs in app/es and app/ru.
export const alt = homeOgAlt("en");
export const size = homeOgSize;
export const contentType = homeOgContentType;

export default function Image() {
  return homeOgImage("en");
}
