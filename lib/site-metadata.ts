import type { Metadata, ResolvingMetadata, Viewport } from "next";
import { absoluteUrl, hreflang, otherVersions } from "./alternates";
import { HOME_COPY } from "./home";
import { homePath, LANG_META, type Lang } from "./i18n";
import { SITE_NAME, SITE_URL } from "./site-schema";

type OpenGraphImages = NonNullable<NonNullable<Metadata["openGraph"]>["images"]>;

/** The X account the site is promoted from: twitter:site and twitter:creator. */
export const X_HANDLE = "@yourhandle";

/**
 * twitter:site and twitter:creator, for every builder that sets `twitter`.
 * Next merges metadata shallowly, so a page that sets `twitter` replaces the
 * layout's — each one has to carry these itself.
 */
export const TWITTER_HANDLES = { site: X_HANDLE, creator: X_HANDLE } as const;

/**
 * og:locale plus og:locale:alternate for each other language version of the
 * page — `key` as lib/alternates.ts knows it ("home", "seo", "acme-clinic"…).
 * For social platforms only: Google reads a page's language from the page.
 */
export function ogLocales(key: string, lang: Lang) {
  return {
    locale: LANG_META[lang].ogLocale,
    alternateLocale: otherVersions(key, lang).map((version) => LANG_META[version.lang].ogLocale),
  };
}

/**
 * The favicon and icon are served from public/ under fixed URLs. Kept in app/,
 * Next gave them a content-hash query and Vercel appended ?dpl=<deployment>,
 * so their URLs changed with every deploy; Google asks for a stable favicon
 * URL. Declaring icons here replaces every file-based icon in the <head>, so
 * the apple-touch-icon that app/apple-icon.tsx still serves is listed too.
 * Same sizes and types as Next printed for the files.
 */
export const SITE_ICONS: Metadata["icons"] = {
  icon: [
    { url: "/favicon.ico", sizes: "256x256", type: "image/x-icon" },
    { url: "/icon.svg", sizes: "any", type: "image/svg+xml" },
  ],
  apple: [{ url: "/apple-icon", sizes: "180x180", type: "image/png" }],
};

/**
 * Metadata every page in a language starts from — the root layout of each
 * language exports it. The defaults are that language's home page: its title,
 * description and link preview. Every other page sets its own.
 */
export function siteMetadata(lang: Lang, images?: OpenGraphImages): Metadata {
  const { title, description } = HOME_COPY[lang].meta;
  const home = homePath(lang);
  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: title,
      template: "%s — example.com",
    },
    description,
    authors: [{ name: "Alex Doe", url: SITE_URL }],
    creator: "Alex Doe",
    alternates: {
      canonical: home,
    },
    icons: SITE_ICONS,
    openGraph: {
      type: "website",
      url: absoluteUrl(home),
      siteName: SITE_NAME,
      title,
      description,
      ...ogLocales("home", lang),
      ...(images ? { images } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...TWITTER_HANDLES,
    },
    // in the generic robots tag rather than a googlebot one, so Bing reads the
    // snippet and image-preview limits too
    robots: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  };
}

/**
 * The app/opengraph-image.tsx card, for the English layout to pass on — and
 * for an English page without a card of its own that sets `openGraph`
 * (/api-docs).
 *
 * The card sits in the app root, above every root layout, and a layout that
 * sets `openGraph` drops the images it inherits. The English layout cannot have
 * the card beside it either: Next appends a hash to any metadata route inside
 * a route group, so the card would move from /opengraph-image to
 * /opengraph-image-<hash>. So the layout reads the card back from its parent —
 * the URL Next resolved, cache-busting query included — and sets it again.
 */
export async function rootCard(parent: ResolvingMetadata): Promise<OpenGraphImages> {
  const images = (await parent).openGraph?.images ?? [];
  // resolved without a metadataBase at the root, so keep only path and query
  const relative = (href: string) => {
    const url = new URL(href, SITE_URL);
    return `${url.pathname}${url.search}`;
  };
  return images.map((image) =>
    typeof image === "string" ? relative(image) : { ...image, url: relative(image.url) },
  );
}

/**
 * A home page's own metadata: its canonical and the hreflang between the
 * three. Title, description and link preview come from siteMetadata() above —
 * they are the home's to begin with.
 */
export function homeMetadata(lang: Lang): Metadata {
  return {
    alternates: {
      canonical: homePath(lang),
      languages: hreflang("home"),
    },
  };
}

export const siteViewport: Viewport = {
  themeColor: "#fbfbf9",
  colorScheme: "light",
};
