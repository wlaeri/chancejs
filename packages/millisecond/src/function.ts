import { MillisecondGenerator } from "./generator";
import { MillisecondGeneratorFunction, MillisecondOptions } from "./interfaces";

export const millisecond: MillisecondGeneratorFunction = (
  options?: MillisecondOptions,
  seed?: number
): number => {
  const millisecondGenerator = new MillisecondGenerator({ seed });
  return millisecondGenerator.millisecond(options);
};
