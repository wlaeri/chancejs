export interface ParagraphOptions {
  sentences?: number;
  linebreak?: boolean;
}

export interface ParagraphGeneratorFunction {
  /**
   * Return a random paragraph generated from sentences populated by semi-pronounceable random (nonsense) words.
   *
   * @param { ParagraphOptions} [options={}]
   * @param options.sentences - represents the number of sentences that your paragraph will have
   * @param options.linebreak - represents if your paragraph will have \n instead of ' ' between the sentences.
   * @param {number} [seed] A numeric seed to pass to the pseudo-random number generator.
   * @return { string }
   * @example
   * //Examples
   * //returns 'Lel fi huepe jupu akse zej ire vesik kojvulom zon is biwuwkef pa. Uv hokiv...'
   * paragraph()
   * 
   * //returns 'Idefeulo foc omoemowa wahteze liv juvde puguprof epehuji upuga zige odfe igo sit pilamhul oto ukurecef.'
   * paragraph({ sentences: 1 });
   *  
   * //returns 'Idefeulo foc omoemowa wahteze liv juvde puguprof epehuji upuga zige odfe igo sit pilamhul oto ukurecef. \n Aps ... \n'
   * paragraph({ linebreak: true });
   */
  (options?: ParagraphOptions, seed?: number): string;
}

export interface IParagraphGenerator {
  paragraph: ParagraphGeneratorFunction;
}
