const { zeroMatrix, zeroMatrix2 } = require("./zeroMatrix");

describe("zero matrix", () => {
  test("should zero the entire row and column of an element if it's 0 in a matrix", () => {
    let matrix = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 0, 11, 12], [13, 14, 15, 16]];
    let zeroed = [[13, 0, 5, 1], [14, 0, 6, 2], [0, 0, 0, 0], [16, 0, 8, 4]];
    expect(zeroMatrix(matrix)).toEqual(zeroed);
  });
  test("should do it in place", () => {
    let matrix = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 0, 11, 12], [13, 14, 15, 16]];
    expect(zeroMatrix2(matrix)).toStrictEqual(matrix);
  });
});
