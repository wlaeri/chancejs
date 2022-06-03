export interface HourOptions {
  twentyfour?: boolean;
  min?: number;
  max?: number;
}

export interface HourGeneratorFunction {
  /**
   * Return a random hour.
   *
   * @param { HourOptions} [options={}]
   * @param options.max - its represents max value that hour can have
   * @param options.min - its represents min value that hour can have
   * @param options.twentyfour - its a boolean that represents with hour is in twentyfour clock format(between 0 and 23 hours)
   * @param {number} [seed] A numeric seed to pass to the pseudo-random number generator.
   * @return { number }
   * @example
   * // returns 9
   * hour()
   * 
   * // returns 15
   * hour({twentyfour: true})
   * 
   * // returns 6
   * hour({min: 5, max: 8})
   */
  (options?: HourOptions, seed?: number): number;
}

export interface IHourGenerator {
  hour: HourGeneratorFunction;
}
