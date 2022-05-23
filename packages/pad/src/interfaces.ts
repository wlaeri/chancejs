export interface PadOptions {
  number: number,
  length: number,
  padding?: string
}

export interface PadGeneratorFunction {
  /**
   * Return string with pad and number until it reaches a desired length.
   *
   * @param { PadOptions} [options={}]
   * @param {number} [seed] A numeric seed to pass to the pseudo-random number generator.
   * @return { string }
   * @example
   * //returns '00045'.
   * chance.pad({number: 45, length: 5});
   * //default pad is 0.
   * 
   * //returns 'ZZZ81'.
   * chance.pad({number: 81, length: 5, pad: 'Z'});
   * 
   * //returns '52859'
   * chance.pad({number: 52859, length: 5})
  */
   (options: PadOptions, seed?: number): string;
}

export interface IPadGenerator {
  pad: PadGeneratorFunction;
}
