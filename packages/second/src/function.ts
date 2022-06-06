import { SecondGenerator } from "./generator";
import { SecondGeneratorFunction, SecondOptions } from "./interfaces";

export const second: SecondGeneratorFunction = (
  options?: SecondOptions,
  seed?: number
): number => {
  const secondGenerator = new SecondGenerator({ seed });
  return secondGenerator.second(options);
};
