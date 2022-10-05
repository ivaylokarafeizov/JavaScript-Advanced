let { assert } = require('chai');
let { mathEnforcer } = require('../../mathEnforcer');

describe('mathEnforcer', () => {
  describe('addFive', () => {
    it('should return if positive integer input', () => {
      assert.equal(mathEnforcer.addFive(0), 5);
    });
    it('should return if negative integer input', () => {
      assert.equal(mathEnforcer.addFive(-1), 4);
    });
    it('should return if float input', () => {
      assert.closeTo(mathEnforcer.addFive(0.1), 5.1, 0.01);
    });
    it('should return undefined if not a number', () => {
      assert.equal(mathEnforcer.addFive('a'), undefined);
    });
  }); 
  describe('subtractTen', () => {
    it('should return if positive integer input', () => {
      assert.equal(mathEnforcer.subtractTen(10), 0);
    });
    it('should return if negative integer input', () => {
      assert.equal(mathEnforcer.subtractTen(-1), -11);
    });
    it('should return if float input', () => {
      assert.closeTo(mathEnforcer.subtractTen(10.1), 0.1, 0.01);
    });
    it('should return undefined if not a number', () => {
      assert.equal(mathEnforcer.subtractTen('a'), undefined);
    });
  }); 
  describe('testing sum method', () => {
    it('should return if positive integer input', () => {
      assert.equal(mathEnforcer.sum(1, 1), 2);
    });  
    it('should return if one negative integer input', () => {
      assert.equal(mathEnforcer.sum(-1, 1), 0);
    });
    it('should return if float input', () => {
      assert.closeTo(mathEnforcer.sum(1.1, 2.2), 3.3, 0.01);
    });
    it('should return undefined if one not a number', () => {
      assert.equal(mathEnforcer.sum('1', 1), undefined);
    }); 
    it('should return correct result with a first non-number', () => {
      assert.equal(mathEnforcer.sum(5, 'f'), undefined);
    }); 
  });
});