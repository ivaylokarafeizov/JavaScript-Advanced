class VegetableStore {
  constructor(owner, location) {
    this.owner = owner;
    this.location = location;
    this.availableProducts = [];
  }

  loadingVegetables(vegetables) {
    let result = [];

    for (const element of vegetables) {
      let [type, quantity, price] = element.split(' ');
      quantity = Number(quantity);
      price = Number(price);

      const availableVegetable = this.availableProducts.find(
        (v) => v.type == type
      );

      if (availableVegetable) {
        availableVegetable.quantity += quantity;

        if (availableVegetable.price < price) {
          availableVegetable.price = price;
        }
      } else {
        const vegetable = {
          type,
          quantity,
          price,
        };

        this.availableProducts.push(vegetable);
        result.push(type);
      }
    }

    return `Successfully added ${result.join(', ')}`;
  }

  buyingVegetables(selectedProducts) {
    let totalPrice = 0.0;

    for (const element of selectedProducts) {
      let [type, quantity] = element.split(' ');

      const existingVegetable = this.availableProducts.find(
        (v) => v.type == type
      );

      if (!existingVegetable) {
        throw new Error(
          `${type} is not available in the store, your current bill is $${totalPrice.toFixed(
            2
          )}.`
        );
      } else if (quantity > existingVegetable.quantity) {
        throw new Error(
          `The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(
            2
          )}.`
        );
      } else {
        const price = quantity * existingVegetable.price;
        existingVegetable.quantity -= quantity;
        totalPrice += price;
      }
    }

    return `Great choice! You must pay the following amount $${totalPrice.toFixed(
      2
    )}.`;
  }

  rottingVegetable(type, quantity) {
    const vegetable = this.availableProducts.find((v) => v.type == type);

    if (!vegetable) {
      throw new Error(`${type} is not available in the store.`);
    }

    if (quantity > vegetable.quantity) {
      vegetable.quantity = 0;
      return `The entire quantity of the ${type} has been removed.`;
    } else {
      vegetable.quantity -= quantity;
      return `Some quantity of the ${type} has been removed.`;
    }
  }

  revision() {
    let report = [];
    report.push('Available vegetables:');

    const sortedVegetables = this.availableProducts.sort(
      (p1, p2) => p1.price - p2.price
    );
    sortedVegetables.forEach((v) =>
      report.push(`${v.type}-${v.quantity}-$${v.price}`)
    );

    report.push(
      `The owner of the store is ${this.owner}, and the location is ${this.location}.`
    );
    return report.join('\n');
  }
}

let vegStore = new VegetableStore('Jerrie Munro', '1463 Pette Kyosheta, Sofia');
console.log(
  vegStore.loadingVegetables([
    'Okra 2.5 3.5',
    'Beans 10 2.8',
    'Celery 5.5 2.2',
    'Celery 0.5 2.5',
  ])
);
