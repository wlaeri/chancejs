import { ShuffleGenerator } from "./generator";
import { ShuffleOptions } from "./interfaces";

export const shuffle = <T,>(
  options: ShuffleOptions<T>,
  seed?: number
) : T[] => {
  const shuffleGenerator = new ShuffleGenerator({seed});
  return shuffleGenerator.shuffle(options);
};
