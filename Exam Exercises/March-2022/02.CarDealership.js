class CarDealership {
  constructor(name) {
    this.name = name;
    this.availableCars = [];
    this.soldCars = [];
    this.totalIncome = 0;
  }

  addCar(model, horsepower, price, mileage) {
    if (model == '' || horsepower < 0 || price < 0 || mileage < 0) {
      throw new Error('Invalid input!');
    }

    this.availableCars.push({ model, horsepower, price, mileage });
    return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(
      2
    )} km - ${price.toFixed(2)}$`;
  }

  sellCar(model, desiredMileage) {
    let car = this.availableCars.find((c) => c.model == model);

    if (!car) {
      throw new Error(`${model} was not found!`);
    }

    let mileageDifference = car.mileage - desiredMileage;

    if (car.mileage <= desiredMileage) {
      car.price = car.price;
    } else if (mileageDifference <= 40000) {
      car.price *= 0.95;
    } else if (mileageDifference > 40000) {
      car.price *= 0.9;
    }

    const carIndex = this.availableCars.indexOf(car);
    this.availableCars.splice(carIndex, 1);

    this.soldCars.push({
      model: car.model,
      horsepower: car.horsepower,
      soldPrice: car.price,
    });

    this.totalIncome += car.price;
    return `${model} was sold for ${car.price.toFixed(2)}$`;
  }

  currentCar() {
    if (!this.availableCars.length) {
      return 'There are no available cars';
    }

    let result = [];

    result.push('-Available cars:');
    this.availableCars.forEach((c) => {
      result.push(
        `---${c.model} - ${c.horsepower} HP - ${c.mileage.toFixed(
          2
        )} km - ${c.price.toFixed(2)}$`
      );
    });
    return result.join('\n');
  }

  salesReport(criteria) {
    if (criteria == 'horsepower') {
      this.soldCars.sort((a, b) => b.horsepower - a.horsepower);
    } else if (criteria == 'model') {
      this.soldCars.sort((a, b) => a.model.localeCompare(b.model));
    } else {
      throw new Error('Invalid criteria!');
    }

    let report = [];

    report.push(
      `-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`
    );
    report.push(`-${this.soldCars.length} cars sold:`);

    this.soldCars.forEach((car) =>
      report.push(
        `---${car.model} - ${car.horsepower} HP - ${car.soldPrice.toFixed(2)}$`
      )
    );

    return report.join('\n');
  }
}

let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('horsepower'));
