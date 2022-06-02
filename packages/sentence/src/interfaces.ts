export interface SentenceOptions {}

export interface SentenceGeneratorFunction {
  /**
   * Return a random string.
   *
   * @param { SentenceOptions} [options={}]
   * @param {number} [seed] A numeric seed to pass to the pseudo-random number generator.
   * @return { string }
   * @example
   * // returns string
   * sentence()
   */
  (options?: SentenceOptions, seed?: number): string;
}

export interface ISentenceGenerator {
  sentence: SentenceGeneratorFunction;
}
