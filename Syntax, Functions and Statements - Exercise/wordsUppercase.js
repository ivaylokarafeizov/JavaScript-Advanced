function wordsUppercase(string) { 
  let words = string.match(/\w+/g);
  words = words.map(word => word.toUpperCase());

  console.log(words.join(', '));
} 

wordsUppercase('Hi, how are you?');
wordsUppercase('hello');
