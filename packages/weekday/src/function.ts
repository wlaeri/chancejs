import { WeekdayGenerator } from "./generator";
import { WeekdayGeneratorFunction, WeekdayOptions } from "./interfaces";

export const weekday: WeekdayGeneratorFunction = (
  options?: WeekdayOptions,
  seed?: number
): string => {
  const weekdayGenerator = new WeekdayGenerator({ seed });
  return weekdayGenerator.weekday(options);
};
