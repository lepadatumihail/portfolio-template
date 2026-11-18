import { ImageResponse } from "next/og";
import { BrandMark } from "@/components/brand-mark";
import type { Study } from "@/lib/studies";
import { typesetRu } from "@/lib/typeset";

export const studyOgSize = { width: 1200, height: 630 };
export const studyOgContentType = "image/png";

/**
 * Build-time OG card for a case study, in the site's paper/ink/navy identity.
 * Satori needs explicit display on every node and cannot read CSS variables,
 * so the palette is repeated here as hex — same values as globals.css.
 */
export function studyOgImage(study: Study) {
  // Russian line breaking (lib/typeset.ts): no line ends on «в», «на» or «и»
  const headline = study.lang === "ru" ? typesetRu(study.ogHeadline) : study.ogHeadline;

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
          <BrandMark height={26} />
          <div style={{ display: "flex", fontSize: 28, color: "#14161a", fontWeight: 500 }}>
            Alex Doe
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
          <div style={{ display: "flex", fontSize: 26, color: "#1e3a5f", fontWeight: 500 }}>
            {study.ogKicker}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 72,
              fontWeight: 300,
              letterSpacing: "-0.02em",
              lineHeight: 1.06,
              color: "#14161a",
            }}
          >
            {headline}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid #e7e5e0",
            paddingTop: 34,
          }}
        >
          <div style={{ display: "flex", fontSize: 26, color: "#6b7280" }}>example.com</div>
          <div style={{ display: "flex", fontSize: 26, color: "#6b7280" }}>
            {study.facts[study.facts.length - 1]?.value}
          </div>
        </div>
      </div>
    ),
    { ...studyOgSize },
  );
}
