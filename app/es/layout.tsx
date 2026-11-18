import { SiteDocument } from "@/components/site-document";
import { siteMetadata, siteViewport } from "@/lib/site-metadata";
import { fontVariables } from "../fonts";
import "../globals.css";

// Root layout of the Spanish pages: every page under /es, and /es itself.
export const metadata = siteMetadata("es");
export const viewport = siteViewport;

export default function SpanishLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SiteDocument lang="es" fontVariables={fontVariables}>
      {children}
    </SiteDocument>
  );
}
