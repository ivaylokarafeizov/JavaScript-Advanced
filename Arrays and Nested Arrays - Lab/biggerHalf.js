function biggerHalf(arr) {
  let ascendArr = arr.sort((a, b) => b - a);
  let newArr = [];

  for (let i = 0; i < ascendArr.length / 2; i++) {
    newArr.unshift(ascendArr[i]);
  }

  return newArr; 
}

biggerHalf([4, 7, 2, 5]);