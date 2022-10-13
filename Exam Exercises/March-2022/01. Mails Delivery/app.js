function solve() {
  const recipientField = document.getElementById('recipientName');
  const titleField = document.getElementById('title');
  const messageField = document.getElementById('message');
  const addBtn = document.getElementById('add');
  const resetBtn = document.getElementById('reset');

  const listOfMails = document.getElementById('list');
  const sendMails = document.querySelector('.sent-list');
  const deletedMails = document.querySelector('.delete-list');

  addBtn.type = 'button';
  resetBtn.type = 'button';

  addBtn.addEventListener('click', deliverMail);
  resetBtn.addEventListener('click', resetFieldValues);

  function deliverMail() {
    const recipientContent = recipientField.value;
    const titleContent = titleField.value;
    const messageContent = messageField.value;
    let elementToRemove = null;

    if (!recipientContent || !titleContent || !messageContent) {
      return;
    }

    const liEl = document.createElement('li');
    const titleEl = document.createElement('h4');
    titleEl.textContent = `Title: ${titleContent}`;

    const recipientName = document.createElement('h4');
    recipientName.textContent = `Recipient Name: ${recipientContent}`;

    const messageEl = document.createElement('span');
    messageEl.textContent = messageContent;

    const divEl = document.createElement('div');
    divEl.id = 'list-action';

    const submitBtn = document.createElement('button');
    submitBtn.type = 'submit';
    submitBtn.id = 'send';
    submitBtn.textContent = 'Send';

    submitBtn.addEventListener('click', (ev) => {
      elementToRemove = ev.target.parentElement.parentElement;
      listOfMails.removeChild(elementToRemove);
      divEl.removeChild(submitBtn);

      const title = document.createElement('span');
      title.textContent = `Title: ${titleContent}`;

      const recipient = document.createElement('span');
      recipient.textContent = `To: ${recipientContent}`;

      const div = document.createElement('div');
      div.classList.add('btn');

      const button = document.createElement('button');
      button.addEventListener('click', (ev) => {
        elementToRemove = ev.target.parentElement.parentElement;
        elementToRemove.removeChild(div);
        deletedMails.appendChild(elementToRemove);
      });

      button.type = 'submit';
      button.classList.add('delete');
      button.textContent = 'Delete';

      div.appendChild(button);
      liEl.removeChild(titleEl);
      liEl.removeChild(recipientName);
      liEl.removeChild(messageEl);
      liEl.removeChild(divEl);
      liEl.appendChild(recipient);
      liEl.appendChild(title);
      liEl.appendChild(div);
      sendMails.appendChild(elementToRemove);
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.addEventListener('click', (ev) => {
      elementToRemove = ev.target.parentElement.parentElement;
      deletedMails.appendChild(elementToRemove);

      const title = document.createElement('span');
      title.textContent = `Title: ${titleContent}`;

      const recipient = document.createElement('span');
      recipient.textContent = `To: ${recipientContent}`;

      liEl.removeChild(titleEl);
      liEl.removeChild(recipientName);
      liEl.removeChild(messageEl);
      liEl.removeChild(divEl);
      liEl.appendChild(recipient);
      liEl.appendChild(title);
    });

    deleteBtn.type = 'submit';
    deleteBtn.id = 'delete';
    deleteBtn.textContent = 'Delete';

    divEl.appendChild(submitBtn);
    divEl.appendChild(deleteBtn);
    liEl.appendChild(titleEl);
    liEl.appendChild(recipientName);
    liEl.appendChild(messageEl);
    liEl.appendChild(divEl);
    listOfMails.appendChild(liEl);

    resetFieldValues();
  }

  function resetFieldValues() {
    recipientField.value = '';
    titleField.value = '';
    messageField.value = '';
  }
}

solve();
