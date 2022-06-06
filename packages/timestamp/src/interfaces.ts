export interface TimestampOptions {}

export interface TimestampGeneratorFunction {
  /**
   * Return a random timestamp.
   *
   * @param { TimestampOptions} [options={}]
   * @param {number} [seed] A numeric seed to pass to the pseudo-random number generator.
   * @return { number }
   * @example
   * // returns 576556683
   * timestamp()
   */
  (options?: TimestampOptions, seed?: number): number;
}

export interface ITimestampGenerator {
  timestamp: TimestampGeneratorFunction;
}
