import { homeOgAlt, homeOgContentType, homeOgImage, homeOgSize } from "@/components/home-og";

export const alt = homeOgAlt("es");
export const size = homeOgSize;
export const contentType = homeOgContentType;

export default function Image() {
  return homeOgImage("es");
}
