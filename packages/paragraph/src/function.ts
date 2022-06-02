import { ParagraphGenerator } from "./generator";
import { ParagraphGeneratorFunction, ParagraphOptions } from "./interfaces";

export const paragraph: ParagraphGeneratorFunction = (
  options?: ParagraphOptions,
  seed?: number
): string => {
  const paragraphGenerator = new ParagraphGenerator({ seed });
  return paragraphGenerator.paragraph(options);
};
