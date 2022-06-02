import { WordGenerator } from "./generator";
import { WordGeneratorFunction, WordOptions } from "./interfaces";

export const word: WordGeneratorFunction = (
  options?: WordOptions,
  seed?: number
): string => {
  const wordGenerator = new WordGenerator({ seed });
  return wordGenerator.word(options);
};
