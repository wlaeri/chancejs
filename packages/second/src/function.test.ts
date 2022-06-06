import { times } from "@chancejs/generator";
import { second } from "./function";

describe("::Time ::second()", () => {
  describe("When executes second() without any arguments", () => {
    it("returns correct result", () => {
      times(1000, () => {
        let s = second();
        expect(typeof s).toBe("number"); 
        expect(s >= 0).toBe(true); 
        expect(s <= 59).toBe(true); 
      });
    });
  });
  describe("When executes second() with min and max arguments", () => {
    it("returns correct result", () => {
      times(1000, () => {
        let s = second({ min: 18, max: 35 });
        expect(typeof s).toBe("number"); 
        expect(s >= 18).toBe(true); 
        expect(s <= 35).toBe(true); 
      });
    });
  });
  describe("When executes second() with only min argument", () => {
    it("returns correct result", () => {
      times(1000, () => {
        let s = second({ min: 5 });
        expect(typeof s).toBe("number"); 
        expect(s >= 5).toBe(true); 
        expect(s <= 59).toBe(true); 
      });
    });
  });
  describe("When executes second() with only max argument", () => {
    it("returns correct result", () => {
      times(1000, () => {
        let s = second({ max: 32 });
        expect(typeof s).toBe("number"); 
        expect(s >= 0).toBe(true); 
        expect(s <= 32).toBe(true); 
      });
    });
  });
  describe("When pass min arg", () => {
    describe("with value below 0", () => {
      it("throws error", () => {
        const fn = () => second({ min: -1 });
        expect(fn).toThrow(
          "Chance: Min cannot be less than 0 or it be greater than 59."
        );
      });
    });
    describe("with value greater than 59", () => {
      it("throws error", () => {
        const fn = () => second({ min: 60 });
        expect(fn).toThrow(
          "Chance: Min cannot be less than 0 or it be greater than 59."
        );
      });
    });
  });
  describe("When pass max arg", () => {
    describe("with value below 0", () => {
      it("throws error", () => {
        const fn = () => second({ max: -1 });
        expect(fn).toThrow(
          "Chance: Max cannot be less than 0 or it be greater than 59."
        );
      });
    });
    describe("with value greater than 59", () => {
      it("throws error", () => {
        const fn = () => second({ max: 61 });
        expect(fn).toThrow(
          "Chance: Max cannot be less than 0 or it be greater than 59."
        );
      });
    });
  });
  describe("When pass min arg with value greater than max arg", () => {
    it("throws error", () => {
      const fn = () => second({ min: 10, max: 5 });
      expect(fn).toThrow(
        "Chance: Min cannot be greater than Max."
      );
    });
  });
});
