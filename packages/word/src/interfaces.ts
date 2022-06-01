export interface WordOptions {
  syllables?: number;
  length?: number;
  capitalize?: boolean;
}

export interface WordGeneratorFunction {
  /**
   * Return a random semi-speakable word.
   *
   * @param { WordOptions} [options={}]
   * @param options.length - determine the length of word
   * @param options.syllables - number of syllables that word will have
   * @param options.capitalize - transform syllable into capitalize word
   * @param {number} [seed] A numeric seed to pass to the pseudo-random number generator.
   * @return { string }
   * @example
   * //Example
   * // returns 'bappada'
   * word();
   * //returns 'tavnamgi'
   * word({ syllables: 3 });
   * 
   * //Example
   * //returns 'ralve' 
   * word({ length: 5 });
   * 
   * //Example
   * // returns 'Bappada'
   * word({capitalize: true});
   */
  (options?: WordOptions, seed?: number): string;
}

export interface IWordGenerator {
  word: WordGeneratorFunction;
}
