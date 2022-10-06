window.addEventListener('load', solve);

function solve() {
  let make = document.getElementById('make');
  let model = document.getElementById('model');
  let year = document.getElementById('year');
  let fuel = document.getElementById('fuel');
  let originalPrice = document.getElementById('original-cost');
  let sellingPrice = document.getElementById('selling-price');

  let profit = 0;

  document.getElementById('publish').addEventListener('click', (e) => {
    e.preventDefault();

    if (
      make.value == '' || model.value == '' || year.value == '' ||
      fuel.value == '' || originalPrice.value == '' || sellingPrice.value == ''
    ) {
      return;
    }

    if (originalPrice.value > sellingPrice.value) {
      return;
    }

    publish([make, model, year, fuel, originalPrice, sellingPrice]);
  });

  function publish(input) {
    let trEl = document.createElement('tr');
    trEl.classList.add('row');

    for (const el of input) {
      let td = document.createElement('td');
      td.textContent = el.value;
      trEl.appendChild(td);
    }

    let tdButtons = document.createElement('td');

    let editBtn = document.createElement('button');
    editBtn.classList = 'action-btn edit';
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', edit);

    let sellBtn = document.createElement('button');
    sellBtn.classList = 'action-btn sell';
    sellBtn.textContent = 'Sell';
    sellBtn.addEventListener('click', sell);

    tdButtons.appendChild(editBtn);
    tdButtons.appendChild(sellBtn);
    trEl.appendChild(tdButtons); 
    document.querySelector('#table-body').appendChild(trEl);

    for (const el of input) {
      el.value = '';
    }

    function edit(e) {
      let row = e.target.parentElement.parentElement;   
      let makeText = row.querySelector('td:nth-of-type(1)');
      let modelText = row.querySelector('td:nth-of-type(2)');
      let yearText = row.querySelector('td:nth-of-type(3)');
      let fuelText = row.querySelector('td:nth-of-type(4)');
      let originalPriceText = row.querySelector('td:nth-of-type(5)');
      let sellingPriceText = row.querySelector('td:nth-of-type(6)');

      document.getElementById('make').value = makeText.textContent;
      document.getElementById('model').value = modelText.textContent;
      document.getElementById('year').value = yearText.textContent;
      document.getElementById('fuel').value = fuelText.textContent;
      document.getElementById('original-cost').value = originalPriceText.textContent;
      document.getElementById('selling-price').value = sellingPriceText.textContent;

      row.remove();
    }

    function sell(e) { 
      let row = e.target.parentElement.parentElement; 
      let make = row.querySelector('td:nth-of-type(1)').textContent;
      let model = row.querySelector('td:nth-of-type(2)').textContent;
      let year = row.querySelector('td:nth-of-type(3)').textContent; 
      let originalPrice = row.querySelector('td:nth-of-type(5)').textContent;
      let sellingPrice = row.querySelector('td:nth-of-type(6)').textContent; 
      
      let soldCarsLi = document.createElement('li'); 
      soldCarsLi.classList.add('each-list');

      let makeAndModelSpan = document.createElement('span');
      makeAndModelSpan.textContent = `${make} ${model}`;

      let prodYearSpan = document.createElement('span');
      prodYearSpan.textContent = `${year}`;

      let priceDiffSpan = document.createElement('span');
      let priceDiff = Number(sellingPrice) - Number(originalPrice);
      priceDiffSpan.textContent = `${priceDiff}`;

      soldCarsLi.appendChild(makeAndModelSpan);
      soldCarsLi.appendChild(prodYearSpan);
      soldCarsLi.appendChild(priceDiffSpan);

      document.querySelector('#cars-list').appendChild(soldCarsLi);

      profit += priceDiff; 
      document.querySelector('#profit').textContent = profit.toFixed(2);

      row.remove();
    }
  }
}
