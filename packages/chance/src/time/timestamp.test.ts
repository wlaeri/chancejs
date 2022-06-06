import { times } from "@chancejs/generator";
import Chance from "..";

describe("::Chance ::Time ::#timestamp", () => {
  let chance: Chance;
  beforeEach(() => {
    chance = new Chance();
  });
  it("returns correct result", () => {
    times(1000, () => {
      let ts = chance.timestamp();
      expect(typeof ts).toBe("number");
      expect(ts > 0).toBe(true);
      expect(ts <= Math.floor(new Date().getTime() / 1000)).toBe(true);
    });
  });
});
