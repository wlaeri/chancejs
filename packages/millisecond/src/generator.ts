import { Generator } from "@chancejs/generator";
import { natural } from "@chancejs/natural";
import { MillisecondOptions, IMillisecondGenerator } from "./interfaces";

export class MillisecondGenerator extends Generator implements IMillisecondGenerator {
  public millisecond(options?: MillisecondOptions): number {
    return natural({max: 999});
  }
}
