function solve() {
  document.querySelector('#container button:nth-child(4)')
    .addEventListener('click', addToMoviesOnScreen);

  function addToMoviesOnScreen(e) {
    e.preventDefault();

    let name = document.querySelector('input[placeholder="Name"]');
    let hall = document.querySelector('input[placeholder="Hall"]');
    let ticketPrice = document.querySelector('input[placeholder="Ticket Price"]');

    if (name.value === '' || hall.value === '' || ticketPrice.value === '') {
      return;
    }

    if (isNaN(ticketPrice.value)) {
      return;
    }

    let span = document.createElement('span');
    span.textContent = name.value;

    let strong1 = document.createElement('strong');
    strong1.textContent = `Hall: ${hall.value}`;

    let strong2 = document.createElement('strong');
    strong2.textContent = Number(ticketPrice.value).toFixed(2);

    let input = document.createElement('input');
    input.placeholder = 'Tickets Sold';

    let archiveBtn = document.createElement('button');
    archiveBtn.textContent = 'Archive';
    archiveBtn.addEventListener('click', toArchive);

    let div = document.createElement('div');
    div.appendChild(strong2);
    div.appendChild(input);
    div.appendChild(archiveBtn);

    let li = document.createElement('li');
    li.appendChild(span);
    li.appendChild(strong1);
    li.appendChild(div);

    document.querySelector('#movies ul:nth-child(2)').appendChild(li);

    name.value = '';
    hall.value = '';
    ticketPrice.value = '';

    function toArchive() {
      let soldTickets = document.querySelector('input[placeholder="Tickets Sold"]').value;

      if (soldTickets == '' || isNaN(soldTickets)) {
        return;
      }

      let totalProfit = soldTickets * strong2.textContent;
      let profitStrong = document.createElement('strong');
      profitStrong.textContent = `Total amount: ${Number(totalProfit).toFixed(2)}`;

      let deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.addEventListener('click', (e) => {
        let ul = document.querySelector('#archive ul:nth-child(2)');
        let li = e.target.parentElement;
        ul.removeChild(li);
      });

      let liElement = document.createElement('li');
      liElement.appendChild(span);
      liElement.appendChild(profitStrong);
      liElement.appendChild(deleteBtn);

      document.querySelector('#movies ul:nth-child(2)').removeChild(li);
      document.querySelector('#archive ul:nth-child(2)').appendChild(liElement);
    }

    let clearBtn = document.querySelector('#archive > button:nth-child(3)');
    clearBtn.addEventListener('click', () => {
      document.querySelector('#archive ul:nth-child(2)').innerHTML = '';
    });
  }
}