export interface SecondOptions {
  min?:number;
  max?:number;
}

export interface SecondGeneratorFunction {
  /**
   * Return a random second.
   *
   * @param { SecondOptions} [options={}]
   * @param options.min - specify the minimum value that second can be generated. Default is 0.
   * @param options.max - specify the maximum value that second can be generated. Default is 59.
   * @param {number} [seed] A numeric seed to pass to the pseudo-random number generator.
   * @return { number }
   * @example
   * // returns 45
   * second()
   * 
   * // returns 35
   * second({min: 20, max: 50})
   */
  (options?: SecondOptions, seed?: number): number;
}

export interface ISecondGenerator {
  second: SecondGeneratorFunction;
}
