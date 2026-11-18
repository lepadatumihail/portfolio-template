import {
  landingOgContentType,
  landingOgImage,
  landingOgSize,
} from "@/components/landing/landing-og";
import { reviewsCopy } from "@/lib/reviews";

const copy = reviewsCopy("ru");

// Its own card: without one the page would inherit the home page's.
export const alt = copy.metaTitle;
export const size = landingOgSize;
export const contentType = landingOgContentType;

export default function Image() {
  return landingOgImage({
    kicker: copy.kicker,
    headline: `${copy.title.main} ${copy.title.accent}`,
    foot: `${copy.rating} · ${copy.count}`,
  });
}
