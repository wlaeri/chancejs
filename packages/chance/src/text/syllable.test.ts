import { times } from "@chancejs/generator";
import Chance from "..";

describe("::Chance ::Text ::#syllable", () => {
  let chance: Chance;
  beforeEach(() => {
    chance = new Chance();
  });

  it("returns a random syllable", () => {
    times(1000, () => {
      const s = chance.syllable();
      expect(typeof s).toBe("string");
      expect(s.length > 1).toBe(true);
      expect(s.length < 4).toBe(true);
    });
  });
  describe("when pass capitalize option", () => {
    it("returns correct result", () => {
      times(1000, () => {
        const s = chance.syllable({ capitalize: true });
        expect(typeof s).toBe("string");
        expect(s.length > 1).toBe(true);
        expect(s.length < 4).toBe(true);
        expect(s).toMatch(/[A-Z]/);
      });
    });
  });
  describe("when pass length option", () => {
    it("returns correct result", () => {
      const s = chance.syllable({ length: 6 });
      expect(typeof s).toBe("string");
      expect(s.length == 6).toBe(true);
    });
  });
});
