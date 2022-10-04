let { assert } = require('chai');
let { isSymmetric } = require('../../checkForSymmetry');

describe('Check the symmetry functionality', () => {
  it('should return true if input is array', () => {
    assert.equal(isSymmetric([]), true, 'Invalid input');
  });
  it('should return true if array is symmetric', () => {
    assert.equal(isSymmetric([1, 2, 3, 2, 1]), true, 'Array is not symmetric');
  });
  it('should return false if object', () => {
    assert.equal(isSymmetric({}), false, 'Invalid input');
  });
  it('should return true if two elements are symmetric', () => {
    assert.equal(isSymmetric([1, 1]), true, 'Elements are not symmetric');
  }); 
  it('should return false if one element is a string', () => {
    assert.equal(isSymmetric([1, '1']), false, 'Element is a string');
  }); 
});
