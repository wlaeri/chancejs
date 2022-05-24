import { PickSetGenerator } from "./generator";
import { PickSetOptions } from "./interfaces";

export const pickSet = <T,>(
  options?: PickSetOptions<T>,
  seed?: number
): Array<T> => {
  const picksetGenerator = new PickSetGenerator({ seed });
  return picksetGenerator.pickSet(options);
};
