import { Generator } from "@chancejs/generator";
import { WeightedOptions, IWeightedGenerator } from "./interfaces";

export class WeightedGenerator extends Generator implements IWeightedGenerator {
  public weighted<T>(options: WeightedOptions<T>): T | T[] {
    const { array, weights, trim } = options;

    if (array.length !== weights.length) {
      throw new RangeError("Chance: Length of array and weights must match");
    }

    const sum = weights.reduce((total, cv) => {
      if(!this.isNumeric(cv))
        throw new RangeError('Chance: All weights must be numbers');
      return cv > 0 ? total + cv : total;
    }, 0);

    if (sum === 0) {
      throw new RangeError("Chance: No valid entries in array weights");
    }

    // select a value within range
    const selected = this.generator() * sum;

    // find array entry corresponding to selected value
    const mapValueAndWeight = array.map((v, index) => {
      return {
        value: v,
        weight: weights[index],
      };
    }).filter((v) => v.weight > 0);
    const integralSum = mapValueAndWeight.map((_, index) => {
      return mapValueAndWeight.slice(0, index + 1).reduce((total, v) => total + v.weight, 0);
    });

    const chosenIdx = integralSum.findIndex((v) => v >= selected)

    const chosen = mapValueAndWeight[chosenIdx];

    return trim? [chosen.value] : chosen.value;
  }

  private isNumeric(value: number) : boolean {
    return !isNaN(value) && isFinite(value);
  }
}
