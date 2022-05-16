import { CapitalizeGenerator } from "./generator";
import { CapitalizeGeneratorFunction, CapitalizeOptions } from "./interfaces";

export const capitalize: CapitalizeGeneratorFunction = (
  options: CapitalizeOptions,
  seed?: number
): string => {
  const capitalizeGenerator = new CapitalizeGenerator({ seed });
  return capitalizeGenerator.capitalize(options);
};
