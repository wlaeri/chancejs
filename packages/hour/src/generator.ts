import { Generator } from "@chancejs/generator";
import { natural } from "@chancejs/natural";
import { HourOptions, IHourGenerator } from "./interfaces";

export class HourGenerator extends Generator implements IHourGenerator {
  public hour(options: HourOptions = {}): number {
    const { twentyfour, min, max } = options;
    
    const clockType = twentyfour ? 'twentyfour' : 'twelve';
    const clockValues = {
      twentyfour: {
        min: 0,
        max: 23
      },
      twelve: {
        min: 0,
        max: 11
      },
    };

    const standardClock = clockValues[clockType];
    const minHour = min ?? standardClock.min;
    const maxHour = max ?? standardClock.max;
    
    this.testRange(minHour < standardClock.min ||
                   maxHour < standardClock.min ||
                   minHour > standardClock.max ||
                   maxHour > standardClock.max, 
                   "Chance: Min and Max values must be in clock interval.");
    this.testRange(
      minHour > maxHour,
      "Chance: Min cannot be greater than Max."
    );

    return natural({ min: minHour, max: maxHour });
  }

  private testRange(test: boolean, errorMessage: string) {
    if (test) {
      throw new RangeError(errorMessage);
    }
  }
}
