function mathOperations(firstOperand, secondOperand, operator) {
  let result;

  switch (operator) {
    case '+': result = firstOperand + secondOperand; break;
    case '-': result = firstOperand - secondOperand; break;
    case '*': result = firstOperand * secondOperand; break;
    case '/': result = firstOperand / secondOperand; break;
    case '%': result = firstOperand % secondOperand; break;
    case '**': result = firstOperand ** secondOperand; break;
  }

  console.log(result);
}

mathOperations(5, 6, '+');
mathOperations(3, 5.5, '*');
