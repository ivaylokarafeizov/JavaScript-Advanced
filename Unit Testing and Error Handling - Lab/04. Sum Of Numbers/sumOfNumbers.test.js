let { assert } = require('chai');
let { sum } = require('../../sumOfNumbers');

describe('Testing different arguments', () => {
  it('should return 0 if array is empty', () => {
    assert.equal(sum([]), 0, 'Invalid sum');
  });
  it('should return error if not an array', () => {
    assert.equal(sum(''), [], 'Invalid input');
  });
  it('should return the sum of the values of all elements inside the array', () => {
    assert.equal(sum([1, 2, 3]), 6, 'Invalid sum');
  });
});
