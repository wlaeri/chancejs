import { times } from '@chancejs/generator';
import { weekday } from "./function";

describe("::Time ::weekday()", () => {
  describe("When doesn't pass any args for weekday()", () => {
    it("returns the correct result", () => {
      times(1000, () => {
        let wd = weekday()
        expect(typeof wd).toBe("string");
      });
    });
  })
  describe("When pass weekdayOnly arg for weekday()", () => {
    it("returns the correct result", () => {
      times(1000, () => {
        let wd = weekday({ weekdayOnly: true })
        expect(wd == 'Saturday').toBe(false);
        expect(wd == 'Sunday').toBe(false);
      });
    });
  })
});