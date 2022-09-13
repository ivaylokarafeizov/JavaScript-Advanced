function stringLength(firstParam, secondParam, thirdParam) {
  let lengthSum = (firstParam + secondParam + thirdParam).length;
  let avgLength = Math.floor(lengthSum / 3);
  
  console.log(`${lengthSum}\n${avgLength}`);
}

stringLength('chocolate', 'ice cream', 'cake');
stringLength('pasta', '5', '22.3');
