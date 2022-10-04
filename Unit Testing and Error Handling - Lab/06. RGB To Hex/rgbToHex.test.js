let { assert } = require('chai');
let { rgbToHexColor } = require('../../rgbToHex');

describe('Check RGB to HEX functionality', () => {
  it('should return undefined if argument is not an integer', () => {
    assert.equal(rgbToHexColor(4, 3, 2.5), undefined, 'Argument is not integer');
  });
  it('should return undefined if one value is bigger than 255', () => {
    assert.equal(rgbToHexColor(4, 3, 256), undefined, 'Value is bigger than 255');
  });
  it('should return undefined if one value is smaller than 0', () => {
    assert.equal(rgbToHexColor(4, 3, -256), undefined, 'Value is smaller than 0');
  });
  it('should return undefined if one value is a string', () => {
    assert.equal(rgbToHexColor(4, 3, 'mew'), undefined, 'Value is a string');
  });
  it('should return #FF9EAA with the given arguments', () => {
    assert.equal(rgbToHexColor(255, 158, 170), '#FF9EAA', 'Invalid result');
  });
  it('should return undefined if no arguments are given', () => {
    assert.equal(rgbToHexColor(), undefined, 'Invalid input');
  });
  it('should return result if 0 is passed as an arguments', () => {
    assert.equal(rgbToHexColor(0, 0, 0, 0), '#000000', 'Invalid result');
  });
});
