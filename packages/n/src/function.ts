import { NGenerator } from "./generator";
import { NOptions, RandomFunction } from "./interfaces";

export const n = <FN extends RandomFunction>(
  options: NOptions<FN>,
  seed?: number
): Array<ReturnType<FN>> => {
  const nGenerator = new NGenerator({ seed });
  return nGenerator.n(options);
};
