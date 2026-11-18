/**
 * Rough BPE-style token count for the `x-markdown-tokens` hint.
 *
 * Agents use the header to budget context before reading the body, so an
 * estimate within a few percent is enough — not worth shipping a tokenizer
 * for. Words split into ~4-character pieces; punctuation counts as one token
 * each, which is how byte-pair encoders behave on English and Spanish prose.
 */
export function estimateTokens(text: string): number {
  const chunks = text.match(/[\p{L}\p{N}]+|[^\s\p{L}\p{N}]/gu);
  if (!chunks) return 0;

  let tokens = 0;
  for (const chunk of chunks) {
    tokens += chunk.length <= 4 ? 1 : Math.ceil(chunk.length / 4);
  }
  return tokens;
}
