import { Generator } from "@chancejs/generator";
import { natural } from "@chancejs/natural";
import { MinuteOptions, IMinuteGenerator } from "./interfaces";

export class MinuteGenerator extends Generator implements IMinuteGenerator {
  public minute(options: MinuteOptions = {}): number {
    const { min, max } = options;
    const minMinute = min ?? 0;
    const maxMinute = max ?? 59;

    this.testRange(minMinute < 0, "Chance: Min cannot be less than 0.");
    this.testRange(maxMinute > 59, "Chance: Max cannot be greater than 59.");
    this.testRange(minMinute > maxMinute, "Chance: Min cannot be greater than Max.");

    return natural({ min: minMinute, max: maxMinute });
  }

  private testRange(test: boolean, errorMessage: string) {
    if (test) {
      throw new RangeError(errorMessage);
    }
  }
}
