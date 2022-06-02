import { paragraph } from "./function";
import { times } from "@chancejs/generator";
import { natural } from "@chancejs/natural";

describe("::Text ::paragraph()", () => {
  describe("When executes paragraph without any arguments", () => {
    it("returns the correct result", () => {
      times(100, () => {
        let p = paragraph();
        expect(typeof p).toBe("string");

        let len = p.split(".").length;
        expect(len > 2).toBe(true);
        expect(len < 9).toBe(true);
      });
    });
  });
  describe("When executes paragraph with sentences argument", () => {
    it("returns the correct result", () => {
      times(100, () => {
        let p = paragraph({ sentences: 5 });
        expect(typeof p).toBe("string");

        let len = p.split(".").length;
        // Have to account for the fact that the period at the end will add
        // to the count of sentences. This is the fault of our hackish way
        // of detecting sentences -- by splitting on '.'
        expect(len == 6).toBe(true);
      });
    });
  });
  describe("When executes paragraph with linebreak argument", () => {
    it("returns the correct result", () => {
      times(100, () => {
        let rand = natural({min: 1, max: 50});
        let p = paragraph({ sentences: rand, linebreak: true });
        expect(typeof p).toBe("string");

        let len = p.split('\n').length;
        expect(len).toBe(rand);
      });
    });
  });
});