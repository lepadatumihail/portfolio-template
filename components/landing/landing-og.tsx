import { ImageResponse } from "next/og";
import { BrandMark } from "@/components/brand-mark";
import type { Lang } from "@/lib/i18n";
import type { LandingConfig } from "@/lib/landing";
import { ogRu } from "@/lib/ru/ui";
import { typesetRu } from "@/lib/typeset";

export const landingOgSize = { width: 1200, height: 630 };
export const landingOgContentType = "image/png";

type LandingOgText = {
  kicker: string;
  headline: string;
  /** bottom-right line: the price floor the page itself quotes */
  foot: string;
};

export const landingOgFoot: Record<Lang, string> = {
  en: "Fixed quote · from €500",
  es: "Precio cerrado · desde 500 €",
  ru: ogRu.landingFoot,
};

/** Card text for a landing page: its own `og` block, else the hero label and h1. */
export function landingOgText(config: LandingConfig): LandingOgText {
  const { hero } = config.copy;
  return {
    kicker: config.og?.kicker ?? hero.label,
    headline: config.og?.headline ?? `${hero.h1Main} ${hero.h1Accent}`,
    foot: config.og?.foot ?? landingOgFoot[config.lang],
  };
}

/**
 * Build-time link-preview card for the landing, industry and hub pages — the
 * same paper/ink/navy card as components/study/study-og.tsx. Satori needs
 * explicit display on every node and cannot read CSS variables, so the
 * palette is repeated here as hex — same values as globals.css.
 */
export function landingOgImage({ kicker, headline, foot }: LandingOgText) {
  // three lines at most: long h1s step down so they never run into the footer
  const fontSize = headline.length > 70 ? 56 : headline.length > 48 ? 64 : 76;
  // Russian line breaking (lib/typeset.ts), so no line ends on «в», «на» or
  // «и». The callers pass bare strings, and Cyrillic marks the Russian ones:
  // the rules would misread Spanish «a» and «o».
  const text = /\p{Script=Cyrillic}/u.test(headline) ? typesetRu(headline) : headline;

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
            {kicker}
          </div>
          <div
            style={{
              display: "flex",
              fontSize,
              fontWeight: 300,
              letterSpacing: "-0.02em",
              lineHeight: 1.06,
              color: "#14161a",
            }}
          >
            {text}
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
          <div style={{ display: "flex", fontSize: 26, color: "#1e3a5f", fontWeight: 500 }}>
            {foot}
          </div>
        </div>
      </div>
    ),
    { ...landingOgSize },
  );
}
