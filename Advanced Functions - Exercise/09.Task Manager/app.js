function solve() {
  document.getElementById('add').addEventListener('click', createArticle);

  function createArticle(e) {
    e.preventDefault();

    let open = document.getElementsByTagName('section')[1].children[1];  
    let article = document.createElement('article');  
    let task = document.getElementById('task');
    let description = document.getElementById('description');
    let date = document.getElementById('date');

    if (task.value == '' || description.value == '' || date.value == '') {
      return;
    }

    let h3 = document.createElement('h3');
    h3.textContent = task.value;

    let descriptionParagraph = document.createElement('p');
    descriptionParagraph.textContent = `Description: ${description.value}`;

    let dateParagraph = document.createElement('p');
    dateParagraph.textContent = `Due Date: ${date.value}`;

    let div = document.createElement('div');
    div.classList.add('flex');

    let startBtn = document.createElement('button');
    startBtn.classList.add('green');
    startBtn.textContent = 'Start';
    startBtn.addEventListener('click', () => inProgress());

    let deleteBtn = document.createElement('button');
    deleteBtn.classList.add('red');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
      h3.parentElement.parentElement.removeChild(article);
    });

    div.appendChild(startBtn);
    div.appendChild(deleteBtn);

    let children = [h3, descriptionParagraph, dateParagraph, div];
    for (const child of children) {
      article.appendChild(child);
    }

    open.appendChild(article);

    task.value = '';
    description.value = '';
    date.value = '';

    let finishBtn = document.createElement('button');
    function inProgress() {
      h3.parentElement.parentElement.removeChild(article); 
      let inProgress = document.getElementsByTagName('section')[2].children[1]; 
 
      finishBtn.classList.add('orange');
      finishBtn.textContent = 'Finish';   
      finishBtn.addEventListener('click', () => {
        inProgress.removeChild(article);
        toComplete();
      });
      
      div.replaceChild(deleteBtn, startBtn);
      div.appendChild(finishBtn);

      inProgress.appendChild(article);
    }

    function toComplete() { 
      let complete = document.getElementsByTagName('section')[3].children[1]; 
      article.removeChild(div);   
      complete.appendChild(article);  
    }
  }
}
