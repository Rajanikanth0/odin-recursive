import * as fibonacci from "./fibonacci.js";

describe("fibs", () => {
  describe("throws error on invalid input", () => {
    const invalids = [null, "string", undefined, -5];

    test.each(invalids)("invalid input: %s", (input) => {
      expect(() => fibonacci.fibs(input)).toThrow(TypeError);
    });
  });

  test("returns an array of numbers", () => {
    expect(fibonacci.fibs(5)).toEqual(expect.arrayOf(expect.any(Number)));
  });
  
  test("returns fibonacci series upto n", () => {
    expect(fibonacci.fibs(5)).toEqual([0, 1, 1, 2, 3]);
  });
});