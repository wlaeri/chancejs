import { times } from "@chancejs/generator";
import { millisecond } from "./function";

describe("::Time ::millisecond()", () => {
  it("returns correct result", () => {
    times(1000, () => {
      let m = millisecond();
      expect(typeof m).toBe("number");
      expect(m <= 999).toBe(true);
    })
  });
});
