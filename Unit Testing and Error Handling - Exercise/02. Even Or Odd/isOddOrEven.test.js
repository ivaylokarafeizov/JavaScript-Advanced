let { assert } = require('chai');
let { isOddOrEven } = require('../../isOddOrEven');

describe('Check whether the length is even or odd', () => {
  it('should return undefined if the passed parameter is a number', () => {
    assert.equal(isOddOrEven(2), undefined, 'Invalid parameter');
  });
  it('should return undefined if the passed parameter is an object', () => {
    assert.equal(isOddOrEven({}), undefined, 'Invalid parameter');
  });
  it('should return "odd" based on the length of the string', () => {
    assert.equal(isOddOrEven('Pesho'), 'odd', 'Wrong length');
  });
  it('should return "even" based on the length of the string', () => {
    assert.equal(isOddOrEven('Love'), 'even', 'Wrong length');
  }); 
  it('should return "even" based on the length of the string including whitespace', () => {
    assert.equal(isOddOrEven('Love hate'), 'odd', 'Wrong length');
  }); 
});
