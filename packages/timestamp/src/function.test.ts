import { times } from "@chancejs/generator";
import { timestamp } from "./function";

describe("::Time ::timestamp()", () => {
  it("returns correct result", () => {
    times(1000, () => {
      let ts = timestamp()
      expect(typeof ts).toBe("number");
      expect(ts > 0).toBe(true);
      expect(ts <= Math.floor((new Date()).getTime() / 1000)).toBe(true);
    })
  });
});
