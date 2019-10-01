const { rotateMatrix, rotateMatrix2 } = require("./rotateMatrix");
describe("rotate matrix", () => {
  test("should rotate the matrix 90 degrees", () => {
    let matrix = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16]
    ];
    let rotated = [
      [13, 9, 5, 1],
      [14, 10, 6, 2],
      [15, 11, 7, 3],
      [16, 12, 8, 4]
    ];
    expect(rotateMatrix(matrix)).toEqual(rotated);
  });
  test("should rotate the matrix 90 degrees in place", () => {
    let matrix = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16]
    ];
    expect(rotateMatrix2(matrix)).toStrictEqual(matrix);
  });
});
