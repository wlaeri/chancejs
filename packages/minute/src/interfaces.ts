export interface MinuteOptions {
  min?: number;
  max?: number;
}

export interface MinuteGeneratorFunction {
  /**
   * Return a random minute.
   *
   * @param { MinuteOptions} [options={}]
   * @param options.min - specify the minimum value that minute can be generated. Default is 0.
   * @param options.max - specify the maximum value that minute can be generated. Default is 59.
   * @param {number} [seed] A numeric seed to pass to the pseudo-random number generator.
   * @return { number }
   * @example
   * 
   * // returns 54
   * minute()
   * 
   * // returns 30
   * minute({min: 20, max: 40})
   */
  (options?: MinuteOptions, seed?: number): number;
}

export interface IMinuteGenerator {
  minute: MinuteGeneratorFunction;
}
