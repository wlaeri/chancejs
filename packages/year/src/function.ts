import { YearGenerator } from "./generator";
import { YearGeneratorFunction, YearOptions } from "./interfaces";

export const year: YearGeneratorFunction = (
  options?: YearOptions,
  seed?: number
): string => {
  const yearGenerator = new YearGenerator({ seed });
  return yearGenerator.year(options);
};
