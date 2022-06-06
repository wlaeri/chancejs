import { TimestampGenerator } from "./generator";
import { TimestampGeneratorFunction, TimestampOptions } from "./interfaces";

export const timestamp: TimestampGeneratorFunction = (
  options?: TimestampOptions,
  seed?: number
): number => {
  const timestampGenerator = new TimestampGenerator({ seed });
  return timestampGenerator.timestamp(options);
};
