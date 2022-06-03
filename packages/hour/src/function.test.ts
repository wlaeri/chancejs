import { times } from "@chancejs/generator";
import { hour } from "./function";

describe("::Time ::hour()", () => {
  describe("When executes hour", () => {
    describe("without twentyfour argument", () => {
      it("returns correct result", () => {
        times(1000, () => {
          let h = hour();
          expect(typeof h).toBe("number");
          expect(h >= 0).toBe(true);
          expect(h <= 11).toBe(true);
        });
      });
    });
    describe("with twentyfour argument", () => {
      it("returns correct result", () => {
        times(1000, () => {
          let h = hour({ twentyfour: true });
          expect(typeof h).toBe("number");
          expect(h >= 0).toBe(true);
          expect(h <= 23).toBe(true);
        });
      });
    });
  });
  describe("When executes hour only with min argument", () => {
    describe("and without twentyfour argument", () => {
      it("returns correct result", () => {
        times(1000, () => {
          let h = hour({ min: 7 });
          expect(typeof h).toBe("number");
          expect(h >= 7).toBe(true);
          expect(h <= 11).toBe(true);
        });
      });
    });
    describe("and with twentyfour argument", () => {
      it("returns correct result", () => {
        times(1000, () => {
          let h = hour({ min: 15, twentyfour: true });
          expect(typeof h).toBe("number");
          expect(h >= 15).toBe(true);
          expect(h <= 23).toBe(true);
        });
      });
    });
  });
  describe("When executes hour only with max argument", () => {
    describe("and without twentyfour argument", () => {
      it("returns correct result", () => {
        times(1000, () => {
          let h = hour({ max: 6 });
          expect(typeof h).toBe("number");
          expect(h >= 0).toBe(true);
          expect(h <= 6).toBe(true);
        });
      });
    });
    describe("and with twentyfour argument", () => {
      it("returns correct result", () => {
        times(1000, () => {
          let h = hour({ max: 22, twentyfour: true });
          expect(typeof h).toBe("number");
          expect(h >= 0).toBe(true);
          expect(h <= 22).toBe(true);
        });
      });
    });
  });
  describe("When executes hour with min and max arguments", () => {
    describe("and without twentyfour argument", () => {
      it("returns correct result", () => {
        times(1000, () => {
          let h = hour({ min: 1, max: 6 });
          expect(typeof h).toBe("number");
          expect(h >= 1).toBe(true);
          expect(h <= 6).toBe(true);
        });
      });
    });
    describe("and with twentyfour argument", () => {
      it("returns correct result", () => {
        times(1000, () => {
          let h = hour({ min: 18, max: 20, twentyfour: true });
          expect(typeof h).toBe("number");
          expect(h >= 18).toBe(true);
          expect(h <= 20).toBe(true);
        });
      });
    });
  });
  describe("When executes hour with min argument being smaller than min standard clock", () => {
    describe("and without twentyfour argument", () => {
      it("returns error", () => {
        times(1000, () => {
          let fn = () => hour({ min: -1 });
          expect(fn).toThrow(
            "Chance: Min and Max values must be in clock interval."
          );
        });
      });
    });
    describe("and with twentyfour argument", () => {
      it("returns error", () => {
        times(1000, () => {
          let fn = () => hour({ min: -1, twentyfour: true });
          expect(fn).toThrow(
            "Chance: Min and Max values must be in clock interval."
          );
        });
      });
    });
  });
  describe("When executes hour with max argument being smaller than min standard clock", () => {
    describe("and without twentyfour argument", () => {
      it("returns error", () => {
        times(1000, () => {
          let fn = () => hour({ max: -1 });
          expect(fn).toThrow(
            "Chance: Min and Max values must be in clock interval."
          );
        });
      });
    });
    describe("and with twentyfour argument", () => {
      it("returns error", () => {
        times(1000, () => {
          let fn = () => hour({ max: -1, twentyfour: true });
          expect(fn).toThrow(
            "Chance: Min and Max values must be in clock interval."
          );
        });
      });
    });
  });
  describe("When executes hour with max argument being greater than max standard clock", () => {
    describe("and without twentyfour argument", () => {
      it("returns error", () => {
        times(1000, () => {
          let fn = () => hour({ max: 13 });
          expect(fn).toThrow(
            "Chance: Min and Max values must be in clock interval."
          );
        });
      });
    });
    describe("and with twentyfour argument", () => {
      it("returns error", () => {
        times(1000, () => {
          let fn = () => hour({ max: 24, twentyfour: true });
          expect(fn).toThrow(
            "Chance: Min and Max values must be in clock interval."
          );
        });
      });
    });
  });
  describe("When executes hour with min argument being greater than max standard clock", () => {
    describe("and without twentyfour argument", () => {
      it("returns error", () => {
        times(1000, () => {
          let fn = () => hour({ min: 12 });
          expect(fn).toThrow(
            "Chance: Min and Max values must be in clock interval."
          );
        });
      });
    });
    describe("and with twentyfour argument", () => {
      it("returns error", () => {
        times(1000, () => {
          let fn = () => hour({ min: 25, twentyfour: true });
          expect(fn).toThrow(
            "Chance: Min and Max values must be in clock interval."
          );
        });
      });
    });
  });
  describe("When executes hour with min argument being greater than max argument", () => {
    describe("and without twentyfour argument", () => {
      it("returns error", () => {
        times(1000, () => {
          let fn = () => hour({ min: 8, max: 4 });
          expect(fn).toThrow("Chance: Min cannot be greater than Max.");
        });
      });
    });
    describe("and with twentyfour argument", () => {
      it("returns error", () => {
        times(1000, () => {
          let fn = () => hour({ min: 18, max: 15, twentyfour: true });
          expect(fn).toThrow("Chance: Min cannot be greater than Max.");
        });
      });
    });
  });
});
