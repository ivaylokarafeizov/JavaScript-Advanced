function greatestCommonDivisor(fNumber, sNumber) {  
  while (sNumber) {
    const temp = sNumber; 
    sNumber = fNumber % sNumber;
    fNumber = temp;
  }

  console.log(fNumber);
}

greatestCommonDivisor(15, 5);
greatestCommonDivisor(2154, 458);
