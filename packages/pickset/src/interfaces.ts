export interface PickSetOptions<T> {
  array: T[];
  count?: number;
}

/**
 * Return a set of random elements from array with length of count.
 *
 * @param { PickSetOptions} [options={}]
 * @param {number} [seed] A numeric seed to pass to the pseudo-random number generator.
 * @return { array }
 * @example
 * // returns [4, 2, 5]
 * pickset({array: [1, 2, 3, 4, 5], count: 3})
 */
export type PickSetGeneratorFunction = <T>(
  options?: PickSetOptions<T>,
  seed?: number
) => Array<T>;

export interface IPickSetGenerator {
  pickSet: PickSetGeneratorFunction;
}
