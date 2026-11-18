import type { CSSProperties, ReactNode } from "react";
import { Analytics } from "@vercel/analytics/next";
import { AdLeadTag } from "@/components/ad-lead-tag";
import { Reveals } from "@/components/reveals";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { LANG_META, type Lang } from "@/lib/i18n";
import { NAV_COPY } from "@/lib/nav";
import { siteJsonLd } from "@/lib/site-schema";

/**
 * The <html> document every page shares. Each language has its own root layout
 * (app/(en), app/es, app/ru) so <html lang> is right from the first byte; they
 * differ only in the language and the fonts they pass in.
 */
export function SiteDocument({
  lang,
  fontVariables,
  fontStyle,
  children,
}: {
  lang: Lang;
  /** next/font variable classes */
  fontVariables: string;
  fontStyle?: CSSProperties;
  children: ReactNode;
}) {
  return (
    <html
      lang={LANG_META[lang].htmlLang}
      className={`${fontVariables} h-full antialiased`}
      style={fontStyle}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(siteJsonLd(lang)).replace(/</g, "\\u003c"),
          }}
        />
        {children}
        <WhatsAppButton label={NAV_COPY[lang].whatsapp} />
        <AdLeadTag line={NAV_COPY[lang].adLead} />
        <Reveals />
        <Analytics />
      </body>
    </html>
  );
}
