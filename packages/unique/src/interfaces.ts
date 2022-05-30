export type RandomFunction = (...args: any[]) => any;

export interface UniqueOptions <FN extends RandomFunction>{
  fn: FN;
  args?: Parameters<FN>;
  n?:number;
  comparator?: (array: Array<ReturnType<FN>>, value: ReturnType<FN>) => boolean;
}

/**
   * Return an array of items where none repeat and also random.
   *
   * @param { UniqueOptions} options
   * @param {UniqueOptions} options.fn - it represents the random function
   * @param {Parameters<FN>} options.args - it represents the arguments for fn(random function).
   * @param {UniqueOptions} options.n - it represents the quantity of items that array will have.
   * @param {UniqueOptions} options.comparator - it represents the function that will comparate if item is already in the list
   * @param {number} [seed] A numeric seed to pass to the pseudo-random number generator.
   * @return { Array }
   * @example
   * // returns Array
   * unique()
*/
export type UniqueGeneratorFunction = <FN extends RandomFunction>(options: UniqueOptions<FN>, seed?: number) => Array<ReturnType<FN>>;

export interface IUniqueGenerator {
  unique: UniqueGeneratorFunction;
}
