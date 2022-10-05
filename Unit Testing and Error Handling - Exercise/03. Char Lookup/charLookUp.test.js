let { assert } = require('chai');
let { lookupChar } = require('../../charLookUp');

describe('Testing for retrieving a character at a given index', () => {
  it('return undefined if first parameter is NOT string', () => {
    assert.equal(lookupChar(0, 0), undefined);
  });
  it('return undefined if second parameter is NOT number', () => {
    assert.equal(lookupChar('0', 'HD'), undefined);
  });
  it('return undefined if second parameter is NOT integer', () => {
    assert.equal(lookupChar('HD', 1.5), undefined);
  });
  it('return undefined if second parameter is bigger than string length', () => {
    assert.equal(lookupChar('HD', 4), 'Incorrect index');
  }); 
  it('return undefined if second parameter is smaller than string length', () => {
    assert.equal(lookupChar('HD', -4), 'Incorrect index');
  });
  it('return the character at the specified index in the string', () => {
    assert.equal(lookupChar('Hate', 2), 't');
  });
});
