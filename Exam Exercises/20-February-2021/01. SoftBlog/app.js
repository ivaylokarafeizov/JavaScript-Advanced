function solve() {
  const author = document.getElementById('creator');
  const title = document.getElementById('title');
  const category = document.getElementById('category');
  const content = document.getElementById('content');

  const createBtn = document.querySelector('.btn.create');
  createBtn.addEventListener('click', addArticle);

  const articlesSection = document.querySelector('.site-content main section');
  const archive = document.querySelector('.archive-section ol');

  let archivedLi = [];

  function addArticle(e) {
    e.preventDefault();

    const article = document.createElement('article');

    const titleEl = document.createElement('h1');
    titleEl.textContent = title.value;

    const categoryEl = document.createElement('p');
    categoryEl.textContent = 'Category:';

    const categoryType = document.createElement('strong');
    categoryType.textContent = category.value;

    const creator = document.createElement('p');
    creator.textContent = 'Creator:';

    const creatorName = document.createElement('strong');
    creatorName.textContent = author.value;

    const contentEl = document.createElement('p');
    contentEl.textContent = content.value;

    const divButtons = document.createElement('div');
    divButtons.classList.add('buttons');

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('btn');
    deleteBtn.classList.add('delete');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', (e) => {
      e.target.parentElement.parentElement.parentElement.removeChild(article);
      document
        .querySelector('.site-content')
        .removeChild(document.querySelector('.site-content aside'));
    });

    const archiveBtn = document.createElement('button');
    archiveBtn.classList.add('btn');
    archiveBtn.classList.add('archive');
    archiveBtn.textContent = 'Archive';
    archiveBtn.addEventListener('click', (e) => {
      archivedLi.push(title.textContent);
      archivedLi.sort((a, b) => a.localeCompare(b));

      const children = Array.from(archive.childNodes);
      for (const child of children) {
        archive.removeChild(child);
      }

      for (const el of archivedLi) {
        const li = document.createElement('li');
        li.textContent = el;
        archive.appendChild(li);
      }
      e.target.parentElement.parentElement.parentElement.removeChild(article);
    });

    article.appendChild(title);
    category.appendChild(categoryType);
    article.appendChild(category);
    creator.appendChild(creatorName);
    article.appendChild(creator);
    article.appendChild(content);
    divButtons.appendChild(deleteBtn);
    divButtons.appendChild(archiveBtn);
    article.appendChild(divButtons);
    articlesSection.appendChild(article);

    author.value = '';
    title.value = '';
    category.value = '';
    content.value = '';
  }
}
