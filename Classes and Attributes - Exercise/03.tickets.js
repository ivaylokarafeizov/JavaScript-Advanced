function tickets(input, sortCriteria) {
  class Ticket {
    constructor(destination, price, status) {
      this.destination = destination;
      this.price = price;
      this.status = status;
    }
  }

  let output = [];
  for (const line of input) {
    let [destination, price, status] = line.split('|');
    let ticketData = new Ticket(destination, Number(price), status);

    output.push(ticketData);
  }

  if (sortCriteria == 'destination') {
    output.sort((a, b) => a.destination.localeCompare(b.destination));
  } else if (sortCriteria == 'price') {
    output.sort((a, b) => a.price - b.price);
  } else if (sortCriteria == 'status') {
    output.sort((a, b) => a.status.localeCompare(b.status));
  }

  return output;
}

tickets(
  [
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed',
  ],
  'destination'
);
