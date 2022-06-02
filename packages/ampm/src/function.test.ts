import { ampm } from "./function";
import { times } from "@chancejs/generator";

describe("::Time ::ampm()", () => {
  it("returns am or pm", () => {
    times(1000, () => {
      let result = ampm()
      expect(typeof result).toBe("string");
      expect(/^([ap]m)$/m.test(result)).toBe(true);
    });
  });
});
