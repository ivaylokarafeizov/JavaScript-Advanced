function negativePositiveNumbers(arr) {
  let newArr = [];
 
  while (arr.length) {
    let currentNum = arr.shift();
    
    if (currentNum < 0) {
      newArr.unshift(currentNum);
    } else {
      newArr.push(currentNum);
    }
  } 
  
  console.log(newArr.join('\n'));
}

negativePositiveNumbers([7, -2, 8, 9]); 