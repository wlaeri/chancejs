import { times } from "@chancejs/generator";
import Chance from "..";

describe("::Chance ::Time ::#ampm", () => {
  let chance: Chance;
  beforeEach(() => {
    chance = new Chance();
  });
  it("returns am or pm", () => {
    times(1000, () => {
      let result = chance.ampm();
      expect(typeof result).toBe("string");
      expect(/^([ap]m)$/m.test(result)).toBe(true);
    });
  });
});
