import { Generator } from "@chancejs/generator";
import { n } from "@chancejs/n";
import { natural } from "@chancejs/natural";
import { sentence } from "@chancejs/sentence";
import { ParagraphOptions, IParagraphGenerator } from "./interfaces";

export class ParagraphGenerator extends Generator implements IParagraphGenerator {
  public paragraph(options: ParagraphOptions = {}): string {
    const { sentences, linebreak } = options;
    const sentencesQuantity = sentences || natural({min: 3, max: 7}),
    sentencesArray = n({fn: sentence, n: sentencesQuantity});
    const separator = linebreak ? '\n' : ' ';
    return sentencesArray.join(separator);
  }
}
