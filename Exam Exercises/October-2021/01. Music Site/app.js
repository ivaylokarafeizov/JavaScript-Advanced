window.addEventListener('load', solve);

function solve() {
  let genre = document.querySelector('#genre');
  let name = document.querySelector('#name');
  let author = document.querySelector('#author');
  let date = document.querySelector('#date');
  let totalLikes = 0;

  let addBtn = document.querySelector('#add-btn');
  addBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (
      genre.value == '' ||
      name.value == '' ||
      author.value == '' ||
      date.value == ''
    ) {
      return;
    }

    add([genre, name, author, date]);
  });

  function add(input) {
    let div = document.createElement('div');
    div.className = 'hits-info';

    let img = document.createElement('img');
    img.src = './static/img/img.png';

    let h2Genre = document.createElement('h2');
    h2Genre.textContent = `Genre: ${genre.value}`;

    let h2Name = document.createElement('h2');
    h2Name.textContent = `Name: ${name.value}`;

    let h2Author = document.createElement('h2');
    h2Author.textContent = `Author: ${author.value}`;

    let h3Date = document.createElement('h3');
    h3Date.textContent = `Date: ${date.value}`;

    let saveSongBtn = document.createElement('button');
    saveSongBtn.className = 'save-btn';
    saveSongBtn.textContent = 'Save song';
    saveSongBtn.addEventListener('click', (e) => {
      let data = e.target.parentElement;

      data.removeChild(saveSongBtn);
      data.removeChild(likeSongBtn);

      document.querySelector('.saved-container').appendChild(data);
    });

    let likeSongBtn = document.createElement('button');
    likeSongBtn.className = 'like-btn';
    likeSongBtn.textContent = 'Like song';
    likeSongBtn.addEventListener('click', (e) => {
      totalLikes++;

      let likesP = document.querySelector('.likes > p:nth-child(1)');
      likesP.textContent = `Total Likes: ${Number(totalLikes)}`;

      e.target.setAttribute('disabled', 'disabled');
    });

    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', (e) => {
      e.target.parentElement.remove();
    });

    let childrenF = [img, h2Genre, h2Name, h2Author, h3Date];
    for (const child of childrenF) {
      div.appendChild(child);
    }

    let childrenS = [saveSongBtn, likeSongBtn, deleteBtn];
    for (const child of childrenS) {
      div.appendChild(child);
    }

    document.querySelector('.all-hits-container').appendChild(div);

    for (const el of input) {
      el.value = '';
    }
  }
}
