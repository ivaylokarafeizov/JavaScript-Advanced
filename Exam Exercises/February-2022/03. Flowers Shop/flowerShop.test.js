let { assert } = require('chai');
let { flowerShop } = require('./flowerShop');

describe('Test object functionality', () => {
  describe('Test flowerShop.calcPriceOfFlowers', () => {
    it('should return error if invalid input', () => {
      assert.throws(
        () => flowerShop.calcPriceOfFlowers(2, {}, 'das'),
        'Invalid input!'
      );
    });
    it('should return the multiplied price and quantity', () => {
      assert.equal(
        flowerShop.calcPriceOfFlowers('Rose', 12, 15),
        'You need $180.00 to buy Rose!'
      );
    });
  });
  describe('Test flowerShop.checkFlowersAvailable', function () {
    it('should return if the flower is present in the array gardenArr', () => {
      assert.equal(
        flowerShop.checkFlowersAvailable('Lily', ['Rose', 'Lily', 'Orchid']),
        'The Lily are available!'
      );
    });
    it('should return if the flower is not present in the array gardenArr', () => {
      assert.equal(
        flowerShop.checkFlowersAvailable('Rose', ['Lily', 'Orchid']),
        'The Rose are sold! You need to purchase more!'
      );
    });
  });
  describe('Test flowerShop.sellFlowers', function () {
    it('should return error if invalid input', () => {
      assert.throws(() => {
        flowerShop.sellFlowers('Lily', {});
      }, 'Invalid input!');
    });
    it('should return if valid input', () => {
      assert.equal(
        flowerShop.sellFlowers(['Rose', 'Lily', 'Orchid'], 1),
        'Rose / Orchid'
      );
    });
  });
});
