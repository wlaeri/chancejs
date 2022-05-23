import { Generator } from "@chancejs/generator";
import { natural } from "@chancejs/natural";
import { ShuffleOptions, IShuffleGenerator } from "./interfaces";

export class ShuffleGenerator extends Generator implements IShuffleGenerator {
  public shuffle<T,>(options: ShuffleOptions<T>): Array<T> {
    const { array } = options;
    const length = array.length;
    const sourceIndexes = this.range(length);

    return array.reduce((shuffledArray, _, index) => {
      const lastSourceIndex = length - index - 1;
      
      // Pick a random index from the array
      const selectedSourceIndex = natural({ max: lastSourceIndex });
      const j = sourceIndexes[selectedSourceIndex];

      // Mark the source index as used
      sourceIndexes[selectedSourceIndex] = sourceIndexes[lastSourceIndex];

      return [...shuffledArray, array[j]];
    }, Array<T>());
  }

  private range(size: number) : Array<number> {
    return Array.from({length: size}, (_, index) => index);
  }
}
