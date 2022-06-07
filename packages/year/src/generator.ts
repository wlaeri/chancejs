import { natural } from "@chancejs/natural";
import { Generator } from "@chancejs/generator";
import { YearOptions, IYearGenerator } from "./interfaces";

export class YearGenerator extends Generator implements IYearGenerator {
  public year(options: YearOptions = {}): string {
    const { min, max } = options;
    const minYear = min ?? new Date().getFullYear();
    const maxYear = max ?? minYear + 100;

    this.testRange(
      minYear > maxYear,
      "Chance: Min cannot be greater than Max."
    );
    return natural({min: minYear, max: maxYear}).toString();
  }

  private testRange(test: boolean, errorMessage: string) {
    if (test) {
      throw new RangeError(errorMessage);
    }
  }
}
