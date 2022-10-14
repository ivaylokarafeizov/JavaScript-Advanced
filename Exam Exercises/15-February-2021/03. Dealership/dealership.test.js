let { assert } = require('chai');
let { dealership } = require('./dealership');

describe('Test a variable named dealership, which represents an object', () => {
  describe('Test dealership.newCarCost', () => {
    it('should return a fixed amount of money deducted from new car price', () => {
      assert.equal(dealership.newCarCost('Audi A8 D5', 30000), 5000);
    });
    it('should return new car price', () => {
      assert.equal(dealership.newCarCost('Audi A8', 30000), 30000);
    });
  });
  describe('Test dealership.carEquipment', () => {
    it('should return selected car extras', () => {
      assert.deepEqual(
        dealership.carEquipment(
          ['heated seats', 'sport rims', 'navigation'],
          [0, 2]
        ),
        ['heated seats', 'navigation']
      );
    });
  });
  describe('Test dealership.euroCategory', () => {
    it('should return a message -> 5% discount to the final price', () => {
      assert.equal(
        dealership.euroCategory(5),
        'We have added 5% discount to the final price: 14250.'
      );
    });
    it('should return a message -> 5% discount if category equal to 4', () => {
      assert.equal(
        dealership.euroCategory(4),
        'We have added 5% discount to the final price: 14250.'
      );
    });
    it('should return a message -> there is no discount', () => {
      assert.equal(
        dealership.euroCategory(3),
        'Your euro category is low, so there is no discount from the final price!'
      );
    });
  });
});
