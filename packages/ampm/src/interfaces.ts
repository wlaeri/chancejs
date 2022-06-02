export interface AmpmOptions {}

export interface AmpmGeneratorFunction {
  /**
   * Return am or pm.
   *
   * @param { AmpmOptions} [options={}]
   * @param {number} [seed] A numeric seed to pass to the pseudo-random number generator.
   * @return { string }
   * @example
   * // returns am
   * ampm()
   * 
   * // returns pm
   * ampm()
   */
  (options?: AmpmOptions, seed?: number): string;
}

export interface IAmpmGenerator {
  ampm: AmpmGeneratorFunction;
}
