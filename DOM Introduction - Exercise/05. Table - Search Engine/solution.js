function solve() {
  document.querySelector('#searchBtn').addEventListener('click', onClick);

  function onClick() {
    let searchField = document.getElementById('searchField');
    let rows = document.querySelectorAll('tbody tr');

    for (const row of rows) {
      row.classList.remove('select');

      if (row.innerHTML.includes(searchField.value)) {
        row.className = 'select';
      }
    }
    searchField.value = '';
  }
}
