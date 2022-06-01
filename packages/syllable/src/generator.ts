import { Generator } from "@chancejs/generator";
import { natural } from "@chancejs/natural";
import { character } from "@chancejs/character";
import { capitalize } from "@chancejs/capitalize";
import { SyllableOptions, ISyllableGenerator } from "./interfaces";

export class SyllableGenerator extends Generator implements ISyllableGenerator {
  public syllable(options: SyllableOptions = {}): string {
    const {length, capitalize: shouldCapitalize} = options;
    const syllableLength = length ?? natural({ min: 2, max: 3 });
    const consonants = "bcdfghjklmnprstvwz", // consonants except hard to speak ones
      vowels = "aeiou", // vowels
      all = consonants + vowels; // all

    const syllable = this.range(syllableLength).reduce(
      (syllable, _, index) => {
        if (index === 0) {
          // First character can be anything
          return syllable+character({ pool: all });
        } else if (consonants.indexOf(syllable[index-1]) === -1) {
          // Last character was a vowel, now we want a consonant
          return syllable+character({ pool: consonants });
        } else {
          // Last character was a consonant, now we want a vowel
          return syllable+character({ pool: vowels });
        }
      },
      ""
    );
    
    return !shouldCapitalize? syllable : capitalize({word: syllable})
  }

  private range(size: number): Array<number> {
    return Array.from({ length: size }, (_, index) => index);
  }
}
