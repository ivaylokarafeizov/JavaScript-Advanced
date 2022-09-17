function increasingSubsetFromArray(numbers) {
  let newArr = [];
  let biggestNum = Number.MIN_SAFE_INTEGER;

  for (const number of numbers) {
    if (number >= biggestNum) {
      biggestNum = number;
      newArr.push(biggestNum);
    }
  }

  return newArr; 
}

increasingSubsetFromArray([1, 3, 8, 4, 10, 12, 3, 2, 24]);
increasingSubsetFromArray([1, 2, 3, 4]);
increasingSubsetFromArray([20, 3, 2, 15, 6, 1]);
