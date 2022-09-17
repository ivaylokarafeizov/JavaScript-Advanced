function magicMatrices(matrix) {
  for (let i = 0; i < matrix.length - 1; i++) {
    let currRowSum = matrix[i].reduce((a, b) => a + b);
    let nextRowSum = matrix[i + 1].reduce((a, b) => a + b); 
    let currColSum = 0;
    let nextColSum = 0;
    for (let j = 0; j < matrix.length; j++) {
      currColSum += matrix[i][j];
      nextColSum += matrix[i + 1][j];
    } 
    if (currRowSum != nextRowSum || currColSum != nextColSum) {
      return false;
    }
  }
  return true;
}

magicMatrices([
  [4, 5, 6],
  [6, 5, 4],
  [5, 5, 5],
]);
magicMatrices([
  [11, 32, 45],
  [21, 0, 1],
  [21, 1, 1],
]);
magicMatrices([
  [1, 0, 0],
  [0, 0, 1],
  [0, 1, 0],
]);
