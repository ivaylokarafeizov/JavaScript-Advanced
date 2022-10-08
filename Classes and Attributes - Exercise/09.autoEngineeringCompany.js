function autoEngineeringCompany(input) {
  let carBrands = new Map();

  for (const line of input) {
    let [carBrand, carModel, producedCars] = line.split(' | ');
    producedCars = Number(producedCars);

    if (!carBrands.has(carBrand)) {
      carBrands.set(carBrand, new Map());
    }

    let carModels = carBrands.get(carBrand);
    if (!carModels.has(carModel)) {
      carModels.set(carModel, 0);
    }
    carModels.set(carModel, carModels.get(carModel) + producedCars);
  }

  for (const carBrand of carBrands.keys()) {
    console.log(carBrand);

    let models = carBrands.get(carBrand);
    for (const [carModel, producedCars] of models.entries()) {
      console.log(`###${carModel} -> ${producedCars}`);
    }
  }
}

autoEngineeringCompany([
  'Audi | Q7 | 1000',
  'Audi | Q6 | 100',
  'BMW | X5 | 1000',
  'BMW | X6 | 100',
  'Citroen | C4 | 123',
  'Volga | GAZ-24 | 1000000',
  'Lada | Niva | 1000000',
  'Lada | Jigula | 1000000',
  'Citroen | C4 | 22',
  'Citroen | C5 | 10',
]);
