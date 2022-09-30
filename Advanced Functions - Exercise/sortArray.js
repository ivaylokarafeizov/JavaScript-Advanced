function sortArray(arr, order) { 
  if (order == 'asc') {
   arr.sort((a, b) => a - b);
  } else if (order == 'desc') {
   arr.sort((a, b) => b - a);
  } 
  return arr;

  /**
   * arr.sort((a, b) => (order == 'asc' ? a - b : b - a)); 
   * return arr;
   */
}

sortArray([14, 7, 17, 6, 8], 'asc');
sortArray([14, 7, 17, 6, 8], 'desc');
