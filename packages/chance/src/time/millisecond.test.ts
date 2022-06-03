import { times } from "@chancejs/generator";
import Chance from "..";

describe("::Chance ::Time ::#millisecond", () => {
  let chance: Chance;
  beforeEach(() => {
    chance = new Chance();
  });
  it("returns correct result", () => {
    times(1000, () => {
      let m = chance.millisecond();
      expect(typeof m).toBe("number");
      expect(m <= 999).toBe(true);
    });
  });
});
