import { Generator } from "@chancejs/generator";
import { pickOne } from "@chancejs/pickone";
import { MonthOptions, IMonthGenerator, Month, MonthOrName } from "./interfaces";

export class MonthGenerator extends Generator implements IMonthGenerator {
  public month<T extends boolean>(options: MonthOptions<T> = {}): MonthOrName<T> {
    const { min, max, raw } = options;
    const minMonth = min ?? 1;
    const maxMonth = max ?? 12;

    this.testRange(minMonth < 1 || minMonth > 12, "Chance: Min cannot be less than 1 or greater than 12.");
    this.testRange(maxMonth < 1 || maxMonth > 12, "Chance: Max cannot be less than 1 or greater than 12.");
    this.testRange(
      minMonth > maxMonth,
      "Chance: Min cannot be greater than Max."
    );
    
    const months = [
      { name: "January", shortName: "Jan", numeric: 1, days: 31 },
      // Not messing with leap years...
      { name: "February", shortName: "Feb", numeric: 2, days: 28 },
      { name: "March", shortName: "Mar", numeric: 3, days: 31 },
      { name: "April", shortName: "Apr", numeric: 4, days: 30 },
      { name: "May", shortName: "May", numeric: 5, days: 31 },
      { name: "June", shortName: "Jun", numeric: 6, days: 30 },
      { name: "July", shortName: "Jul", numeric: 7, days: 31 },
      { name: "August", shortName: "Aug", numeric: 8, days: 31 },
      { name: "September", shortName: "Sep", numeric: 9, days: 30 },
      { name: "October", shortName: "Oct", numeric: 10, days: 31 },
      { name: "November", shortName: "Nov", numeric: 11, days: 30 },
      { name: "December", shortName: "Dec", numeric: 12, days: 31 },
    ];

    const month : Month = pickOne({array: months.slice(minMonth - 1, maxMonth)});
    return raw ? <MonthOrName<T>>month : <MonthOrName<T>>month.name;
  }

  private testRange(test: boolean, errorMessage: string) {
    if (test) {
      throw new RangeError(errorMessage);
    }
  }
}
