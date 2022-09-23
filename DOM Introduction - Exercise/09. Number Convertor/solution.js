function solve() {
  let input = document.getElementById('input');
  let selectMenu = document.getElementById('selectMenuTo');
  let outputResult = document.getElementById('result');

  let selectToObj = { Binary: 'binary', Hexadecimal: 'hexadecimal' };
  Object.entries(selectToObj).forEach(([key, val]) => {
    let option = document.createElement('option');
    option.value = val;
    option.textContent = key;
    selectMenu.appendChild(option);
  });

  document
    .querySelector('#container > button')
    .addEventListener('click', convert);

  function convert() {
    let selectedValue = document.getElementById('selectMenuTo').value;
    let num = Number(input.value);

    let result;
    if (selectedValue === 'binary') {
      result = (num >>> 0).toString(2);
    } else if (selectedValue === 'hexadecimal') {
      result = num.toString(16).toUpperCase();
    }
    outputResult.value = result;
  }
}
