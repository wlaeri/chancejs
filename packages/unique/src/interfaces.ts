export type RandomFunction = (...args: any[]) => any;

export interface UniqueOptions <FN extends RandomFunction>{
  fn: FN;
  args?: Parameters<FN>;
  n?:number;
  comparator?: (array: Array<ReturnType<FN>>, value: ReturnType<FN>) => boolean;
}

/**
   * Return an array of random items where none repeat.
   *
   * @param { UniqueOptions} options
   * @param {UniqueOptions} options.fn - it represents the random function
   * @param {Parameters<FN>} options.args - it represents the arguments for fn(random function).
   * @param {UniqueOptions} options.n - it represents the quantity of items that array will have.
   * @param {UniqueOptions} options.comparator - it represents the function that will comparate if item is already in the list
   * @param {number} [seed] A numeric seed to pass to the pseudo-random number generator.
   * @return { Array }
   * 
   * @example
   * //returns ["SC", "WA", "CO", "TX", "ND"]
   * unique({fn: state, n: 5});
   * 
   * @example
   * import { unique, integer } from "chance";
   * //returns [78, 49, 7, 87, 59, 89, 84, 62, 60, 63]
   * unique({fn: integer, n: 10, args: [{min: 0, max: 100}]});
   * 
*/
export type UniqueGeneratorFunction = <FN extends RandomFunction>(options: UniqueOptions<FN>, seed?: number) => Array<ReturnType<FN>>;

export interface IUniqueGenerator {
  unique: UniqueGeneratorFunction;
}
