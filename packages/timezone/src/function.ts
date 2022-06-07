import { TimezoneGenerator } from "./generator";
import { TimezoneGeneratorFunction, TimezoneOptions, Timezone } from "./interfaces";

export const timezone: TimezoneGeneratorFunction = (
  options?: TimezoneOptions,
  seed?: number
): Timezone => {
  const timezoneGenerator = new TimezoneGenerator({ seed });
  return timezoneGenerator.timezone(options);
};
