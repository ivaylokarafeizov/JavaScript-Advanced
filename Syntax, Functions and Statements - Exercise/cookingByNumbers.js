function cookingByNumbers(number, firstOp, secondOp, thirdOp, fourthOp, fifthOp) {
  let operationsArr = [firstOp, secondOp, thirdOp, fourthOp, fifthOp];
  number = Number(number);

  for (const operation of operationsArr) {
    switch (operation) {
      case 'chop': number = number / 2; break;
      case 'dice': number = Math.sqrt(number); break;
      case 'spice': number = number + 1; break;
      case 'bake': number = number * 3; break;
      case 'fillet': number = number - (number * 0.2); break;
    }
    console.log(number);
  }
}

cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
