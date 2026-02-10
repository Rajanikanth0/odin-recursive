import * as fibonacci from "./fibonacci.js";

const entries = Object.entries(fibonacci);

describe.each(entries)("[Function: %s]", (name, fn) => {
  describe("invalid input handling", () => {
    const invalids = [null, "string", undefined, -5];

    test.each(invalids)("throws TypeError for %s", (input) => {
      expect(() => fn(input)).toThrow(TypeError);
    });
  });

  describe("valid input handling", () => {
    test("returns an array of numbers", () => {
      expect(fn(5)).toEqual(expect.any(Array));
      // expect(fn(5).every(item => typeof item === "number")).toBe(true);
      expect(fn(5)).toEqual(expect.arrayOf(expect.any(Number)));
    });
    
    test("returns Fibonacci series of length n", () => {
      expect(fn(5)).toEqual([0, 1, 1, 2, 3]);
    });
  });
});