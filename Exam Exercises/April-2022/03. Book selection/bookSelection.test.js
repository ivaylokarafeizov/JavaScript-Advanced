let { assert } = require('chai');
let { bookSelection } = require('./bookSelection');

describe('Test a variable named bookSelection', () => {
  describe('Test bookSelection.isGenreSuitable', () => {
    it('should return not suitable message', () => {
      assert.equal(
        bookSelection.isGenreSuitable('Thriller', 11),
        'Books with Thriller genre are not suitable for kids at 11 age'
      );
    });
    it('should return suitable message', () => {
      assert.equal(
        bookSelection.isGenreSuitable('Thriller', 13),
        'Those books are suitable'
      );
    });
  });
  describe('Test bookSelection.isItAffordable', () => {
    it('should return error message', () => {
      assert.throws(() => {
        bookSelection.isItAffordable('T', 'H');
      }, 'Invalid input');
    });
    it('should return not enough money message', () => {
      assert.equal(
        bookSelection.isItAffordable(12, 11),
        "You don't have enough money"
      );
    });
    it('should return correct message', () => {
      assert.equal(
        bookSelection.isItAffordable(11, 13),
        'Book bought. You have 2$ left'
      );
    });
  });
  describe('Test bookSelection.suitableTitles', () => {
    it('should return error message', () => {
      assert.throws(() => {
        bookSelection.suitableTitles({}, 12);
      }, 'Invalid input');
    });
    it('should return chosen genre title', () => {
      assert.deepEqual(
        bookSelection.suitableTitles(
          [{ title: 'The Da Vinci Code', genre: 'Thriller' }],
          'Thriller'
        ),
        ['The Da Vinci Code']
      );
    });
  });
});
