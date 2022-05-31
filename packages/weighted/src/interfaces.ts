export interface WeightedOptions <T>{
  array: Array<T>;
  weights: Array<number>;
  trim?: boolean;
}

 /**
   * Return a random T.
   *
   * @param { WeightedOptions} [options={}]
   * @param {number} [seed] A numeric seed to pass to the pseudo-random number generator.
   * @return { T }
   * @example
   * // returns T
   * weighted()
   */
export type WeightedGeneratorFunction = <T>(options: WeightedOptions<T>, seed?: number) => T | T[];

export interface IWeightedGenerator {
  weighted: WeightedGeneratorFunction;
}
