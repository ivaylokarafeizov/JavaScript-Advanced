class Garden {
  constructor(spaceAvailable) {
    this.spaceAvailable = spaceAvailable;
    this.plants = [];
    this.storage = [];
  }

  addPlant(plantName, spaceRequired) {
    if (spaceRequired > this.spaceAvailable) {
      throw new Error('Not enough space in the garden.');
    }
    this.plants.push({ plantName, spaceRequired, ripe: false, quantity: 0 });
    this.spaceAvailable -= spaceRequired;

    return `The ${plantName} has been successfully planted in the garden.`;
  }

  ripenPlant(plantName, quantity) {
    if (!this.plants.find((e) => e.plantName == plantName)) {
      throw new Error(`There is no ${plantName} in the garden.`);
    }

    for (let plant of this.plants) {
      if (plant.plantName == plantName && plant.ripe == true) {
        throw new Error(`The ${plantName} is already ripe.`);
      }
    }

    if (quantity <= 0) {
      throw new Error('The quantity cannot be zero or negative.');
    }

    let plant = this.plants.filter((obj) => obj.plantName == plantName);
    plant[0].quantity += quantity;
    plant[0].ripe = true;
    if (quantity == 1) {
      return `${quantity} ${plantName} has successfully ripened.`;
    }
    if (quantity > 1) {
      return `${quantity} ${plantName}s have successfully ripened.`;
    }
  }

  harvestPlant(plantName) {
    if (!this.plants.find((e) => e.plantName == plantName)) {
      throw new Error(`There is no ${plantName} in the garden.`);
    } else {
      let plantToHarvest = this.plants.find((e) => e.plantName == plantName);
      if (plantToHarvest.ripe == false) {
        throw new Error(
          `The ${plantName} cannot be harvested before it is ripe.`
        );
      }
    }
    let plantToHarvest = this.plants.find((e) => e.plantName == plantName);
    let index = this.plants.indexOf(plantToHarvest);
    this.plants.splice(index, 1);
    let quantity = plantToHarvest.quantity;

    this.spaceAvailable += plantToHarvest.spaceRequired;
    this.storage.push({ plantName, quantity });

    return `The ${plantName} has been successfully harvested.`;
  }

  generateReport() {
    let res = `The garden has ${this.spaceAvailable} free space left.\nPlants in the garden: `;

    this.plants.sort((a, b) => a.plantName.localeCompare(b.plantName));
    this.plants.forEach((e) => (res += e.plantName + ', '));

    res = res.substring(0, res.length - 2);
    res += '\nPlants in storage: ';

    if (this.storage.length == 0) {
      res += 'The storage is empty.';
    } else {
      this.storage.forEach(
        (e) => (res += `${e.plantName} ` + `(${e.quantity}), `)
      );
    }
    return res.substring(0, res.length - 2);
  }
}

const myGarden = new Garden(250);
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 100));
console.log(myGarden.addPlant('cucumber', 30));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.ripenPlant('orange', 4));
