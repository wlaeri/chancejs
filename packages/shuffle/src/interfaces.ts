export interface ShuffleOptions<T> {
  array: T[];
}

/**
 * Return a shuffled array.
 *
 * @param { ShuffleOptions} [options={}]
 * @param {number} [seed] A numeric seed to pass to the pseudo-random number generator.
 * @return { array }
 * @example
 * //returns ['echo', 'delta', 'alpha', 'charlie', 'bravo']
 * shuffle(array: ['alpha', 'bravo', 'charlie', 'delta', 'echo']);
 */
export type ShuffleGeneratorFunction = <T>(
  options: ShuffleOptions<T>,
  seed?: number
) => Array<T>;

export interface IShuffleGenerator {
  shuffle: ShuffleGeneratorFunction;
}
