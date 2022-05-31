import { WeightedGenerator } from "./generator";
import { WeightedOptions } from "./interfaces";

export const weighted = <T>(
  options: WeightedOptions<T>,
  seed?: number
): T | T[] => {
  const weightedGenerator = new WeightedGenerator({ seed });
  return weightedGenerator.weighted(options);
};
