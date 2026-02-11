import { mergeSort } from "../modules/mergeSort.js";

describe("invalid input handling", () => {
  const invalid = [null, undefined, "string", 5];

  test.each(invalid)("throws TypeError for %s", (input) => {
    expect(() => mergeSort(input)).toThrow(TypeError);
  });
});

describe("valid input handling", () => {
  const valid = [
    ["empty array", [], []],
    ["array of length 1", [73], [73]],
    ["sorted array", [1, 2, 3, 4, 5], [1, 2, 3, 4, 5]],
    ["array of length 8", [3, 2, 1, 13, 8, 5, 0, 1], [0, 1, 1, 2, 3, 5, 8, 13]],
    ["array of length 4", [105, 79, 100, 110], [79, 100, 105, 110]]
  ];

  test.each(valid)("%s", (name, input, output) => {
    expect(mergeSort(input)).toEqual(output);
  });
});