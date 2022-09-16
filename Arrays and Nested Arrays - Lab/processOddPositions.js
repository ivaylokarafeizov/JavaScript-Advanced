function processOddPositions(arr) {
  let oddNumbersArr = arr
    .filter((_, i) => i % 2 != 0)
    .reverse()
    .map(n => n * 2)
    .join(' ');

  return oddNumbersArr;
}

processOddPositions([10, 15, 20, 25]);
processOddPositions([3, 0, 10, 4, 7, 3]);