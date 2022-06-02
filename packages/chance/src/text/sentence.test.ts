import { times } from "@chancejs/generator";
import Chance from "../../src/index";

describe("::Chance ::Text ::#sentence", () => {
  let chance: Chance;
  beforeEach(() => {
    chance = new Chance();
  });
  describe("When executes sentence without arguments", () => {
    it("returns correct result", () => {
      times(1000, () => {
        let s = chance.sentence();
        expect(typeof s).toBe("string");
        let len = s.split(" ").length;
        expect(len > 11).toBe(true);
        expect(len < 19).toBe(true);
      });
    });
  });
  describe("When executes sentence with words", () => {
    it("returns correct result", () => {
      times(1000, () => {
        let s = chance.sentence({ words: 5 });
        expect(typeof s).toBe("string");
        let len = s.split(" ").length;
        expect(len == 5).toBe(true);
        expect(
          /[a-zA-Z]+ [a-zA-Z]+ [a-zA-Z]+ [a-zA-Z]+ [a-zA-Z]+.?/m.test(s)
        ).toBe(true);
      });
    });
  });
  describe("When executes sentence with punctuation", () => {
    it("returns correct result", () => {
      times(1000, () => {
        let s = chance.sentence({ punctuation: "?" });
        expect(typeof s).toBe("string");
        expect(s.endsWith("?")).toBe(true);
      });
    });
  });
});
