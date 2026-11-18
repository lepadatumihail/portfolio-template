import { ImageResponse } from "next/og";
import { BrandMark } from "@/components/brand-mark";
import { HOME_COPY } from "@/lib/home";
import type { Lang } from "@/lib/i18n";
import { typesetRu } from "@/lib/typeset";

export const homeOgSize = { width: 1200, height: 630 };
export const homeOgContentType = "image/png";

export function homeOgAlt(lang: Lang): string {
  return HOME_COPY[lang].og.alt;
}

// Build-time OG card for the home page in each language, in the site's light
// identity: paper ground, ink type, navy mark — matches what a visitor sees
// when the link opens.
export function homeOgImage(lang: Lang) {
  const { og } = HOME_COPY[lang];
  // Russian line breaking (lib/typeset.ts): no line ends on «в», «на» or «и»
  const set = (text: string) => (lang === "ru" ? typesetRu(text) : text);
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#fbfbf9",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <BrandMark height={28} />
          <div style={{ display: "flex", fontSize: 30, color: "#14161a", fontWeight: 500 }}>
            Alex Doe
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 28,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 84,
              fontWeight: 300,
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
              color: "#14161a",
            }}
          >
            {set(og.headline)}
          </div>
          <div style={{ display: "flex", fontSize: 32, color: "#6b7280" }}>
            {set(og.sub)}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid #e7e5e0",
            paddingTop: 36,
          }}
        >
          <div style={{ display: "flex", fontSize: 28, color: "#6b7280" }}>example.com</div>
          <div style={{ display: "flex", fontSize: 28, color: "#1e3a5f", fontWeight: 500 }}>
            {og.foot}
          </div>
        </div>
      </div>
    ),
    { ...homeOgSize },
  );
}
