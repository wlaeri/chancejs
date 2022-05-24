import { Generator } from "@chancejs/generator";
import { pickOne } from "@chancejs/pickone";
import { shuffle } from "@chancejs/shuffle";
import { PickSetOptions, IPickSetGenerator } from "./interfaces";

export class PickSetGenerator extends Generator implements IPickSetGenerator {
  public pickSet<T>(options?: PickSetOptions<T>): Array<T> {
    const { array, count } = options!;
    if (count === 0) {
      return [];
    }
    if (array.length === 0) {
      throw new RangeError("Chance: pickSet() cannot pick set from an empty array.");
    }
    if (count && count < 0) {
      throw new RangeError("Chance: count argument from pickSet() must be a non-negative number.");
    } 
    if (!count || count === 1) {
      return [pickOne({ array })];
    }

    return shuffle<T>({ array }).slice(0, count);
  }
}
