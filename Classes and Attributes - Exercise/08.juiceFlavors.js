function juiceFlavors(input) {
  let juices = new Map();
  let bottles = new Map();

  for (let line of input) {
    let [juice, qty] = line.split(' => ');
    qty = Number(qty);

    if (!juices.has(juice)) {
      juices[juice] = 0;
    }
    juices[juice] += qty;

    if (juices[juice] >= 1000) {
      if (!bottles.has(juice)) {
        bottles.set(juice, 0);
      }
      bottles.set(juice, bottles.get(juice) + parseInt(juices[juice] / 1000));
      juices[juice] %= 1000;
    }
    juices.set(juice, juices[juice] + qty);
  }

  for (let [juice, bottleQty] of bottles) {
    console.log(juice + ' => ' + bottleQty);
  }
}

juiceFlavors([
  'Orange => 2000',
  'Peach => 1432',
  'Banana => 450',
  'Peach => 600',
  'Strawberry => 549',
]);
