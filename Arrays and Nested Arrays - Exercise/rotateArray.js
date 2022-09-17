function rotateArray(arr, rotations) {
  while (rotations > 0) {
    arr.unshift(arr.pop());

    rotations--;
  }
  
  console.log(arr.join(' '));
}

rotateArray(['1', '2', '3', '4'], 2);
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple'], 15);
