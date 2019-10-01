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

// function rotateMatrix3(matrx){
//   // base case
//   if(matrix.length===0 || matrix.length!==matrix[0].length){
//     return false
//   }
//   for(let layer=0;lyaer<matrix.length/2;layer++){
//     let first = layer;
//     let last = matrix.length-1-layer;
//     for(let i=first;i<last;i++){
//       let offset= i-first;
//       let top=matrix[first][i] //save top
//       // left-> top
//       matrix[first][i]=matrix[last-offset][first];
//       // bottom -> left
//       matrix[first][]
//     }
//   }

// }
module.exports = {
  rotateMatrix,
  rotateMatrix2
};
