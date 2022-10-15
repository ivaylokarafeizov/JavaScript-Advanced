window.addEventListener('load', solution);

function solution() {
  const fullNameField = document.getElementById('fname');
  const emailField = document.getElementById('email');
  const numberField = document.getElementById('phone');
  const addressField = document.getElementById('address');
  const codeField = document.getElementById('code');
  const submitBtn = document.getElementById('submitBTN');
  submitBtn.addEventListener('click', submitReservation);

  const ulList = document.getElementById('infoPreview');
  const editBtn = document.getElementById('editBTN');
  const continueBtn = document.getElementById('continueBTN');
  continueBtn.addEventListener('click', removeDivContent);

  function submitReservation() {
    const nameContent = fullNameField.value;
    const emailContent = emailField.value;
    const phoneContent = numberField.value;
    const addressContent = addressField.value;
    const codeContent = codeField.value;

    if (!nameContent || !emailContent) {
      return;
    }

    submitBtn.disabled = true;
    editBtn.disabled = false;
    continueBtn.disabled = false;

    fullNameField.disabled = true;
    emailField.disabled = true;
    numberField.disabled = true;
    addressField.disabled = true;
    codeField.disabled = true;

    const nameEl = document.createElement('li');
    nameEl.textContent = `Full Name: ${nameContent}`;

    const emailEl = document.createElement('li');
    emailEl.textContent = `Email: ${emailContent}`;

    const phoneEl = document.createElement('li');
    phoneEl.textContent = `Phone Number: ${phoneContent}`;

    const addressEl = document.createElement('li');
    addressEl.textContent = `Address: ${addressContent}`;

    const codeEl = document.createElement('li');
    codeEl.textContent = `Postal Code: ${codeContent}`;

    ulList.appendChild(nameEl);
    ulList.appendChild(emailEl);
    ulList.appendChild(phoneEl);
    ulList.appendChild(addressEl);
    ulList.appendChild(codeEl);

    editBtn.addEventListener('click', () => {
      editBtn.disabled = true;
      continueBtn.disabled = true;
      submitBtn.disabled = false;

      fullNameField.disabled = false;
      emailField.disabled = false;
      numberField.disabled = false;
      addressField.disabled = false;
      codeField.disabled = false;

      fullNameField.value = nameContent;
      emailField.value = emailContent;
      numberField.value = phoneContent;
      addressField.value = addressContent;
      codeField.value = codeContent;

      ulList.removeChild(nameEl);
      ulList.removeChild(emailEl);
      ulList.removeChild(phoneEl);
      ulList.removeChild(addressEl);
      ulList.removeChild(codeEl);
    });

    clearInputFields();
  }

  function removeDivContent() {
    const divBlock = document.getElementById('block');
    const children = Array.from(document.getElementById('block').childNodes);

    for (const child of children) {
      divBlock.removeChild(child);
    }

    const message = document.createElement('h3');
    message.textContent = 'Thank you for your reservation!';
    divBlock.appendChild(message);
  }

  function clearInputFields() {
    fullNameField.value = '';
    emailField.value = '';
    numberField.value = '';
    addressField.value = '';
    codeField.value = '';
  }
}
