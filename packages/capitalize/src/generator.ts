import { Generator } from "@chancejs/generator";
import { CapitalizeOptions, ICapitalizeGenerator } from "./interfaces";

export class CapitalizeGenerator extends Generator implements ICapitalizeGenerator {
  public capitalize(options: CapitalizeOptions): string {
    const {word} = options;
    return word.charAt(0).toUpperCase() + word.substring(1);
  }
}
