import { times } from "@chancejs/generator";
import { shuffle } from "./function";

describe("::Helpers ::shuffle()", () => {
  it("returns an array of the same size", () => {
    const arr = ["a", "b", "c", "d", "e"];
    times(1000, () => {
      const arrCopy = [...arr];
      const shuffled = shuffle({ array: arrCopy });
      expect(shuffled.length).toEqual(5);
      expect(shuffled.indexOf("a")).not.toEqual(-1);
    });
  });
  it("returns a well shuffled array", () => {
    // See http://vq.io/1lEhbim checking it isn't doing that!
    const arr = ["a", "b", "c", "d", "e"];
    const arrayCopy = [...arr];
    let positions = {
      a: [0, 0, 0, 0, 0],
      b: [0, 0, 0, 0, 0],
      c: [0, 0, 0, 0, 0],
      d: [0, 0, 0, 0, 0],
      e: [0, 0, 0, 0, 0],
    };
    
    times(10000, () => {
      shuffle({ array: arrayCopy }).map((item, index) => {
        // Accumulate the position of the item each time
        positions[item as keyof typeof positions][index]++;
      });
    });
     
    Object.keys(positions).map((index) => {
      positions[index as keyof typeof positions].map((item) => {
        // This should be around 20% give or take a bit since there are
        // 5 elements and they should be evenly distributed
        expect(item >= 1800).toBe(true);
        expect(item <= 2200).toBe(true);
      });
    });
  });
  it("it does not destroy original array", () => {
    const arr = ["a", "b", "c", "d", "e"];
    times(1, () => {
      const arrayCopy = [...arr];
      const shuffled = shuffle({ array: arrayCopy });
      expect(shuffled.length).toEqual(5);
      expect(arr).toEqual(arrayCopy);
    });
  });
});
