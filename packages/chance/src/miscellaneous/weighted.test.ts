import { times } from "@chancejs/generator";
import Chance from "..";

describe("::Chance ::Miscellaneous ::#weighted", () => {
  let chance: Chance;
  beforeEach(() => {
    chance = new Chance();
  });

  describe("when trim is false", () => {
    it("returns an element", () => {
      times(1000, () => {
        let picked = chance.weighted({
          array: ["a", "b", "c", "d"],
          weights: [1, 1, 1, 1],
        });
        expect(typeof picked).toBe("string");
        expect(picked.length).toEqual(1);
      });
    });
  });
  describe("when trim is true", () => {
    it("returns an element with array", () => {
      times(1000, () => {
        let picked = chance.weighted({
          array: ["a", "b", "c", "d"],
          weights: [1, 1, 1, 1],
          trim: true,
        });
        expect(Array.isArray(picked)).toBe(true);
        expect(picked.length).toEqual(1);
      });
    });
  });
  describe("when chance.weighted works with just 2 items", () => {
    it("returns correct ratio", () => {
      let picked = { a: 0, b: 0 };
      times(50000, () => {
        picked[
          chance.weighted({
            array: ["a", "b"],
            weights: [1, 100],
          }) as keyof typeof picked
        ]++;
      });
      let ratio = picked.b / picked.a;
      expect(ratio > 80).toBe(true);
      expect(ratio < 120).toEqual(true);
    });
    describe("change weight order", () => {
      it("returns correct ratio", () => {
        let picked = { a: 0, b: 0 };
        times(50000, () => {
          picked[
            chance.weighted({
              array: ["a", "b"],
              weights: [100, 1],
            }) as keyof typeof picked
          ]++;
        });
        let ratio = picked.a / picked.b;
        expect(ratio > 80).toBe(true);
        expect(ratio < 120).toEqual(true);
      });
    });
  });
  describe("when chance.weighted works with just 4 items", () => {
    it("returns good ratios", () => {
      let picked = { a: 0, b: 0, c: 0, d: 0 };
      times(50000, () => {
        picked[
          chance.weighted({
            array: ["a", "b", "c", "d"],
            weights: [1, 100, 100, 1],
          }) as keyof typeof picked
        ]++;
      });
      // This range is somewhat arbitrary, but good enough to test our constraints
      let baRatio = picked.b / picked.a;
      expect(baRatio > 60).toBe(true);
      expect(baRatio < 140).toEqual(true);

      let cdRatio = picked.c / picked.d;
      expect(cdRatio > 60).toBe(true);
      expect(cdRatio < 140).toEqual(true);

      let cbRatio = (picked.c / picked.b) * 100;
      expect(cbRatio > 50).toBe(true);
      expect(cbRatio < 150).toEqual(true);
    });
  });
  describe("when chance.weighted works with fractional weights", () => {
    it("returns good ratios", () => {
      let picked = { a: 0, b: 0, c: 0, d: 0 };
      times(50000, () => {
        picked[
          chance.weighted({
            array: ["a", "b", "c", "d"],
            weights: [0.001, 0.1, 0.1, 0.001],
          }) as keyof typeof picked
        ]++;
      });
      // This range is somewhat arbitrary, but good enough to test our constraints
      let baRatio = picked.b / picked.a;
      expect(baRatio > 60).toBe(true);
      expect(baRatio < 140).toEqual(true);

      let cdRatio = picked.c / picked.d;
      expect(cdRatio > 60).toBe(true);
      expect(cdRatio < 140).toEqual(true);

      let cbRatio = (picked.c / picked.b) * 100;
      expect(cbRatio > 50).toBe(true);
      expect(cbRatio < 150).toEqual(true);
    });
  });
  describe("when weights contains 0", () => {
    it("doesn't return value with weight 0", () => {
      times(1000, () => {
        const picked = chance.weighted({
          array: ["a", "b", "c", "d"],
          weights: [1, 0, 1, 1],
        });
        expect(typeof picked).toBe("string");
        expect(picked !== "b").toEqual(true);
      });
    });
  });
  describe("when weights contains a negative number", () => {
    it("doesn't return value with negative weight", () => {
      times(1000, () => {
        const picked = chance.weighted({
          array: ["a", "b", "c", "d"],
          weights: [1, -3, 1, 1],
        });
        expect(typeof picked).toBe("string");
        expect(picked !== "b").toEqual(true);
      });
    });
  });
  describe("when length of weights and array differ", () => {
    it("throws error", () => {
      const fn = () =>
        chance.weighted({
          array: ["a", "b", "c", "d"],
          weights: [1, 2, 3],
          trim: true,
        });
      expect(fn).toThrow("Chance: Length of array and weights must match");
    });
  });
  describe("when weights only has 0", () => {
    it("throws error", () => {
      const fn = () =>
        chance.weighted({
          array: ["a", "b", "c", "d"],
          weights: [0, 0, 0, 0],
          trim: true,
        });
      expect(fn).toThrow("Chance: No valid entries in array weights");
    });
  });
  describe("when weights contains NaN", () => {
    it("throws error", () => {
      const fn = () =>
        chance.weighted({
          array: ["a", "b", "c", "d"],
          weights: [1, NaN, 1, 1],
        });
      expect(fn).toThrow("Chance: All weights must be numbers");
    });
  });

});