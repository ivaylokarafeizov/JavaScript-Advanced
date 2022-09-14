function sameNumbers(number) {
  const numbersArray = String(number).split('').map(Number);
  const sum = numbersArray.reduce((a, b) => a + b); 

  let areSame = true; 
  for (let i = 0; i < numbersArray.length; i++) {
    if (numbersArray[i] != numbersArray[0]) {
      areSame = false;
      break;
    } 
  }

  console.log(`${areSame}\n${sum}`);
}

sameNumbers(2222222);
sameNumbers(1234);
