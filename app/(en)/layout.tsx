import type { Metadata, ResolvingMetadata } from "next";
import { SiteDocument } from "@/components/site-document";
import { rootCard, siteMetadata, siteViewport } from "@/lib/site-metadata";
import { fontVariables } from "../fonts";
import "../globals.css";

// Root layout of the English pages — everything outside /es and /ru. A route
// group, since English has no URL prefix to hang a layout on.
export async function generateMetadata(
  _props: unknown,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  return siteMetadata("en", await rootCard(parent));
}

export const viewport = siteViewport;

export default function EnglishLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SiteDocument lang="en" fontVariables={fontVariables}>
      {children}
    </SiteDocument>
  );
}
