function create(words) {
  for (const word of words) {
    let p = document.createElement('p');
    p.textContent = word;
    p.style.display = 'none'; 

    let div = document.createElement('div');
    div.appendChild(p);
    div.addEventListener('click', () => (p.style.display = ''));

    document.getElementById('content').appendChild(div);
  }
}
