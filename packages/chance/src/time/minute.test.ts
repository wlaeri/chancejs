import { times } from "@chancejs/generator";
import Chance from "..";

describe("::Chance ::Time ::#minute", () => {
  let chance: Chance;
  beforeEach(() => {
    chance = new Chance();
  });

  describe("When executes minute() without any arguments", () => {
    it("returns correct result", () => {
      times(1000, () => {
        let m = chance.minute();
        expect(typeof m).toBe("number");
        expect(m >= 0).toBe(true);
        expect(m <= 59).toBe(true);
      });
    });
  });
  describe("When executes minute() with min and max arguments", () => {
    it("returns correct result", () => {
      times(1000, () => {
        let m = chance.minute({ min: 18, max: 35 });
        expect(typeof m).toBe("number");
        expect(m >= 18).toBe(true);
        expect(m <= 35).toBe(true);
      });
    });
  });
  describe("When executes minute() with only min argument", () => {
    it("returns correct result", () => {
      times(1000, () => {
        let m = chance.minute({ min: 5 });
        expect(typeof m).toBe("number");
        expect(m >= 5).toBe(true);
        expect(m <= 59).toBe(true);
      });
    });
  });
  describe("When executes minute() with only max argument", () => {
    it("returns correct result", () => {
      times(1000, () => {
        let m = chance.minute({ max: 32 });
        expect(typeof m).toBe("number");
        expect(m >= 0).toBe(true);
        expect(m <= 32).toBe(true);
      });
    });
  });
});
