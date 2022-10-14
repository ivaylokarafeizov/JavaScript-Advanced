window.addEventListener('load', solve);

function solve() {
  let description = document.querySelector('#description');
  let clientName = document.querySelector('#client-name');
  let clientPhone = document.querySelector('#client-phone');
  let productType = document.querySelector('#type-product');

  let sendBtn = document.querySelector('form button');
  sendBtn.addEventListener('click', sendForm);

  function sendForm(e) {
    e.preventDefault();

    if (!description.value || !clientName.value || !clientPhone.value) {
      return;
    }

    let div = document.createElement('div');
    div.classList.add('container');

    let h2 = document.createElement('h2');
    h2.textContent = `Product type for repair: ${productType.value}`;

    let h3 = document.createElement('h3');
    h3.textContent = `Client information: ${clientName.value}, ${clientPhone.value}`;

    let h4 = document.createElement('h4');
    h4.textContent = `Description of the problem: ${description.value}`;

    let startRepairBtn = document.createElement('button');
    startRepairBtn.textContent = 'Start repair';
    startRepairBtn.classList.add('start-btn');
    startRepairBtn.addEventListener('click', (e) => {
      e.target.disabled = true;
      finishRepairBtn.disabled = false;
    });

    let finishRepairBtn = document.createElement('button');
    finishRepairBtn.classList.add('finish-btn');
    finishRepairBtn.disabled = true;
    finishRepairBtn.textContent = 'Finish repair';
    finishRepairBtn.addEventListener('click', (e) => {
      let completed = document.getElementById('completed-orders');

      div.removeChild(startRepairBtn);
      div.removeChild(finishRepairBtn);

      document.querySelector('#received-orders').removeChild(div);
      completed.appendChild(div);
    });

    let children = [h2, h3, h4, startRepairBtn, finishRepairBtn];
    for (const child of children) {
      div.appendChild(child);
    }

    document.querySelector('#received-orders').appendChild(div);

    description.value = '';
    clientName.value = '';
    clientPhone.value = '';
  }

  let clearBtn = document.querySelector('.clear-btn');
  clearBtn.addEventListener('click', () => {
    const orders = document.querySelectorAll('#completed-orders div');

    for (const order of orders) {
      document.querySelector('#completed-orders').removeChild(order);
    }
  });
}
