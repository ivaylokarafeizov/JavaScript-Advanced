let { assert } = require('chai');
let { createCalculator } = require('../../addSubtract');

describe('Check object functionalities', () => {
  it('should return true if input is object', () => {
    assert.equal(typeof createCalculator(), 'object', 'Invalid input');
  });
  it('should return right input when subtracting', () => {
    const calc = createCalculator();
    calc.add('2');
    calc.subtract('1');
    assert.equal(calc.get(), 1, 'Wrong result');
  });
  it('should return if obj has method subtract', () => {
    assert.equal(typeof createCalculator().subtract, 'function', 'Invalid method');
  });
  it('should not modify internal sum', () => {
    assert.equal(createCalculator().value, undefined, 'Internal sum cannot be modified');
  });
  it('should work with negative numbers', function () {
    const calc = createCalculator();
    calc.add(10);
    calc.subtract(7);
    calc.add('-2');
    calc.subtract(-1);
    assert.equal(calc.get(), 2, 'Wrong result');
  });
});
