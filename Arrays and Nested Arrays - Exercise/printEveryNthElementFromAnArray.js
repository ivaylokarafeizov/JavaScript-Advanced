function printEveryNthElementFromAnArray(arr, step) {
  return arr.filter((_, i) => i % step == 0); 
}

printEveryNthElementFromAnArray(['5', '20', '31', '4', '20'], 2);
printEveryNthElementFromAnArray(['dsa', 'asd', 'test', 'text'], 2);
printEveryNthElementFromAnArray(['1', '2', '3', '4', '5'], 6);
