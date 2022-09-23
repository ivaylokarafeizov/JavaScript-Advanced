function search() {
  let liElements = Array.from(document.querySelectorAll('#towns li'));
  let searchText = document.getElementById('searchText');

  let matches = 0;
  for (const liElement of liElements) {
    liElement.style.textDecoration = 'none';
    liElement.style.fontWeight = '';

    if (liElement.textContent.includes(searchText.value)) {
      liElement.style.textDecoration = 'underline';
      liElement.style.fontWeight = 'bold';

      matches++;
    }
  }

  document.getElementById('result').textContent = `${matches} matches found`;
  searchText.value = '';
}
