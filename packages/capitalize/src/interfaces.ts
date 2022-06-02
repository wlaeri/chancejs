export interface CapitalizeOptions {
  word: string;
}

export interface CapitalizeGeneratorFunction {
  /**
   * Return string with the first letter capitalized.
   *
   * @param { CapitalizeOptions} [options={}]
   * @param {number} [seed] A numeric seed to pass to the pseudo-random number generator.
   * @return { string }
   * @example
   * // returns Word
   * chance.capitalize({word: 'word'})
   */
  (options: CapitalizeOptions, seed?: number): string;
}

export interface ICapitalizeGenerator {
  capitalize: CapitalizeGeneratorFunction;
}
