import { SentenceGenerator } from "./generator";
import { SentenceGeneratorFunction, SentenceOptions } from "./interfaces";

export const sentence: SentenceGeneratorFunction = (
  options?: SentenceOptions,
  seed?: number
): string => {
  const sentenceGenerator = new SentenceGenerator({ seed });
  return sentenceGenerator.sentence(options);
};
