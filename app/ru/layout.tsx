import { SiteDocument } from "@/components/site-document";
import { siteMetadata, siteViewport } from "@/lib/site-metadata";
// CSS is bundled in import order, and this order is load-bearing: the
// Russian-only CSS — the Cyrillic serif's @font-face from ./fonts, then
// ./cyrillic-serif.css — comes before the stylesheet every page shares.
// Imported after a shared module, or without cyrillic-serif.css beside it, it
// is merged into the Latin pages' stylesheet, and the Cyrillic serif into
// their font preloads.
import { cyrillicFontStyle } from "./fonts";
import "./cyrillic-serif.css";
import { fontVariables, instrumentSerif } from "../fonts";
import "../globals.css";

const fontStyle = cyrillicFontStyle(instrumentSerif.style.fontFamily);

// Root layout of the Russian pages — everything under /ru — with the Cyrillic
// fonts.
export const metadata = siteMetadata("ru");
export const viewport = siteViewport;

export default function RussianLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SiteDocument lang="ru" fontVariables={fontVariables} fontStyle={fontStyle}>
      {children}
    </SiteDocument>
  );
}
