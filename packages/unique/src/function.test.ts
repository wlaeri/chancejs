import { natural } from "@chancejs/natural";
import { times } from "@chancejs/generator";
import { unique } from "./function";

describe("::Miscellaneous ::unique()", () => {
  describe("When execute unique()", () => {
    it("returns a unique array of the selected function", () => {
      times(500, () => {
        const arr = unique({ fn: natural, n: 10, args: [{ min: 0, max: 10 }] });
        expect(Array.isArray(arr)).toBe(true);
        expect(arr.length).toEqual(10);
      });
    });
  });
  describe("When num is likely out of range", () => {
    it("returns range error", () => {
      times(500, () => {
        const fn = () => unique({ fn: natural, n: 10, args: [{ min: 1, max: 5 }] });
        expect(fn).toThrow('Chance: n is likely too large for sample set');
      });
    });
  });
  describe("When doesn't pass args for random function", () => {
    it("returns correct result", () => {
      times(500, () => {
        const arr = unique({ fn: natural, n: 10 });
        expect(Array.isArray(arr)).toBe(true);
        expect(arr.length).toEqual(10);
      });
    });
  });
  describe("When doesn't pass n", () => {
    it("returns array with length 1", () => {
      times(500, () => {
        const arr = unique({ fn: natural});
        expect(Array.isArray(arr)).toBe(true);
        expect(arr.length).toEqual(1);
      });
    });
  });
  describe("When n equals 0", () => {
    it("returns empty array", () => {
      times(500, () => {
        const arr = unique({ fn: natural, n: 0});
        expect(Array.isArray(arr)).toBe(true);
        expect(arr.length).toEqual(0);
      });
    });
  });
});

// test('unique() will take a custom comparator for comparing complex objects', t => {
//   const comparator = (arr, val) => {
//       // If this is the first element, we know it doesn't exist
//       if (arr.length === 0) {
//           return false
//       } else {
//           // If a match has been found, short circuit check and just return
//           return arr.reduce((acc, item) => acc ? acc : item.name === val.name, false)
//       }
//   }
//   let arr = chance.unique(chance.currency, 25, { comparator: comparator })
//   t.is(_.uniq(arr).length, 25)
// })
