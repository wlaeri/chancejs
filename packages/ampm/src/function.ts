import { AmpmGenerator } from "./generator";
import { AmpmGeneratorFunction, AmpmOptions } from "./interfaces";

export const ampm: AmpmGeneratorFunction = (
  options?: AmpmOptions,
  seed?: number
): string => {
  const ampmGenerator = new AmpmGenerator({ seed });
  return ampmGenerator.ampm(options);
};
