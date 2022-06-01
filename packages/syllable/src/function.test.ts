import { times } from "@chancejs/generator";
import { syllable } from "./function";

describe("::Text :: syllable()", () => {
  it("returns a random syllable", () => {
    times(1000, () => {
      const s = syllable();
      expect(typeof s).toBe("string");
      expect(s.length > 1).toBe(true);
      expect(s.length < 4).toBe(true);
    });
  });
  describe('when pass capitalize option', () => {
    it("returns correct result", () => {
      times(1000, () => {
        const s = syllable({ capitalize: true });
        expect(typeof s).toBe("string");
        expect(s.length > 1).toBe(true);
        expect(s.length < 4).toBe(true);
        expect(s).toMatch(/[A-Z]/);
      });
    });
  })
  describe('when pass length option', () => {
    it("returns correct result", () => {
        const s = syllable({ length: 6 });
        expect(typeof s).toBe("string");
        expect(s.length == 6).toBe(true);
    });
  })
});
