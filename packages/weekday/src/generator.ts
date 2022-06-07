import { pickOne } from "@chancejs/pickone";
import { Generator } from "@chancejs/generator";
import { WeekdayOptions, IWeekdayGenerator } from "./interfaces";

export class WeekdayGenerator extends Generator implements IWeekdayGenerator {
  public weekday(options: WeekdayOptions = {}): string {
    const shouldOnlyWeekDays = options?.weekdayOnly ?? false;
    const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    const weekend = ["Saturday", "Sunday"];
    const week = shouldOnlyWeekDays? weekdays : [...weekdays, ...weekend];   
    return pickOne({array: week});
  }
}
