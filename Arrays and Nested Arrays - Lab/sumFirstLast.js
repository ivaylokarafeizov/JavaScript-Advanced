function sumFirstLast(arr) {
  let firstElement = Number(arr.shift());
  let lastElement = Number(arr.pop());
  let sum = firstElement + lastElement;
  console.log(sum);
}

sumFirstLast(['20', '30', '40']);
sumFirstLast(['5', '10']);