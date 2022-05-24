import { pickSet } from "./function";
import { times } from "@chancejs/generator";

describe("::Chance ::pickSet()", () => {
  describe("When count is 0", () => {
    it("returns empty array", () => {
      const arr = ["a", "b", "c", "d"];
      times(1000, () => {
        const picked = pickSet({ array: arr, count: 0 });
        expect(picked.length).toEqual(0);
        expect(Array.isArray(picked)).toEqual(true);
      });
    });
  });
  describe("When array has 0 elements", () => {
    it("throws error", () => {
      const fn = () => pickSet({ array: [] });
      expect(fn).toThrow(
        "Chance: pickSet() cannot pick set from an empty array."
      );
    });
  });
  describe("When count isn't provided", () => {
    it("returns single element array", () => {
      const arr = ["a", "b", "c", "d"];
      times(1000, () => {
        const picked = pickSet({ array: arr });
        expect(picked.length).toEqual(1);
        expect(Array.isArray(picked)).toEqual(true);
      });
    });
  });
  describe("When count isn't positive number", () => {
    it("throws error", () => {
      const arr = ["a", "b", "c", "d"];
      const fn = () => pickSet({ array: arr, count: -1 });
      expect(fn).toThrow(
        "Chance: count argument from pickSet() must be a non-negative number."
      );
    });
  });
  describe("When count is 1", () => {
    it("returns single element array", () => {
      const arr = ["a", "b", "c", "d"];
      times(1000, () => {
        const picked = pickSet({ array: arr , count: 1});
        expect(picked.length).toEqual(1);
        expect(Array.isArray(picked)).toEqual(true);
      });
    });
  });
  describe("When count is > 1", () => {
    it("returns array with multiple elements", () => {
      const arr = ["a", "b", "c", "d"];
      times(1000, () => {
        const picked = pickSet({ array: arr , count: 3});
        expect(picked.length).toEqual(3);
        expect(Array.isArray(picked)).toEqual(true);
      });
    });
  });
  describe("When count is greater than the size of the array", () => {
    it("returns no more values than the size of the array", () => {
      const arr = ["a", "b", "c", "d"];
      times(1000, () => {
        const picked = pickSet({ array: arr , count: 5});
        expect(picked.length).toEqual(4);
        expect(Array.isArray(picked)).toEqual(true);
      });
    });
  });
  describe("When count is greater than the size of the array", () => {
    it("returns no more values than the size of the array", () => {
      const arr = ["a", "b", "c", "d"];
      times(1000, () => {
        const picked = pickSet({ array: arr , count: 5});
        expect(picked.length).toEqual(4);
        expect(Array.isArray(picked)).toEqual(true);
      });
    });
  });
  describe("When execute pickSet()", () => {
    it("it doesn't destroy the original array", () => {
      const arr = ["a", "b", "c", "d", 'e', 'f'];
      times(1000, () => {
        const cloned = [...arr];
        pickSet({ array: cloned , count: 3});
        expect(cloned.length).toEqual(6);
        expect(arr).toEqual(cloned);
      });
    });
    it("it returns unique value", () => {
      const arr = ["a", "b", "c", "d"];
      times(1000, () => {
        const picked = pickSet({ array: arr , count: 4});
        expect(picked.indexOf('a')).not.toEqual(-1);
        expect(picked.indexOf('b')).not.toEqual(-1);
        expect(picked.indexOf('c')).not.toEqual(-1);
        expect(picked.indexOf('d')).not.toEqual(-1);
      });
    });
  });
});
