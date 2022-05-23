import { Generator } from "@chancejs/generator";
import { PadOptions, IPadGenerator } from "./interfaces";

export class PadGenerator extends Generator implements IPadGenerator {
  public pad(options: PadOptions): string {
    const {number, length, padding} = options;
    // Default pad to 0 if none provided
    const pad = padding || '0';
    // Convert number to a string
    const numberToString = number + '';
    return numberToString.length >= length ? numberToString 
    : new Array(length - numberToString.length + 1).join(pad) + number;
  }
}
