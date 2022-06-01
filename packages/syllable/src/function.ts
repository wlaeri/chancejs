import { SyllableGenerator } from "./generator";
import { SyllableGeneratorFunction, SyllableOptions } from "./interfaces";

export const syllable: SyllableGeneratorFunction = (
  options?: SyllableOptions,
  seed?: number
): string => {
  const syllableGenerator = new SyllableGenerator({ seed });
  return syllableGenerator.syllable(options);
};
