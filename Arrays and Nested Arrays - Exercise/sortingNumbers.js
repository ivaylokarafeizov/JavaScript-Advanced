function sortingNumbers(arr) {
  arr.sort((a, b) => a - b);
  let newArr = [];

  while (arr.length) {
    newArr.push(arr.shift(), arr.pop()); 
  }

  return newArr; 
}

sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);