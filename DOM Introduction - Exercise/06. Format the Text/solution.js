function solve() {
  let text = document.querySelector('textarea#input').value.split('.');
  text = text.filter((el) => el.length > 1);

  while (text.length) {
    let p = document.createElement('p');
    p.textContent = text.splice(0, 3) + '.';
    document.querySelector('div#output').appendChild(p);
  }
}
