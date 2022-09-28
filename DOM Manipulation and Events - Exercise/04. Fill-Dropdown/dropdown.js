function addItem() {
  let textInput = document.querySelector('input#newItemText');
  let valueInput = document.querySelector('input#newItemValue');

  let option = document.createElement('option');
  option.textContent = textInput.value;
  option.value = valueInput.value;

  document.querySelector('div select#menu').appendChild(option);

  textInput.value = '';
  valueInput.value = '';
}