import { times } from "@chancejs/generator";
import Chance from "..";

describe("::Chance ::Text ::#word", () => {
  let chance: Chance;
  beforeEach(() => {
    chance = new Chance();
  });

  describe("When pass syllables and length to word", () => {
    it("returns error", () => {
      const fn = () => chance.word({ syllables: 3, length: 20 })
      expect(fn).toThrow('Chance: Cannot specify both syllables AND length.')
    });
  });
  describe("When executes word without arguments", () => {
    it("returns correct result", () => {
      times(1000, () => {
        let w = chance.word()
        expect(typeof w).toEqual("string")
        expect(w.length > 1).toEqual(true)
        expect(w.length < 10).toEqual(true)
      })
    });
  });
  describe("When executes word with capitalize option", () => {
    it("returns correct result", () => {
      times(1000, () => {
        let w = chance.word({capitalize: true})
        expect(typeof w).toEqual("string")
        expect(w.length > 1).toEqual(true)
        expect(w.length < 10).toEqual(true)
        expect(w.charAt(0) === w.charAt(0).toUpperCase()).toEqual(true)
      })
    });
  });
  describe("When executes word with syllables option", () => {
    it("returns correct result", () => {
      times(1000, () => {
        let w = chance.word({syllables: 3})
        expect(typeof w).toEqual("string")
        expect(w.length > 5).toEqual(true)
        expect(w.length < 10).toEqual(true)
      })
    });
  });
  describe("When executes word with length option", () => {
    it("returns correct result", () => {
      times(1000, () => {
        let w = chance.word({length: 5})
        expect(typeof w).toEqual("string")
        expect(w.length === 5).toEqual(true)
      })
    });
  });
});
