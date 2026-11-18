import {
  landingOgContentType,
  landingOgImage,
  landingOgSize,
} from "@/components/landing/landing-og";
import { ogRu } from "@/lib/ru/ui";
import { studyUi } from "@/lib/studies";

const ui = studyUi.ru;

// The index had no card of its own: each study brings one, but a segment's
// image does not reach up to its parent.
export const alt = ui.indexMetaTitle;
export const size = landingOgSize;
export const contentType = landingOgContentType;

export default function Image() {
  return landingOgImage({
    kicker: ui.indexKicker,
    headline: ui.indexMetaTitle,
    foot: ogRu.studyIndexFoot,
  });
}
