import * as fibonacci from "../modules/fibonacci.js";

const entries = Object.entries(fibonacci);

describe.each(entries)("[Function: %s]", (name, fn) => {
  describe("invalid input handling", () => {
    const invalids = [null, "string", undefined, -5];

    test.each(invalids)("throws TypeError for %s", (input) => {
      expect(() => fn(input)).toThrow(TypeError);
    });
  });

  describe("valid input handling", () => {
    const nLength = [
      [0, []],
      [1, [0]],
      [2, [0, 1]],
      [5, [0, 1, 1, 2, 3]],
      [17, [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]]
    ]

    test("returns an array of numbers", () => {
      expect(fn(5)).toEqual(expect.any(Array));
      // expect(fn(5).every(item => typeof item === "number")).toBe(true);
      expect(fn(5)).toEqual(expect.arrayOf(expect.any(Number)));
    });

    describe("Fibonacci series of length", () => {
      test.each(nLength)("length of %s", (n, expected) => {
        expect(fn(n)).toEqual(expected);
      });
    });
  });
});