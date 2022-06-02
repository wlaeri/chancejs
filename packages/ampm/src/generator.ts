import { Generator } from "@chancejs/generator";
import { bool } from "@chancejs/bool";
import { AmpmOptions, IAmpmGenerator } from "./interfaces";

export class AmpmGenerator extends Generator implements IAmpmGenerator {
  public ampm(options?: AmpmOptions): string {
    return bool() ? 'am' : 'pm';
  }
}
