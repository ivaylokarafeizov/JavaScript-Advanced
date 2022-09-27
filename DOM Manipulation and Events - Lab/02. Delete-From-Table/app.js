function deleteByEmail() {
  let rows = document.querySelectorAll('tbody tr');
  let input = document.querySelector('input').value;
  let result = document.getElementById('result');

  let isFound = false;
  for (const row of rows) {
    if (row.children[1].textContent === input) {
        row.parentElement.removeChild(row); 
        result.textContent = 'Deleted';

        isFound = true;
        break;
    } else if (!isFound) {
        result.textContent = 'Not found.'; 
    }
  }
}
