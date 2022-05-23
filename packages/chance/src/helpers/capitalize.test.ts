import { times } from "@chancejs/generator";
import Chance from "..";

describe("::Chance ::Helpers ::capitalize()", () => {
  let chance: Chance;
  beforeEach(() => {
    chance = new Chance();
  });

  describe("when pass a string to capitalize", () => {
    it("returns a string with first letter capitalized", () => {
      const word = chance.capitalize({ word: "word" });
      expect(typeof word).toBe("string");
      expect(word).toMatch(/[A-Z]/);
      // times(1000, () => {
      //   const word = capitalize(word());
      //   expect(typeof word).toBe(string);
      //   expect(word).toMatch(/[A-Z]/);
      // })
    });
  });
});
