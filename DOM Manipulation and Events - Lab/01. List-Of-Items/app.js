function addItem() {
  let newItem = document.getElementById('newItemText');

  let liElement = document.createElement('li');
  liElement.textContent = newItem.value;

  document.getElementById('items').appendChild(liElement);
}