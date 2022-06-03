export interface MillisecondOptions {}

export interface MillisecondGeneratorFunction {
  /**
   * Return a random millisecond.
   *
   * @param { MillisecondOptions} [options={}]
   * @param {number} [seed] A numeric seed to pass to the pseudo-random number generator.
   * @return { number }
   * @example
   * // returns 653
   * millisecond()
   */
  (options?: MillisecondOptions, seed?: number): number;
}

export interface IMillisecondGenerator {
  millisecond: MillisecondGeneratorFunction;
}
