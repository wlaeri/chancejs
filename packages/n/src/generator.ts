import { Generator } from "@chancejs/generator";
import { NOptions, INGenerator, RandomFunction } from "./interfaces";

export class NGenerator extends Generator implements INGenerator {
  public n<FN extends RandomFunction>(options: NOptions<FN>): Array<ReturnType<FN>> {
    const { fn, n, args } = options;    

    const arrayLength = n ?? 1;
    const maxIndex = Math.max(0, arrayLength);
    const indexes = this.range(maxIndex);
    
    return indexes.reduce((resultArray, _) => {
      const value = fn.apply(this, args ?? []);
      return [...resultArray, value];
    }, [] as Array<ReturnType<FN>>);
  }

  private range(size: number): Array<number> {
    return Array.from({ length: size }, (_, index) => index);
  }
}
