window.addEventListener('load', solve);

function solve() {
  let firstName = document.getElementById('first-name');
  let lastName = document.getElementById('last-name');
  let age = document.getElementById('age');
  let genre = document.getElementById('genre');
  let storyTitle = document.getElementById('story-title');
  let story = document.getElementById('story');

  let publishBtn = document.querySelector('div.button-section #form-btn');
  publishBtn.addEventListener('click', () => {
    if (
      firstName.value == '' ||
      lastName.value == '' ||
      age.value == '' ||
      genre.value == '' ||
      storyTitle.value == '' ||
      story.value == ''
    ) {
      return;
    }

    publish([firstName, lastName, age, genre, storyTitle, story]);
  });

  function publish(input) {
    publishBtn.disabled = true;

    let li = document.createElement('li');
    li.className = 'story-info';

    let article = document.createElement('article');

    let h4 = document.createElement('h4');
    h4.textContent = `Name: ${firstName.value} ${lastName.value}`;

    let pAge = document.createElement('p');
    pAge.textContent = `Age: ${age.value}`;

    let pTitle = document.createElement('p');
    pTitle.textContent = `Title: ${storyTitle.value}`;

    let pGenre = document.createElement('p');
    pGenre.textContent = `Genre: ${genre.value}`;

    let pStory = document.createElement('p');
    pStory.textContent = `${story.value}`;

    article.appendChild(h4);
    article.appendChild(pAge);
    article.appendChild(pTitle);
    article.appendChild(pGenre);
    article.appendChild(pStory);

    let saveBtn = document.createElement('button');
    saveBtn.classList = 'save-btn';
    saveBtn.textContent = 'Save Story';
    saveBtn.addEventListener('click', () => {
      let mainDiv = document.querySelector('div#main');
      mainDiv.innerHTML = '';

      let h1 = document.createElement('h1');
      h1.textContent = 'Your scary story is saved!';

      mainDiv.appendChild(h1);
    });

    let editBtn = document.createElement('button');
    editBtn.classList = 'edit-btn';
    editBtn.textContent = 'Edit Story';
    editBtn.addEventListener('click', (e) => {
      let storyInfo = e.target.parentElement;
      let article = storyInfo.querySelector('article');

      let name = article.querySelector('h4').textContent.replace('Name: ', '');
      let [firstNameText, lastNameText] = name.split(' ');
      let ageText = article
        .querySelector('p:nth-of-type(1)')
        .textContent.replace('Age: ', '');
      let genreText = article
        .querySelector('p:nth-of-type(3)')
        .textContent.replace('Genre: ', '');
      let storyTitleText = article
        .querySelector('p:nth-of-type(2)')
        .textContent.replace('Title: ', '');
      let storyText = article.querySelector('p:nth-of-type(4)').textContent;

      firstName.value = firstNameText;
      lastName.value = lastNameText;
      age.value = ageText;
      genre.value = genreText;
      storyTitle.value = storyTitleText;
      story.value = storyText;

      storyInfo.remove();
      publishBtn.disabled = false;
    });

    let deleteBtn = document.createElement('button');
    deleteBtn.classList = 'delete-btn';
    deleteBtn.textContent = 'Delete Story';
    deleteBtn.addEventListener('click', (e) => {
      e.target.parentElement.remove();
      publishBtn.disabled = false;
    });

    li.appendChild(article);
    li.appendChild(saveBtn);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    document.getElementById('preview-list').appendChild(li);

    for (const e of input) {
      e.value = '';
    }
  }
}
