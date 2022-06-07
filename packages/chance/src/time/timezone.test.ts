import { times } from "@chancejs/generator";
import Chance from "..";

describe("::Chance ::Time ::#timezone", () => {
  let chance: Chance;
  beforeEach(() => {
    chance = new Chance();
  });
  it("returns correct result", () => {
    times(1000, () => {
      let tz = chance.timezone();
      expect(tz).toMatchObject({
        name: expect.any(String),
        abbr: expect.any(String),
        offset: expect.any(Number),
        isdst: expect.any(Boolean),
        text: expect.any(String),
      });
      //In some timezones doesn't have the property utc.
      //So this test verifies the value of utc.
      expect([expect.any(Array), undefined]).toContainEqual(tz.utc);
    });
  });
});
