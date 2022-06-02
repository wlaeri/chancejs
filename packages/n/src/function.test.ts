import { n } from "./function";
import { natural } from "@chancejs/natural";

describe("::Miscellaneous ::n()", () => {
  describe("When n is not given", () => {
    it("returns an array with length 1", () => {
      const arr = n({ fn: natural });
      expect(Array.isArray(arr)).toBe(true);
      expect(arr.length).toEqual(1);
    });
    describe("and args is given too", () => {
      it("returns correct array", () => {
        const arr = n({fn: natural, args: [{min: 1, max:100}]});
        expect(Array.isArray(arr)).toBe(true);
        expect(arr.length).toEqual(1);
        arr.map((number) => {
          expect(number >= 1 && number <=100).toBeTruthy();
        })
      });
    });
  });
  describe("When n is given", () => {
    describe("and n is set to 0", () => {
      it("returns an empty array", () => {
        const arr = n({fn: natural, n: 0});
        expect(Array.isArray(arr)).toBe(true);
        expect(arr.length).toEqual(0);
      });
    });
    describe("and args is given too", () => {
      it("returns correct array", () => {
        const arr = n({fn: natural, n: 10, args: [{min: 1, max:10}]});
        expect(Array.isArray(arr)).toBe(true);
        expect(arr.length).toEqual(10);
        arr.map((number) => {
          expect(number >= 1 && number <=10).toBeTruthy();
        })
      });
    });
  });
});