import { times } from "@chancejs/generator";
import { year } from "./function";

describe("::Time ::year()", () => {
  describe("When executes year() without any arguments", () => {
    it("returns correct result", () => {
      times(1000, () => {
        let y = year();
        expect(typeof y).toBe("string"); 
        expect(parseInt(y) >= 2022).toBe(true); 
        expect(parseInt(y) <= 2122).toBe(true); 
      });
    });
  });
  describe("When executes year() with min and max arguments", () => {
    it("returns correct result", () => {
      times(1000, () => {
        let y = year({ min: 2000, max: 2020 });
        expect(typeof y).toBe("string"); 
        expect(parseInt(y) >= 2000).toBe(true); 
        expect(parseInt(y) <= 2020).toBe(true); 
      });
    });
  });
  describe("When executes year() with only min argument", () => {
    it("returns correct result", () => {
      times(1000, () => {
        let y = year({ min: 2030 });
        expect(typeof y).toBe("string"); 
        expect(parseInt(y) >= 2030).toBe(true); 
        expect(parseInt(y) <= 2130).toBe(true); 
      });
    });
  });
  describe("When executes year() with only max argument", () => {
    it("returns correct result", () => {
      times(1000, () => {
        let y = year({ max: 2050 });
        expect(typeof y).toBe("string"); 
        expect(parseInt(y) >= 2022).toBe(true); 
        expect(parseInt(y) <= 2050).toBe(true); 
      });
    });
  });
  describe("When pass min arg with value greater than max arg", () => {
    it("throws error", () => {
      const fn = () => year({ min: 2050, max: 2030 });
      expect(fn).toThrow(
        "Chance: Min cannot be greater than Max."
      );
    });
  });
});
