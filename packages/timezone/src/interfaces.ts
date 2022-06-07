export type Timezone = {
  name:string;
  abbr:string;
  offset:number;
  isdst:boolean;
  text:string;
  utc?: Array<String>;
};

export interface TimezoneOptions {}

export interface TimezoneGeneratorFunction {
  /**
   * Return a random timezone.
   *
   * @param { TimezoneOptions} [options={}]
   * @param {number} [seed] A numeric seed to pass to the pseudo-random number generator.
   * @return { Timezone }
   * @example
   * // returns
   * {
      "name": "Dateline Standard Time",
      "abbr": "DST",
      "offset": -12,
      "isdst": false,
      "text": "(UTC-12:00) International Date Line West",
      "utc": ["Etc/GMT+12"]
    } 
   * timezone()
   */
  (options?: TimezoneOptions, seed?: number): Timezone;
}

export interface ITimezoneGenerator {
  timezone: TimezoneGeneratorFunction;
}
