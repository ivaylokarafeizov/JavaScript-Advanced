let { assert } = require('chai');
let { library } = require('./library');

describe('Test object functionality', () => {
  describe('Test library.calcPriceOfBook', () => {
    it('should return the standard price of the book, which is 20 BGN', () => {
      assert.equal(
        library.calcPriceOfBook('Frankenstein', 2000),
        'Price of Frankenstein is 20.00'
      );
    });
    it('should return 50% from standard price if pub. year is equal to 1980', () => {
      assert.equal(
        library.calcPriceOfBook('Frankenstein', 1980),
        'Price of Frankenstein is 10.00'
      );
    });
    it('should return 50% from standard price if pub. year is less than 1980', () => {
      assert.equal(
        library.calcPriceOfBook('Frankenstein', 1912),
        'Price of Frankenstein is 10.00'
      );
    });
    it('should throw an error if invalid first parameter', () => {
      assert.throws(() => {
        library.calcPriceOfBook(5, 2000);
      }, 'Invalid input');
    });
    it('should throw an error if invalid second parameter', () => {
      assert.throws(() => {
        library.calcPriceOfBook('Frankenstein', 'ein');
      }, 'Invalid input');
    });
    it('should throw an error if invalid both parameters', () => {
      assert.throws(() => {
        library.calcPriceOfBook('Frankenstein', 'ein');
      }, 'Invalid input');
    });
  });
  describe('Test library.findBook', () => {
    it('should throw an error if empty array', () => {
      assert.throws(() => {
        library.findBook([], 'Frankenstein');
      }, 'No books currently available');
    });
    it('should return message that the book is found', () => {
      assert.equal(
        library.findBook(
          ['Troy', 'Life Style', 'Frankenstein'],
          'Frankenstein'
        ),
        'We found the book you want.'
      );
    });
    it('should return  message that the book is not found', () => {
      assert.equal(
        library.findBook(['Troy', 'Life Style', 'Frankenstein'], 'Dracula'),
        'The book you are looking for is not here!'
      );
    });
  });
  describe('Test library.arrangeTheBooks', () => {
    it('should return message if all the books are arranged on the shelves', () => {
      assert.equal(
        library.arrangeTheBooks(3),
        'Great job, the books are arranged.'
      );
    });
    it('should return message if no space has been reached', () => {
      assert.equal(
        library.arrangeTheBooks(41),
        'Insufficient space, more shelves need to be purchased.'
      );
    });
    it('should return message if max space has been reached', () => {
      assert.equal(
        library.arrangeTheBooks(40),
        'Great job, the books are arranged.'
      );
    });
    it('should throw an error if the countBooks is not an integer number', () => {
      assert.throws(() => {
        library.arrangeTheBooks(5.4);
      }, 'Invalid input');
    });
    it('should throw an error if the countBooks negative number', () => {
      assert.throws(() => {
        library.arrangeTheBooks(-4);
      }, 'Invalid input');
    });
    it('should throw an error if string parameter', () => {
      assert.throws(() => {
        library.arrangeTheBooks('Frankenstein');
      }, 'Invalid input');
    });
  });
});
