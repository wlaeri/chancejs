export type RandomFunction = (...args: any[]) => any;

export interface NOptions<FN extends RandomFunction> {
  fn: FN;
  n?: number;
  args?: Parameters<FN>;
}

 /**
   * Return an array with n random terms
   * @param {NOptions} options
   * @param {NOptions} options.fn - it represents the random function
   * @param {NOptions} options.n - it represents the quantity of items that array will have.
   * @param {Parameters<FN>} options.args - it represents the arguments for fn(random function).
   * @param {number} [seed] A numeric seed to pass to the pseudo-random number generator.
   * @return {Array<Any>}
   * @example
   * // returns [1,5,6,4,6,8,9,10,2,3];
   * let chance = new Chance();
   * n({fn: chance.natural, n: 10, args: [{min: 1, max:10}]});
   * @example
   * // returns [62];
   * let chance = new Chance();
   * n({fn: chance.natural, args: [{min: 1, max:100}]});
   * @example
   * // returns [];
   * let chance = new Chance();
   * n({fn: chance.natural, n: 0);
   */
export type NGeneratorFunction = <FN extends RandomFunction>(options: NOptions<FN>, seed?: number) => Array<ReturnType<FN>>;

export interface INGenerator {
  n: NGeneratorFunction;
}
