let { assert } = require('chai');
let { chooseYourCar } = require('./chooseYourCar');

describe('Test a variable named chooseYourCar, which represents an object', () => {
  describe('Test chooseYourCar.choosingType', () => {
    it('should throw error if year less than 1900', () => {
      assert.throws(() => {
        chooseYourCar.choosingType('Sedan', 'red', 1899);
      }, 'Invalid Year!');
    });
    it('should return string if car year is 2022', () => {
      assert.equal(
        chooseYourCar.choosingType('Sedan', 'red', 2022),
        'This red Sedan meets the requirements, that you have.'
      );
    });
    it('should throw error if year bigger than 2022', () => {
      assert.throws(() => {
        chooseYourCar.choosingType('Sedan', 'red', 2023);
      }, 'Invalid Year!');
    });
    it('should throw error if the value of the string is different from Sedan', () => {
      assert.throws(() => {
        chooseYourCar.choosingType('asd', 'red', 2021);
      }, 'This type of car is not what you are looking for.');
    });
    it('should return string if car is greater than 2010', () => {
      assert.equal(
        chooseYourCar.choosingType('Sedan', 'red', 2011),
        'This red Sedan meets the requirements, that you have.'
      );
    });
    it('should return string if car is equal to 2010', () => {
      assert.equal(
        chooseYourCar.choosingType('Sedan', 'red', 2010),
        'This red Sedan meets the requirements, that you have.'
      );
    });
    it('should return string if car is less than 2010', () => {
      assert.equal(
        chooseYourCar.choosingType('Sedan', 'red', 2000),
        'This Sedan is too old for you, especially with that red color.'
      );
    });
  });
  describe('Test chooseYourCar.brandName', () => {
    it('should throw error if not array', () => {
      assert.throws(() => {
        chooseYourCar.brandName('das', 2);
      }, 'Invalid Information!');
    });
    it('should throw error if invalid index', () => {
      assert.throws(() => {
        chooseYourCar.brandName(['BMW', 'Toyota', 'Peugeot'], 2.5);
      }, 'Invalid Information!');
    });
    it('should throw error if index less than 0', () => {
      assert.throws(() => {
        chooseYourCar.brandName(['BMW', 'Toyota', 'Peugeot'], -2);
      }, 'Invalid Information!');
    });
    it('should throw error if index bigger than array length', () => {
      assert.throws(() => {
        chooseYourCar.brandName(['BMW', 'Toyota', 'Peugeot'], 5);
      }, 'Invalid Information!');
    });
    it('should throw error if index equal to array length', () => {
      assert.throws(() => {
        chooseYourCar.brandName(['BMW', 'Toyota', 'Peugeot'], 3);
      }, 'Invalid Information!');
    });
    it('should throw error if index stringified number', () => {
      assert.throws(() => {
        chooseYourCar.brandName(['BMW', 'Toyota', 'Peugeot'], '3');
      }, 'Invalid Information!');
    });
    it('should return string if valid input', () => {
      assert.equal(
        chooseYourCar.brandName(['BMW', 'Toyota', 'Peugeot'], 2),
        'BMW, Toyota'
      );
    });
  });
  describe('Test chooseYourCar.carFuelConsumption', () => {
    it('should throw error if first param not number', () => {
      assert.throws(() => {
        chooseYourCar.carFuelConsumption('index', 222);
      }, 'Invalid Information!');
    });
    it('should throw error if second param not number', () => {
      assert.throws(() => {
        chooseYourCar.carFuelConsumption(222, 'index');
      }, 'Invalid Information!');
    });
    it('should throw error if params not numbers', () => {
      assert.throws(() => {
        chooseYourCar.carFuelConsumption('222', '22');
      }, 'Invalid Information!');
    });
    it('should throw error if first param less than 0', () => {
      assert.throws(() => {
        chooseYourCar.carFuelConsumption(-2, 222);
      }, 'Invalid Information!');
    });
    it('should throw error if first param 0', () => {
      assert.throws(() => {
        chooseYourCar.carFuelConsumption(0, 222);
      }, 'Invalid Information!');
    });
    it('should throw error if second param less than 0', () => {
      assert.throws(() => {
        chooseYourCar.carFuelConsumption(222, -2);
      }, 'Invalid Information!');
    });
    it('should throw error if both params less than 0', () => {
      assert.throws(() => {
        chooseYourCar.carFuelConsumption(-222, -2);
      }, 'Invalid Information!');
    });
    it('should throw error if both params 0', () => {
      assert.throws(() => {
        chooseYourCar.carFuelConsumption(0, 0);
      }, 'Invalid Information!');
    });
    it('should return string if car liters per km less than 7', () => {
      assert.equal(
        chooseYourCar.carFuelConsumption(100, 5),
        'The car is efficient enough, it burns 5.00 liters/100 km.'
      );
    });
    it('should return string if car liters per km 7', () => {
      assert.equal(
        chooseYourCar.carFuelConsumption(222, 7),
        'The car is efficient enough, it burns 3.15 liters/100 km.'
      );
    });
    it('should return string if car liters per km bigger than 7', () => {
      assert.equal(
        chooseYourCar.carFuelConsumption(222, 22),
        'The car burns too much fuel - 9.91 liters!'
      );
    });
  });
});
