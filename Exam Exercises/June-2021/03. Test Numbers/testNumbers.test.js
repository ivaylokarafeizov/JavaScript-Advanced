let { assert } = require('chai');
let { testNumbers } = require('./testNumbers');

describe('Test a variable named testNumbers, which is object', () => {
  describe('Check if parameters are numbers -> testNumbers.sumNumbers', () => {
    it('should return undefined if first parameters not number', () => {
      assert.equal(testNumbers.sumNumbers({}, 5), undefined);
    });
    it('should return undefined if second parameters not number', () => {
      assert.equal(testNumbers.sumNumbers(6, {}), undefined);
    });
    it('should return undefined if both parameters are not numbers', () => {
      assert.equal(testNumbers.sumNumbers('', {}), undefined);
    });
  });
  describe('Check positive and negative numbers -> testNumbers.sumNumbers', () => {
    it('should return undefined if first parameter negative number', () => {
      assert.equal(testNumbers.sumNumbers(-4, 5), 1);
    });
    it('should return undefined if second parameter negative number', () => {
      assert.equal(testNumbers.sumNumbers(6, -4), 2);
    });
    it('should return undefined if both parameters are negative numbers', () => {
      assert.equal(testNumbers.sumNumbers(-4, -5), -9);
    });
  });
  describe('Check if number is rounded to second number -> testNumbers.sumNumbers', () => {
    it('should return 10.00 if both parameters integer numbers', () => {
      assert.equal(testNumbers.sumNumbers(5, 5), '10.00');
    });
    it('should return 2.40 if second parameter floating number', () => {
      assert.equal(testNumbers.sumNumbers(6.4, -4), '2.40');
    });
    it('should return 2.50 if second parameter floating number', () => {
      assert.equal(testNumbers.sumNumbers(-4, 6.5), '2.50');
    });
  });
  describe('Test testNumbers.numberChecker', () => {
    it('should return if parameter is odd', () => {
      assert.equal(testNumbers.numberChecker(5), 'The number is odd!');
    });
    it('should return if parameter is even', () => {
      assert.equal(testNumbers.numberChecker(6), 'The number is even!');
    });
    it('should throw error if parameter not number', () => {
      assert.throws(
        () => testNumbers.numberChecker('The'),
        'The input is not a number!'
      );
    });
  });
  describe('Test testNumbers.averageSumArray', () => {
    it('should return average sum of integers', () => {
      assert.equal(testNumbers.averageSumArray([1, 2, 3]), 2);
    });
    it('should return average sum of floating numbers', () => {
      assert.equal(testNumbers.averageSumArray([1.5, 2.5, 3.5]), 2.5);
    });
    it('should return average sum of negative numbers', () => {
      assert.equal(testNumbers.averageSumArray([-1, -2, -3]), -2);
    });
    it('should return average sum of negative floating numbers', () => {
      assert.equal(testNumbers.averageSumArray([-1.5, -2.5, -3.5]), -2.5);
    });
  });
});
