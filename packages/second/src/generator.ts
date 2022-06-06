import { natural } from "@chancejs/natural";
import { Generator } from "@chancejs/generator";
import { SecondOptions, ISecondGenerator } from "./interfaces";

export class SecondGenerator extends Generator implements ISecondGenerator {
  public second(options: SecondOptions = {}): number {
    const { min, max } = options;

    const minSecond = min ?? 0;
    const maxSecond = max ?? 59;

    this.testRange(minSecond < 0 || minSecond > 59, "Chance: Min cannot be less than 0 or it be greater than 59.");
    this.testRange(maxSecond < 0 || maxSecond > 59, "Chance: Max cannot be less than 0 or it be greater than 59.");
    this.testRange(
      minSecond > maxSecond,
      "Chance: Min cannot be greater than Max."
    );

    return natural({ min: minSecond, max: maxSecond });
  }
  private testRange(test: boolean, errorMessage: string) {
    if (test) {
      throw new RangeError(errorMessage);
    }
  }
}
