function circleArea(input) {
  let inputType = typeof input;

  if (inputType != 'number') {
    console.log(`We can not calculate the circle area, because we receive a ${inputType}.`);
  } else {
    const circleArea = Math.pow(input, 2) * Math.PI;
    console.log(circleArea.toFixed(2));
  }
}

circleArea(5);
circleArea('name');
