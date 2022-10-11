let { assert } = require('chai');
let { rentCar } = require('./rentCar');

describe('Test object functionality', () => {
  describe('Test rentCar.searchCar', () => {
    it('should return message if matching elements', () => {
      assert.equal(
        rentCar.searchCar(['Volkswagen', 'BMW', 'Audi'], 'BMW'),
        'There is 1 car of model BMW in the catalog!'
      );
    });
    it('should return error if submitted invalid parameters', () => {
      assert.throws(() => {
        rentCar.searchCar({}, 4);
      }, 'Invalid input!');
    });
    it('should return error if no matching elements', () => {
      assert.throws(() => {
        rentCar.searchCar(['Volkswagen', 'BMW', 'Audi'], 'A4');
      }, 'There are no such models in the catalog!');
    });
  });
  describe('Test rentCar.calculatePriceOfCar', function () {
    it('should return message if matching elements', () => {
      assert.equal(
        rentCar.calculatePriceOfCar('BMW', 3),
        'You choose BMW and it will cost $135!'
      );
    });
    it('should return error if submitted invalid parameters', () => {
      assert.throws(() => {
        rentCar.calculatePriceOfCar({}, 'I');
      }, 'Invalid input!');
    });
    it('should return error if no matching elements', () => {
      assert.throws(() => {
        rentCar.calculatePriceOfCar('A4', 3);
      }, 'No such model in the catalog!');
    });
  });
  describe('Test rentCar.checkBudget', function () {
    it('should return message if budget is equal to the cost', () => {
      assert.equal(rentCar.checkBudget(100, 30, 3000), 'You rent a car!');
    });
    it('should return message if budget is bigger than the cost', () => {
      assert.equal(rentCar.checkBudget(100, 20, 3000), 'You rent a car!');
    });
    it('should return error if submitted invalid parameters', () => {
      assert.throws(() => {
        rentCar.checkBudget('A4', 'I', 'I');
      }, 'Invalid input!');
    });
    it('should return message if budget is less than cost', () => {
      assert.equal(
        rentCar.checkBudget(200, 20, 3000),
        'You need a bigger budget!'
      );
    });
  });
});
