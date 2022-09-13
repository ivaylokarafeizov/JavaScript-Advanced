function largestNumber(firstNum, secondNum, thirdNum) {
  let numbersArray = [firstNum, secondNum, thirdNum]; 
  let largestNum = Math.max(...numbersArray);

  console.log(`The largest number is ${largestNum}.`);
}

largestNumber(5, -3, 16);
largestNumber(-3, -5, -22.5);
