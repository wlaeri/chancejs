import { natural } from "@chancejs/natural";
import { Generator } from "@chancejs/generator";
import { TimestampOptions, ITimestampGenerator } from "./interfaces";

export class TimestampGenerator extends Generator implements ITimestampGenerator {
  public timestamp(options?: TimestampOptions): number {
    return natural({min: 1, max: Math.floor((new Date()).getTime() / 1000)});
  }
}
