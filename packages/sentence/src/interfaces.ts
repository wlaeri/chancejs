export interface SentenceOptions {
  words?: number;
  punctuation?: string;
}

export interface SentenceGeneratorFunction {
  /**
   * Return a random sentence populated by semi-pronounceable random (nonsense) words.
   * The default number of words in sentence range from 12 to 18.
   * The default punctuation of sentence is '.'.
   *
   * @param { SentenceOptions} [options={}]
   * @param options.words - determine the number of words the sentence will have.
   * @param options.punctuation - determine the punctuation of sentence.
   * @param {number} [seed] A numeric seed to pass to the pseudo-random number generator.
   * @return { string }
   * @example
   * //Examples
   * 
   * // returns 'Witpevze mappos isoletu fo res bi geow pofin mu rupoho revzi utva ne.'
   * sentence();

   * // returns 'Waddik jeasmov cakgilta ficub up.'
   * sentence({ words: 5 });
   * 
   * // returns 'Witpevze mappos isoletu fo res bi geow pofin mu rupoho revzi utva ne?'
   * sentence({ punctuation: '?' });
   */
  (options?: SentenceOptions, seed?: number): string;
}

export interface ISentenceGenerator {
  sentence: SentenceGeneratorFunction;
}
