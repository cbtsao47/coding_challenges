// Given an image represented by an NxN matrix, where each pixel in the image is 4 byres, write a method to rotate the image by 90 degrees. Can you do this in place?

function rotateMatrix(matrix) {
  let result = [];

  for (let col = 0; col < matrix.length; col++) {
    let newRow = [];
    for (let row = matrix.length - 1; row >= 0; row--) {
      newRow.push(matrix[row][col]);
    }
    result.push(newRow);
  }
  return result;
}

function rotateMatrix2(matrix) {
  let result = [];

  for (let col = 0; col < matrix.length; col++) {
    let newRow = [];
    for (let row = matrix.length - 1; row >= 0; row--) {
      newRow.push(matrix[row][col]);
    }
    result.push(newRow);
  }
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix.length; col++) {
      matrix[row][col] = result[row][col];
    }
  }
  return matrix;
}
module.exports = {
  rotateMatrix,
  rotateMatrix2
};
