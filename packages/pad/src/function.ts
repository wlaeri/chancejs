import { PadGenerator } from "./generator";
import { PadGeneratorFunction, PadOptions } from "./interfaces";

export const pad: PadGeneratorFunction = (
  options: PadOptions,
  seed?: number
): string => {
  const padGenerator = new PadGenerator({ seed });
  return padGenerator.pad(options);
};
