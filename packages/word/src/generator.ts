import { Generator } from "@chancejs/generator";
import { natural } from "@chancejs/natural";
import { capitalize } from "@chancejs/capitalize";
import { syllable } from "@chancejs/syllable";
import { WordOptions, IWordGenerator } from "./interfaces";

export class WordGenerator extends Generator implements IWordGenerator {
  public word(options: WordOptions = {}): string {
    const { syllables, length, capitalize: shouldCapitalize } = options;
    if (syllables && length) {
      throw new RangeError("Chance: Cannot specify both syllables AND length.");
    }

    const syllablesQuantity = syllables || natural({ min: 1, max: 3 });
    const generateMethod = length ? "length" : "standard";

    const generateWord = {
      length: () => {
        let word = '';
        do {
          word += syllable();
        } while (word.length < length!);
        return word.substring(0, length);
      },
      standard: () =>
        this.range(syllablesQuantity).reduce((word, _) => {
          return word + syllable();
        }, ""),
    };

    const word = generateWord[generateMethod]();
    return shouldCapitalize ? capitalize({ word }) : word;
  }

  private range(size: number): Array<number> {
    return Array.from({ length: size }, (_, index) => index);
  }
}
