let { assert } = require('chai');
let { carService } = require('./carService');

describe('Tests object functionality', () => {
  describe('Check functions', () => {
    it('carService.isItExpensive should accept string correctly', () => {
      assert.equal(typeof carService.isItExpensive('Engine'), 'string');
    });
    it('carService.isItExpensive should not accept non-string', () => {
      assert.equal(typeof carService.isItExpensive(11), 'string');
    });
    it('carService.discount should accept numbers correctly', () => {
      assert.equal(
        carService.discount(15, 20),
        'Discount applied! You saved 6$'
      );
    });
    it('carService.discount should not accept non-numbers', () => {
      assert.throws(() => carService.discount(10, '23'), 'Invalid input');
    });
    it('carService.partsToBuy should not accept non-array', () => {
      assert.throws(() => carService.partsToBuy(11), 'Invalid input');
    });
  });
  describe('Check carService.isItExpensive', () => {
    it('should return message for Engine', () => {
      assert.equal(
        carService.isItExpensive('Engine'),
        'The issue with the car is more severe and it will cost more money'
      );
    });
    it('should return message for Transmission', () => {
      assert.equal(
        carService.isItExpensive('Transmission'),
        'The issue with the car is more severe and it will cost more money'
      );
    });
    it('should return message if conditions not met', () => {
      assert.equal(
        carService.isItExpensive('Trans'),
        'The overall price will be a bit cheaper'
      );
    });
  });
  describe('Check carService.discount', () => {
    it('should return message if parts smaller or equal to 2', () => {
      let numberOfParts = 2;
      let totalPrice = 100;
      assert.equal(
        carService.discount(numberOfParts, totalPrice),
        'You cannot apply a discount'
      );
    });
    it('should return message if parts more than 2', () => {
      let numberOfParts = 4;
      let totalPrice = 100;
      assert.equal(
        carService.discount(numberOfParts, totalPrice),
        'Discount applied! You saved 15$'
      );
    });
    it('should return message if 15% discount', () => {
      let numberOfParts = 4;
      let totalPrice = 100;
      assert.equal(
        carService.discount(numberOfParts, totalPrice),
        'Discount applied! You saved 15$'
      );
    });
    it('should return message if 30% discount', () => {
      let numberOfParts = 15;
      let totalPrice = 100;
      assert.equal(
        carService.discount(numberOfParts, totalPrice),
        'Discount applied! You saved 30$'
      );
    });
  });
  describe('Check carService.partsToBuy', () => {
    it('should return the total price', () => {
      let partsCatalog = [
        { part: 'blowoff valve', price: 145 },
        { part: 'coil springs', price: 230 },
      ];
      let neededParts = ['blowoff valve', 'injectors'];
      assert.equal(carService.partsToBuy(partsCatalog, neededParts), 145);
    });
    it('should return 0 if empty array', () => {
      assert.equal(carService.partsToBuy([], []), 0);
    });
  });
});
