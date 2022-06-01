import { times } from "@chancejs/generator";
import { capitalize } from "./function";

describe('capitalize function', () => {
  it("work as expected", () => {
    const word = capitalize({word:"word"});
    expect(typeof word).toBe("string");
    expect(word).toMatch(/[A-Z]/);
    // times(1000, () => {
    //   const word = capitalize(word());
    //   expect(typeof word).toBe(string);
    //   expect(word).toMatch(/[A-Z]/);
    // })
  })
})
