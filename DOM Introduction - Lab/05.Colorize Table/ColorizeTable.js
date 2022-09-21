function colorize() {
  let elements = Array.from(document.getElementsByTagName('tr'));

  for (let i = 1; i < elements.length; i += 2) {
    let element = elements[i];
    element.style.backgroundColor = 'teal';
  }
}
