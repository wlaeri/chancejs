export interface YearOptions {
  min?:number;
  max?:number;
}

export interface YearGeneratorFunction {
  /**
   * Return a random year.
   *
   * @param { YearOptions} [options={}]
   * @param options.min - specify the minimum value that year can be generated. Default is current year.
   * @param options.max - specify the maximum value that year can be generated. Default is one century after current year.
   * @param {number} [seed] A numeric seed to pass to the pseudo-random number generator.
   * @return { string }
   * @example
   * // returns '2084'
   * year()
   * 
   * // returns '2040'
   * year({min: 2022, max: 2050})
   */
  (options?: YearOptions, seed?: number): string;
}

export interface IYearGenerator {
  year: YearGeneratorFunction;
}
