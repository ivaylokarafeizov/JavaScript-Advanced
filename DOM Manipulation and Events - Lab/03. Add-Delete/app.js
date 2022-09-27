function addItem() {
  let element = document.createElement('li');
  element.textContent = document.getElementById('newItemText').value;

  let deleteBtn = document.createElement('a');
  deleteBtn.href = '#';
  deleteBtn.textContent = '[Delete]';
  deleteBtn.addEventListener('click', () => deleteBtn.parentElement.remove());

  document.getElementById('items').appendChild(element).appendChild(deleteBtn);
}
