export interface WeightedOptions <T>{
  array: Array<T>;
  weights: Array<number>;
  trim?: boolean;
}

 /**
   * Return a random value from array considering the weights for each variable.
   *
   * @param { WeightedOptions} options
   * @param { WeightedOptions} options.array - array containing the values
   * @param { WeightedOptions} options.weights - array containing the weights of values
   * @param { WeightedOptions} options.trim - it represents if return value will be in array
   * @param {number} [seed] A numeric seed to pass to the pseudo-random number generator.
   * @return { T | Array<T>}
   * @example
   * 
   * // returns 'a'
   * weighted({array: ['a', 'b'], weights: [100, 1]})
   * 
   * // returns ['a']
   * weighted({array: ['a', 'b'], weights: [100, 1], trim: true})
   */
export type WeightedGeneratorFunction = <T>(options: WeightedOptions<T>, seed?: number) => T | T[];

export interface IWeightedGenerator {
  weighted: WeightedGeneratorFunction;
}
