import { times } from "@chancejs/generator";
import { natural } from "@chancejs/natural";
import { pad } from "./function";

describe("::Helpers ::pad()", () => {
  describe("when length is less or equal than length of number", () => {
    it("returns same number ", () => {
      times(1000, () => {
        const num = natural({ min: 10000, max: 99999 });
        const padded = pad({ number: num, length: 5 });
        expect(typeof padded).toBe("string");
        expect(padded.length).toEqual(5);
      });
    });
  });
  describe("when length is greater than length of number", () => {
    describe("and doesn't pass a pad", () => {
      it("returns padded number with right length and pad is 0", () => {
        times(1000, () => {
          const num = natural({ max: 99999 });
          const padded = pad({ number: num, length: 10 });
          expect(typeof padded).toBe("string");
          expect(padded.length).toEqual(10);
          expect(padded.indexOf("00000")).not.toEqual(-1);
        });
      });
    });
    describe("and pass a pad", () => {
      it("returns padded number with right length and pad", () => {
        times(1000, () => {
          const num = natural({ max: 99999 });
          const padded = pad({ number: num, length: 10, padding: "V" });
          expect(typeof padded).toBe("string");
          expect(padded.length).toEqual(10);
          expect(padded.indexOf("VVVVV")).not.toEqual(-1);
        });
      });
    });
  });
});
