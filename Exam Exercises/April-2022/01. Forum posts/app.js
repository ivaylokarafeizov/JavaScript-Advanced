window.addEventListener('load', solve);

function solve() {
  let title = document.getElementById('post-title');
  let category = document.getElementById('post-category');
  let content = document.getElementById('post-content');

  let publishBtn = document.querySelector('#publish-btn');
  publishBtn.addEventListener('click', publish);

  function publish() {
    if (!title.value || !category.value || !content.value) {
      return;
    }

    let reviewList = document.querySelector('#review-list');

    let li = document.createElement('li');
    li.classList.add('rpost');

    let article = document.createElement('article');

    let h4 = document.createElement('h4');
    h4.textContent = title.value;

    let pCategory = document.createElement('p');
    pCategory.textContent = `Category: ${category.value}`;

    let pContent = document.createElement('p');
    pContent.textContent = `Content: ${content.value}`;

    let editBtn = document.createElement('button');
    editBtn.classList = 'action-btn edit';
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', editPost);

    let approveBtn = document.createElement('button');
    approveBtn.classList = 'action-btn approve';
    approveBtn.textContent = 'Approve';
    approveBtn.addEventListener('click', (e) => {
      approvePost(e, editBtn, approveBtn);
    });

    article.appendChild(h4);
    article.appendChild(pCategory);
    article.appendChild(pContent);
    li.appendChild(article);
    li.appendChild(approveBtn);
    li.appendChild(editBtn);
    reviewList.appendChild(li);

    title.value = '';
    category.value = '';
    content.value = '';
  }

  function editPost(e) {
    let data = e.target.parentElement;
    let h4 = data.querySelector('article h4').textContent;
    let pCategory = data.querySelector('article p:nth-of-type(1)').textContent;
    let pContent = data.querySelector('article p:nth-of-type(2)').textContent;

    title.value = h4;
    category.value = pCategory.replace('Category: ', '');
    content.value = pContent.replace('Content: ', '');

    data.parentElement.removeChild(data);
  }

  function approvePost(e, editBtn, approveBtn) {
    let data = e.target.parentElement.parentElement;
    let li = data.querySelector('li');

    li.removeChild(approveBtn);
    li.removeChild(editBtn);

    document.querySelector('#published-list').appendChild(li);
    data.removeChild(data);
  }

  let clearBtn = document.querySelector('#clear-btn');
  clearBtn.addEventListener('click', () => {
    document.querySelector('#published-list').innerHTML = '';
  });
}
