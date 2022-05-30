import { Generator } from "@chancejs/generator";
import { UniqueOptions, IUniqueGenerator, RandomFunction } from "./interfaces";

export class UniqueGenerator extends Generator implements IUniqueGenerator {
  public unique<FN extends RandomFunction>(
    options: UniqueOptions<FN>
  ): Array<ReturnType<FN>> {
    const { fn, n, args, comparator } = options;
    
    const standardComparator = <FN extends RandomFunction>(array: Array<ReturnType<FN>>, value: ReturnType<FN>) : boolean => {
      return array.indexOf(value) !== -1;
    };
    const uniqueComparator = comparator ?? standardComparator; 

    const arr = [];
    const desiredLength = (n ?? 1);
    const MAX_DUPLICATES = desiredLength * 50;
    
    let count = 0;

    while (arr.length < desiredLength) {
      const result = fn.apply(this, args ?? []);
      if (!uniqueComparator(arr, result)) {
        arr.push(result);
        // reset count when unique found
        count = 0;
      }

      if (++count > MAX_DUPLICATES) {
        throw new RangeError("Chance: n is likely too large for sample set");
      }
    }
    return arr;
  }
}
