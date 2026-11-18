import type { CSSProperties } from "react";
import localFont from "next/font/local";

// The Russian pages' fonts: app/fonts.ts, which the layout also loads, plus a
// Cyrillic serif. Geist and Geist Mono need nothing extra: next/font declares
// every subset's faces, preloading only the ones asked for, so the shared
// stylesheet already covers Cyrillic and the browser fetches those files where
// Cyrillic text is set. A second Geist call here, to preload them, would
// declare the faces twice; the shared stylesheet loads after this one and
// would win, so the preloaded copy would go unused and both would download.

/**
 * Instrument Serif, the italic accent in every headline, has no Cyrillic.
 * Russian accents are set in Noto Serif Display Italic instead, at its
 * narrowest width (wdth 62.5) and regular weight: the closest match on Google
 * Fonts to Instrument Serif's narrow, high-contrast display italic. Cormorant
 * Garamond, Playfair Display, PT Serif, EB Garamond and Lora were compared too;
 * all are book italics, wider and more calligraphic.
 *
 * The file is self-hosted: a static instance of the variable font at wdth 62.5
 * and wght 400, holding only U+0400–045F, U+0490–0491 and U+2116 (about 10 KB,
 * against 65 KB for the variable Cyrillic file Google serves). Made with
 * fontTools from Google Fonts' Cyrillic subset of Noto Serif Display Italic
 * 2.003: varLib.instancer at {wght: 400, wdth: 62.5}, then subset to those
 * code points with every layout feature kept, unhinted, as woff2. Licence:
 * SIL OFL 1.1, in NotoSerifDisplay-OFL.txt beside it. app/ru/cyrillic-serif.css
 * pins the accent to its one weight.
 *
 * It sits after Instrument Serif in the stack, so Latin letters, digits and
 * punctuation (« » — – and the no-break space included) keep Instrument Serif.
 * To swap the face, regenerate the file the same way and keep the
 * unicode-range below in step with it.
 */
const cyrillicSerif = localFont({
  src: "./NotoSerifDisplay-ExtraCondensedItalic-Cyrillic.woff2",
  weight: "400",
  style: "italic",
  // only the first family of the stack is used (see cyrillicFontStyle), so
  // the metric-adjusted fallback face next/font would add goes unused
  adjustFontFallback: false,
  declarations: [{ prop: "unicode-range", value: "U+0400-045F, U+0490-0491, U+2116" }],
});

/**
 * Inline on <html>: overrides the serif variable app/fonts.ts sets with
 * Instrument Serif, then the Cyrillic face, then Instrument Serif's metric
 * fallback — so text drawn before the fonts arrive keeps the Latin metrics.
 */
export function cyrillicFontStyle(latinSerif: string): CSSProperties {
  const families = (stack: string) => stack.split(",").map((family) => family.trim());
  const [latinFace, ...fallbacks] = families(latinSerif);
  const cyrillicFace = families(cyrillicSerif.style.fontFamily)[0];
  return {
    "--font-instrument-serif": [latinFace, cyrillicFace, ...fallbacks].join(", "),
  } as CSSProperties;
}
