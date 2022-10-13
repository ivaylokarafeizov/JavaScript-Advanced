window.addEventListener('load', solve);

function solve() {
  let model = document.querySelector('#model');
  let year = document.querySelector('#year');
  let description = document.querySelector('#description');
  let price = document.querySelector('#price');

  let total = 0;
  let addBtn = document.querySelector('#add');
  addBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (
      model.value == '' ||
      year.value == '' ||
      description.value == '' ||
      price.value == ''
    ) {
      return;
    }

    if (year.value <= 0 || price.value <= 0) {
      return;
    }

    add([model, price, year, description]);
  });

  function add(input) {
    let furnitureList = document.querySelector('#furniture-list');

    let trInfo = document.createElement('tr');
    trInfo.className = 'info';

    let tdModel = document.createElement('td');
    tdModel.textContent = model.value;

    let tdPrice = document.createElement('td');
    tdPrice.textContent = `${Number(price.value).toFixed(2)}`;

    let tdButtons = document.createElement('td');

    let moreBtn = document.createElement('button');
    moreBtn.className = 'moreBtn';
    moreBtn.textContent = 'More Info';
    moreBtn.addEventListener('click', (e) => {
      if (e.currentTarget.textContent == 'More Info') {
        e.currentTarget.textContent = 'Less Info';
        trHide.style.display = 'contents';
      } else {
        e.currentTarget.textContent = 'More Info';
        trHide.style.display = 'none';
      }
    });

    let buyBtn = document.createElement('button');
    buyBtn.className = 'buyBtn';
    buyBtn.textContent = 'Buy it';
    buyBtn.addEventListener('click', (e) => {
      let data = e.target.parentElement.parentElement;
      let price = data.querySelector('td:nth-of-type(2)');

      total += Number(price.textContent);

      let totalPrice = document.querySelector('.total-price');
      totalPrice.textContent = `${Number(total).toFixed(2)}`;

      data.remove();
    });

    let trHide = document.createElement('tr');
    trHide.className = 'hide';

    let tdYear = document.createElement('td');
    tdYear.textContent = `Year: ${year.value}`;

    let tdDescription = document.createElement('td');
    tdDescription.colSpan = 3;
    tdDescription.textContent = `Description: ${description.value}`;

    tdButtons.appendChild(moreBtn);
    tdButtons.appendChild(buyBtn);
    trInfo.appendChild(tdModel);
    trInfo.appendChild(tdPrice);
    trInfo.appendChild(tdButtons);
    trHide.appendChild(tdYear);
    trHide.appendChild(tdDescription);
    furnitureList.appendChild(trInfo);
    furnitureList.appendChild(trHide);

    for (const el of input) {
      el.value = '';
    }
  }
}
