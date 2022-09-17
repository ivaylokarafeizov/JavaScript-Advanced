function printAnArrayWithAGivenDelimiter(arr, delimiter) {
  arr = arr.join(delimiter);
  console.log(arr);
}

printAnArrayWithAGivenDelimiter(['One', 'Two', 'Three', 'Four', 'Five'], '-');
