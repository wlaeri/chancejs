import { times } from "@chancejs/generator";
import Chance from "..";

describe("::Chance ::Time ::#weekday", () => {
  let chance: Chance;
  beforeEach(() => {
    chance = new Chance();
  });
  describe("When doesn't pass any args for weekday()", () => {
    it("returns the correct result", () => {
      times(1000, () => {
        let wd = chance.weekday();
        expect(typeof wd).toBe("string");
      });
    });
  });
  describe("When pass weekdayOnly arg for weekday()", () => {
    it("returns the correct result", () => {
      times(1000, () => {
        let wd = chance.weekday({ weekdayOnly: true });
        expect(wd == "Saturday").toBe(false);
        expect(wd == "Sunday").toBe(false);
      });
    });
  });
});
