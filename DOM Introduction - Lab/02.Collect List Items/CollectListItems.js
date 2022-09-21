function extractText() {
  let listItems = Array.from(document.querySelectorAll('#items li'));
  const result = listItems.map((el) => el.textContent).join('\n');
  document.getElementById('result').textContent = result;
}
