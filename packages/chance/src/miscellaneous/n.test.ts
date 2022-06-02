import Chance from "../../src/index";

describe("::Chance ::Miscellaneous ::#n", () => {
  let chance: Chance;
  beforeEach(() => {
    chance = new Chance();
  });
  describe("When n is not given", () => {
    it("returns an array with length 1", () => {
      console.log((chance as any).naturalGenerator)
      const arr = chance.n({ fn: chance.natural.bind(chance) });
      expect(Array.isArray(arr)).toBe(true);
      expect(arr.length).toEqual(1);
    });
    describe("and args is given too", () => {
      it("returns correct array", () => {
        const arr = chance.n({
          fn: chance.natural.bind(chance),
          args: [{ min: 1, max: 100 }],
        });
        expect(Array.isArray(arr)).toBe(true);
        expect(arr.length).toEqual(1);
        arr.map((number) => {
          expect(number >= 1 && number <= 100).toBeTruthy();
        });
      });
    });
  });
  describe("When n is given", () => {
    describe("and n is set to 0", () => {
      it("returns an empty array", () => {
        const arr = chance.n({ fn: chance.natural.bind(chance), n: 0 });
        expect(Array.isArray(arr)).toBe(true);
        expect(arr.length).toEqual(0);
      });
    });
    describe("and args is given too", () => {
      it("returns correct array", () => {
        const arr = chance.n({
          fn: chance.natural.bind(chance),
          n: 10,
          args: [{ min: 1, max: 10 }],
        });
        expect(Array.isArray(arr)).toBe(true);
        expect(arr.length).toEqual(10);
        arr.map((number) => {
          expect(number >= 1 && number <= 10).toBeTruthy();
        });
      });
    });
  });
});
