let { assert } = require('chai');
let { numberOperations } = require('./numberOperations');

describe('Test a variable named numberOperations, which represents an object', () => {
  describe('Test numberOperations.powNumber', () => {
    it('should return the power of the given number', () => {
      assert.equal(numberOperations.powNumber(2), 4);
    });
  });
  describe('Test numberOperations.numberChecker', () => {
    it('should throw an error	if the input is not a number', () => {
      assert.throws(
        () => numberOperations.numberChecker('T'),
        'The input is not a number!'
      );
    });
    it('should return a message if the number is lower than 100', () => {
      assert.equal(
        numberOperations.numberChecker(99),
        'The number is lower than 100!'
      );
    });
    it('should return a message if the number is equal to 100', () => {
      assert.equal(
        numberOperations.numberChecker(100),
        'The number is greater or equal to 100!'
      );
    });
    it('should return a message if the number is greater than 100', () => {
      assert.equal(
        numberOperations.numberChecker(200),
        'The number is greater or equal to 100!'
      );
    });
  });
  describe('Test numberOperations.sumArrays', () => {
    it('should return a result if the second array is bigger', () => {
      assert.deepEqual(
        numberOperations.sumArrays([1, 2, 3], [1, 2, 3, 4]),
        [2, 4, 6, 4]
      );
    });
    it('should return a result if the first array is bigger', () => {
      assert.deepEqual(
        numberOperations.sumArrays([1, 2, 3, 4, 5, 6], [1, 2, 3, 4]),
        [2, 4, 6, 8, 5, 6]
      );
    });
  });
});
