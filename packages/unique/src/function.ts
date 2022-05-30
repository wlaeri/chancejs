import { UniqueGenerator } from "./generator";
import { RandomFunction, UniqueOptions } from "./interfaces";

export const unique = <FN extends RandomFunction>(
  options: UniqueOptions<FN>,
  seed?: number
): Array<ReturnType<FN>> => {
  const uniqueGenerator = new UniqueGenerator({ seed });
  return uniqueGenerator.unique(options);
};
