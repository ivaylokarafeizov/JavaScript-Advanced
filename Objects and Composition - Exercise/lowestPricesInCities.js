function lowestPricesInCities(array) {
  let products = [];

  while (array.length) {
    let [town, product, price] = array.shift().split(' | ');
    if (products.filter(x => x.product === product).length > 0) {
      let obj = products.find(x => x.product === product);

      if (obj.price > Number(price)) {
        obj.price = Number(price);
        obj.town = town;
      }
    } else {
      let obj = { product, town, price: Number(price) };
      products.push(obj);
    }
  }

  for (let product of products) {
    console.log(`${product.product} -> ${product.price} (${product.town})`);
  }
}

lowestPricesInCities([
  'Sample Town | Sample Product | 1000',
  'Sample Town | Orange | 2',
  'Sample Town | Peach | 1',
  'Sofia | Orange | 3',
  'Sofia | Peach | 2',
  'New York | Sample Product | 1000.1',
  'New York | Burger | 10',
]);
