import { MinuteGenerator } from "./generator";
import { MinuteGeneratorFunction, MinuteOptions } from "./interfaces";

export const minute: MinuteGeneratorFunction = (
  options?: MinuteOptions,
  seed?: number
): number => {
  const minuteGenerator = new MinuteGenerator({ seed });
  return minuteGenerator.minute(options);
};
