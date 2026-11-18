/**
 * Russian line breaking, the way a Russian typesetter sets a page: a short
 * preposition or conjunction never ends a line («в / Марбелье»), a particle
 * never starts one, a dash never starts one, and a number stays with the word
 * or unit after it («15 / месяцев», «от / 500 €»). Each rule swaps one space
 * for a no-break space, U+00A0 — the character lib/ru/ already uses inside
 * number expressions.
 *
 * It runs where the pages print copy (components/typeset.tsx), not on the
 * stored strings: the content files stay readable, every later edit is set
 * the same way, and the markdown and structured data keep their plain text.
 * English and Spanish copy is left as it is.
 */

const NBSP = " ";

// Prepositions, conjunctions and the negation, one to three letters, plus the
// two compound prepositions. Longest first, so "во" is not read as "в".
const SHORT_WORDS = [
  "из-за",
  "из-под",
  "без",
  "для",
  "или",
  "над",
  "обо",
  "под",
  "при",
  "про",
  "во",
  "да",
  "до",
  "за",
  "из",
  "ко",
  "на",
  "не",
  "ни",
  "но",
  "об",
  "от",
  "по",
  "со",
  "а",
  "в",
  "и",
  "к",
  "о",
  "с",
  "у",
].join("|");

// …followed by its next word. Never inside a word or after a hyphen, so the
// "за" of «из-за» is not taken for a word of its own.
const SHORT_BEFORE_WORD = new RegExp(`(?<![\\p{L}\\p{N}-])(${SHORT_WORDS})\\s+(?=\\S)`, "giu");

// particles lean on the word before them: «так же», «если бы»
const PARTICLE = /\s+(?=(?:же|ли|бы)(?![\p{L}\p{N}]))/giu;

// a spaced em or en dash closes the clause before it, so it may not open a line
const SPACE_BEFORE_DASH = /[ \t]+(?=[—–])/gu;

// "15 месяцев", "25+ проектов", "500 €", "27 %"
const NUMBER_BEFORE_WORD = /(\p{N}[+×%]?)[ \t]+(?=[\p{L}€%])/gu;

/** The Russian rules above, applied to one string. */
export function typesetRu(text: string): string {
  return text
    .replace(SHORT_BEFORE_WORD, `$1${NBSP}`)
    .replace(PARTICLE, NBSP)
    .replace(SPACE_BEFORE_DASH, NBSP)
    .replace(NUMBER_BEFORE_WORD, `$1${NBSP}`);
}
