import type { ReactNode } from "react";
import type { Lang } from "@/lib/i18n";
import { typesetRu } from "@/lib/typeset";

/**
 * Copy as a page prints it. On the Russian pages the line-breaking rules of
 * lib/typeset.ts apply. English and Spanish strings get one rule only: a
 * number range («24–48 horas») stays on one line.
 *
 * Both functions also keep a short hyphenated compound («Коста-дель-Соль»,
 * «ИИ-автоматизацию», «детейлинг-центра») or a number range («24–48») on one
 * line instead of letting it break at the hyphen or the dash. `typeset` is
 * for running text, kickers and leads, where that always fits.
 * `typesetHeading` is for headings, where a compound held on one line could
 * be wider than its column, so each call site says where it is safe.
 */

// A hyphenated compound, or a number range set with an en dash, which a
// browser would otherwise break after the dash: «за 24– / 48 часов». The en
// dash counts only between digits; a spaced dash is lib/typeset.ts's business.
const COMPOUND = /[\p{L}\p{N}]+(?:(?:-|(?<=\p{N})–(?=\p{N}))[\p{L}\p{N}]+)+/gu;

// A number range in any language: «24–48», «1–2», «90–100». The browser
// breaks after the dash as readily as after a hyphen: «visitas 24– / 48 horas».
const RANGE = /\p{N}+(?:[-–]\p{N}+)+/gu;

// Longer compounds may break at their hyphen as usual. A heading column holds
// 16 characters, «ИИ-автоматизацию»; running text, kickers and leads have room
// for «виджета-переводчика», 19, at every width from 320 px.
const MAX_HEADING_COMPOUND = 16;
const MAX_TEXT_COMPOUND = 20;

/** `set` with each match of `pattern` up to `max` characters long in a span of `className`. */
function keep(set: string, pattern: RegExp, max: number, className: string): ReactNode {
  const parts: ReactNode[] = [];
  let last = 0;
  for (const match of set.matchAll(pattern)) {
    if (match[0].length > max) continue;
    if (match.index > last) parts.push(set.slice(last, match.index));
    parts.push(
      <span key={match.index} className={className}>
        {match[0]}
      </span>,
    );
    last = match.index + match[0].length;
  }
  if (!parts.length) return set;
  if (last < set.length) parts.push(set.slice(last));
  return parts;
}

/** A string already set by `typesetRu` (or untouched, outside Russian), with its compounds or ranges kept. */
function keepFor(set: string, lang: Lang, heading?: HeadingKeep): ReactNode {
  if (lang !== "ru") {
    return heading === "never" ? set : keep(set, RANGE, Infinity, "whitespace-nowrap");
  }
  if (!heading) return keep(set, COMPOUND, MAX_TEXT_COMPOUND, "whitespace-nowrap");
  if (heading === "never") return set;
  return keep(
    set,
    COMPOUND,
    MAX_HEADING_COMPOUND,
    heading === "sm" ? "sm:whitespace-nowrap" : "whitespace-nowrap",
  );
}

const setFor = (text: string, lang: Lang) => (lang === "ru" ? typesetRu(text) : text);

const NBSP = "\u00a0";

export function typeset(text: string, lang: Lang): ReactNode {
  return keepFor(setFor(text, lang), lang);
}

/**
 * Where a heading may hold a compound on one line. Measured in Geist: a
 * 16-character Russian compound runs 8.3–8.9em in the light weight and up to
 * 9.3em in the medium one, so allow 10em.
 *
 * - "always" (the default): the column is at least 10em wide at every width
 *   from 320 px — FAQ questions, feature titles, list and card titles.
 * - "sm": the column is that wide from 640 px only — the display headings
 *   (the H1s, section headings, the contact headline, the study CTA card),
 *   which at 320 px have 6–9em. Below sm a compound breaks at its hyphen.
 * - "never": the column can be narrower than 10em even on a desktop — the
 *   four-column process steps (9em at 1024 px), the guarantee card's title,
 *   prices and big stat values.
 */
export type HeadingKeep = "always" | "sm" | "never";

export function typesetHeading(text: string, lang: Lang, keep: HeadingKeep = "always"): ReactNode {
  return keepFor(setFor(text, lang), lang, keep);
}

/**
 * Copy followed by a trailing mark, the "↗︎" of a link, with the mark held to
 * the last word so it never wraps onto a line of its own. The mark is an
 * inline-block, which is a break opportunity on both sides whatever character
 * comes before it, so the last word and the mark share a no-wrap span.
 *
 * `heading` applies the rules of `typesetHeading` instead of `typeset`.
 * `wrap` styles the copy but not the mark, e.g. a serif accent.
 */
export function typesetWithTail(
  text: string,
  lang: Lang,
  tail: ReactNode,
  {
    heading,
    wrap = (copy) => copy,
  }: { heading?: HeadingKeep; wrap?: (copy: ReactNode) => ReactNode } = {},
): ReactNode {
  const set = setFor(text, lang);
  // the last ordinary space: a no-break one already holds its words together
  const cut = set.lastIndexOf(" ") + 1;
  return (
    <>
      {cut ? wrap(keepFor(set.slice(0, cut), lang, heading)) : null}
      <span className="whitespace-nowrap">
        {wrap(keepFor(set.slice(cut), lang, heading))}
        {tail}
      </span>
    </>
  );
}

/**
 * Classes for Russian copy in a narrow grid cell, such as a stat label 124 px
 * wide at 320 px: a word longer than the cell, «производительность», is
 * hyphenated there (the page's lang attribute picks the dictionary), and
 * breaks anywhere where the browser has no dictionary rather than overflow.
 * Only words of 12 letters and more are hyphenated.
 */
export function narrowCell(lang: Lang): string {
  return lang === "ru" ? "hyphens-auto [hyphenate-limit-chars:12_5_4] break-words" : "";
}

/**
 * The space between a heading's main words and its serif accent. Russian
 * mains can end on a short word — «Цифры, а не» + «обещания», «…первые 15
 * месяцев в» + «поиске Google» — which must not be left at the end of a line.
 */
export function joint(main: string, lang: Lang): string {
  return lang === "ru" && typesetRu(`${main} x`).endsWith(`${NBSP}x`) ? NBSP : " ";
}
