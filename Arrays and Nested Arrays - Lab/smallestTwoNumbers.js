function smallestTwoNumbers(arr) {
  let smallestNumbersArr = arr
    .sort((a, b) => a - b)
    .filter((_, i) => i < 2)
    .join(' ');

  console.log(smallestNumbersArr);
}

smallestTwoNumbers([30, 15, 50, 5]);
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);
