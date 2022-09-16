function biggestElement(matrix) { 
  let biggestNum = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < matrix.length; i++) {
    let row = matrix[i];
    for (let j = 0; j < row.length; j++) { 
      let currentNum = row[j];  

      if (currentNum > biggestNum) {
        biggestNum = currentNum;
      }
    }
  }
  
  return biggestNum;
}

biggestElement([
  [20, 50, 10],
  [8, 33, 145],
]);
