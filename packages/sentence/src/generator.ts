import { Generator } from "@chancejs/generator";
import { natural } from "@chancejs/natural";
import { n } from "@chancejs/n";
import { capitalize } from "@chancejs/capitalize";
import { word } from "@chancejs/word";
import { SentenceOptions, ISentenceGenerator } from "./interfaces";

export class SentenceGenerator extends Generator implements ISentenceGenerator {
  public sentence(options: SentenceOptions = {}): string {
    const {words, punctuation} = options;

    const wordsQuantity = words || natural({min: 12, max: 18});
    const wordsArray = n({fn: word, n: wordsQuantity});

    // Capitalize first letter of sentence
    const sentence = capitalize({word: wordsArray.join(' ')});
    const sentencePunctuation = punctuation && /^[\.\?;!:]$/.test(punctuation) ? punctuation : '.';

    return sentence+sentencePunctuation;
  }
}
