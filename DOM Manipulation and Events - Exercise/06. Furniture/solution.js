function solve() {
  let textAreas = document.querySelectorAll('textarea'); 

  document.querySelector('#exercise > button:nth-child(3)')
    .addEventListener('click', generate);

  function generate() {
    let items = JSON.parse(textAreas[0].value);

    for (const item of items) {
      createElement(item.img, item.name, item.price, item.decFactor);
    }
  }

  function createElement(img, name, price, decFactor) {
    let table = document.querySelector('.table tbody');
    table.innerHTML += 
      `<tr>
        <td><img src="${img}" /></td>
        <td><p>${name}</p></td>
        <td><p>${price}</p></td>
        <td><p>${decFactor}</p></td>
        <td><input type="checkbox" /></td>
      </tr>`;
  }  

  document.querySelector('#exercise > button:nth-child(6)').addEventListener('click', buy); 

  function buy() {
    let checkboxes = Array.from(document.querySelectorAll('input[type="checkbox"]'));

    let items = [];
    let totalPrice = 0;
    let avgDecFactor = 0;
    for (const checkbox of checkboxes) {
      let row = checkbox.parentElement.parentElement; 
      
      if (checkbox.checked) {
        let name = row.querySelector('td:nth-child(2)').textContent;
        let price = row.querySelector('td:nth-child(3)').textContent;
        let decFactor = row.querySelector('td:nth-child(4)').textContent; 

        items.push(name); 
        totalPrice += Number(price);
        avgDecFactor += Number(decFactor);
      } 
    } 

    avgDecFactor = avgDecFactor / items.length; 
     
    if (items.length) {
      let result = `Bought furniture: ${items.join(', ')}\nTotal price: ${totalPrice
        .toFixed(2)}\nAverage decoration factor: ${avgDecFactor}`;
      textAreas[1].value = result;
    }  
  } 
}
