function sumTable() {
  let elements = Array.from(document.getElementsByTagName('td'));

  let sum = 0;
  for (let i = 1; i < elements.length; i += 2) {
    let elementPrice = elements[i].textContent;
    sum += Number(elementPrice);
  }

  document.getElementById('sum').textContent = sum;
}