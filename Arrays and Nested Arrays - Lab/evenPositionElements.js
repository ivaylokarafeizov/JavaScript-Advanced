function evenPositionElements(arr) {
  let evenElements = arr.filter((_, i) => i % 2 == 0);
  console.log(evenElements.join(' '));
}

evenPositionElements(['20', '30', '40', '50', '60']);
evenPositionElements(['5', '10']);
