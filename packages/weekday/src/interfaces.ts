export interface WeekdayOptions {
  weekdayOnly?:boolean;
}

export interface WeekdayGeneratorFunction {
  /**
   * Return a random day of week.
   *
   * @param { WeekdayOptions} [options={}]
   * @param options.weekdayOnly - when it is setted to true, only returns a random day from weekday.
   * @param {number} [seed] A numeric seed to pass to the pseudo-random number generator.
   * @return { string }
   * @example
   * 
   * // returns 'Friday'
   * weekday({weekdayOnly: true})
   * 
   * //returns 'Sunday'
   * weekday();
   */
  (options?: WeekdayOptions, seed?: number): string;
}

export interface IWeekdayGenerator {
  weekday: WeekdayGeneratorFunction;
}
