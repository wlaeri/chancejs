import { HourGenerator } from "./generator";
import { HourGeneratorFunction, HourOptions } from "./interfaces";

export const hour: HourGeneratorFunction = (
  options?: HourOptions,
  seed?: number
): number => {
  const hourGenerator = new HourGenerator({ seed });
  return hourGenerator.hour(options);
};
