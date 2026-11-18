import type { Metadata } from "next";
import { NotFoundMessage } from "@/components/not-found-message";
import { SiteDocument } from "@/components/site-document";
import { LANGS } from "@/lib/i18n";
import { SITE_ICONS, siteViewport } from "@/lib/site-metadata";
import { SITE_URL } from "@/lib/site-schema";
import { fontVariables } from "./fonts";
import "./globals.css";

/**
 * The 404 for any URL no route matches. With one root layout per language
 * there is no single layout for Next to wrap its default 404 in, so this page
 * brings its own document (experimental.globalNotFound in next.config.ts).
 * Next adds the noindex itself and answers with status 404.
 *
 * It cannot know which language the visitor came for (/es/… and /ru/… land
 * here too), so it says the one thing it has to say in each language, each
 * line leading to that language's home. The document stays lang="en"; each
 * line carries its own lang.
 */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "404: This page could not be found.",
  // the favicon and icon live in public/ (see SITE_ICONS), and this page has
  // no language layout to inherit them from
  icons: SITE_ICONS,
};
export const viewport = siteViewport;

export default function GlobalNotFound() {
  return (
    <SiteDocument lang="en" fontVariables={fontVariables}>
      <NotFoundMessage langs={LANGS} />
    </SiteDocument>
  );
}
