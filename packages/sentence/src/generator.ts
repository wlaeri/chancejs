import { Generator } from "@chancejs/generator";
import { SentenceOptions, ISentenceGenerator } from "./interfaces";

export class SentenceGenerator extends Generator implements ISentenceGenerator {
  public sentence(options?: SentenceOptions): string {
    // Function body goes here.
    // You should have access to your pseudo-random number generator via `this.generator()`.
  }
}
