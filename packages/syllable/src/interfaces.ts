export interface SyllableOptions {
  length?: number;
  capitalize?: boolean;
}

export interface SyllableGeneratorFunction {
  /**
   * Return a random semi-speakable syllable.
   *
   * @param { SyllableOptions} [options={}]
   * @param options.length - determine the length of syllable
   * @param options.capitalize - transform syllable into capitalize syllable
   * @param {number} [seed] A numeric seed to pass to the pseudo-random number generator.
   * @return { string }
   * @example
   * //Example
   * // returns 'bed'
   * syllable();
   * 
   * //Example
   * // returns 'bedaf'
   * syllable({length: 5});
   * 
   * //Example
   * // returns 'Bed'
   * syllable({capitalize: true});
   */
  (options?: SyllableOptions, seed?: number): string;
}

export interface ISyllableGenerator {
  syllable: SyllableGeneratorFunction;
}
