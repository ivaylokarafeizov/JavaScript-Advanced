function solution() {
  let input = document.querySelector('.card div input');
  let addGiftBtn = document.querySelector('.card div button');
  addGiftBtn.addEventListener('click', addGift);

  let ulElements = document.querySelectorAll('section.card ul');
  let listOfGifts = ulElements[0];
  let sentGifts = ulElements[1];
  let discardGifts = ulElements[2];

  function addGift() {
    let inputValue = input.value;
    input.value = '';

    let li = document.createElement('li');
    li.classList.add('gift');
    li.textContent = inputValue;

    let sendButton = document.createElement('button');
    sendButton.id = 'sendButton';
    sendButton.textContent = 'Send';
    sendButton.addEventListener('click', () => {
      li.removeChild(sendButton);
      li.removeChild(discardButton);
      sentGifts.appendChild(li);
    });

    let discardButton = document.createElement('button');
    discardButton.id = 'discardButton';
    discardButton.textContent = 'Discard';
    discardButton.addEventListener('click', () => {
      li.removeChild(sendButton);
      li.removeChild(discardButton);
      discardGifts.appendChild(li);
    });

    li.appendChild(sendButton);
    li.appendChild(discardButton);

    let gifts = Array.from(listOfGifts.children);
    gifts.push(li);
    gifts.sort((a, b) => a.innerHTML.localeCompare(b.innerHTML));
    gifts.forEach((gift) => listOfGifts.appendChild(gift));
  }
}
