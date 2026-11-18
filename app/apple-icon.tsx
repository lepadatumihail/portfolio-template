import { ImageResponse } from "next/og";
import { BrandMark, MARK_SUNSET_ON_NAVY } from "@/components/brand-mark";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Navy tile + paper ring mark with its sunset full stop, matching
// public/logo.svg. Linked from the <head> by SITE_ICONS in
// lib/site-metadata.ts, as /apple-icon.
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1e3a5f",
          borderRadius: 40,
        }}
      >
        <BrandMark height={76} ink="#fbfbf9" dot={MARK_SUNSET_ON_NAVY} />
      </div>
    ),
    { ...size },
  );
}
