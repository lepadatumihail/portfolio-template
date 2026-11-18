import styles from "./home-page.module.css";
import { Contact } from "@/components/contact";
import { Faq } from "@/components/faq";
import { Hero } from "@/components/hero";
import { FeaturedWork } from "@/components/home/featured-work";
import { ReviewBand } from "@/components/home/review-band";
import { Pricing } from "@/components/pricing";
import { Process } from "@/components/process";
import { ReviewStrip } from "@/components/review-strip";
import { Services } from "@/components/services";
import { SiteBackground } from "@/components/site-background";
import { SiteNav } from "@/components/site-nav";
import { HOME_COPY } from "@/lib/home";
import type { Lang } from "@/lib/i18n";
import { homeFaqJsonLd } from "@/lib/site-schema";

/**
 * The home page in one language: /, /es or /ru. Every word comes from
 * lib/home/. Compact on purpose: the hero, one free next step, four services,
 * two projects, three steps, the prices and the FAQ — the detail lives on the
 * service pages, and the markdown home page (lib/markdown/render.ts) still
 * carries all of it for AI assistants.
 */
export function HomePage({ lang }: { lang: Lang }) {
  return (
    <main className={`${styles.page} overflow-x-clip`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homeFaqJsonLd(lang)).replace(/</g, "\\u003c"),
        }}
      />
      <SiteBackground />
      <SiteNav lang={lang} pageKey="home" />
      <Hero lang={lang} />
      <ReviewBand copy={HOME_COPY[lang].compact.review} lang={lang} />
      <Services lang={lang} compact />
      <FeaturedWork lang={lang} />
      {/* the Google reviews drifting past, under the work they were written about */}
      <ReviewStrip lang={lang} />
      <Process lang={lang} compact />
      <Pricing lang={lang} />
      <Faq lang={lang} index="05" />
      <Contact lang={lang} />
    </main>
  );
}
