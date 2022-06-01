import { times } from "@chancejs/generator";
import { word } from "./function";

describe("::Text ::word()", () => {
  describe("When pass syllables and length to word", () => {
    it("returns error", () => {
      const fn = () => word({ syllables: 3, length: 20 })
      expect(fn).toThrow('Chance: Cannot specify both syllables AND length.')
    });
  });
  describe("When executes word without arguments", () => {
    it("returns correct result", () => {
      times(1000, () => {
        let w = word()
        expect(typeof w).toEqual("string")
        expect(w.length > 1).toEqual(true)
        expect(w.length < 10).toEqual(true)
      })
    });
  });
  describe("When executes word with capitalize option", () => {
    it("returns correct result", () => {
      times(1000, () => {
        let w = word({capitalize: true})
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
        let w = word({syllables: 3})
        expect(typeof w).toEqual("string")
        expect(w.length > 5).toEqual(true)
        expect(w.length < 10).toEqual(true)
      })
    });
  });
  describe("When executes word with length option", () => {
    it("returns correct result", () => {
      times(1000, () => {
        let w = word({length: 5})
        expect(typeof w).toEqual("string")
        expect(w.length === 5).toEqual(true)
      })
    });
  });
});