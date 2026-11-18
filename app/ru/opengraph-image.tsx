import { homeOgAlt, homeOgContentType, homeOgImage, homeOgSize } from "@/components/home-og";

export const alt = homeOgAlt("ru");
export const size = homeOgSize;
export const contentType = homeOgContentType;

export default function Image() {
  return homeOgImage("ru");
}
