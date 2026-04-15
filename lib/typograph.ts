const NBSP = '\u00A0';

// Service words that should not hang at line ends (Russian typographic rules)
const SERVICE_WORDS =
  'чтобы|тоже|либо|если|уже|или|как|чем|вот|для|без|про|при|обо|изо|уж|то|ну|до|бы|ли|ни|же|да|об|по|от|со|ко|из|за|но|на|не|во|у|с|о|к|и|в|а';

const TYPOGRAPH_RE = new RegExp(
  `(^|\\s)(${SERVICE_WORDS}) `,
  'gi'
);

/**
 * Replaces a regular space after Russian service words with a non-breaking
 * space so they never hang alone at the end of a line.
 *
 * Safe to call multiple times — idempotent because NBSP is not matched by \\s.
 * Does NOT mutate URLs, email addresses, or technical strings (they have no
 * trailing space after a service word by convention).
 */
export function typograph(text: string): string {
  if (!text || typeof text !== 'string') return text;
  return text.replace(TYPOGRAPH_RE, (_, before, word) => `${before}${word}${NBSP}`);
}
