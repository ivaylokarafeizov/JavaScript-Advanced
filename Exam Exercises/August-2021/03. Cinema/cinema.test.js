let { assert } = require('chai');
let { cinema } = require('./cinema');

describe('Test object functionality', () => {
  describe('Test cinema.showMovies', () => {
    it('should return message if empty array', () => {
      assert.equal(
        cinema.showMovies([]),
        'There are currently no movies to show.'
      );
    });
    it('should return an array of available movies separated by a comma and space', () => {
      assert.equal(
        cinema.showMovies(['King Kong', 'The Batman', 'Joker']),
        'King Kong, The Batman, Joker'
      );
    });
  });
  describe('Test cinema.ticketPrice', () => {
    it('should return message if valid projection type', () => {
      assert.equal(cinema.ticketPrice('Premiere'), 12);
    });
    it('should return price for projection type Normal', () => {
      assert.equal(cinema.ticketPrice('Normal'), 7.5);
    });
    it('should return price for projection type Discount', () => {
      assert.equal(cinema.ticketPrice('Discount'), 5.5);
    });
    it('should throw error if invalid projection type', () => {
      assert.throws(() => {
        cinema.ticketPrice('Bass');
      }, 'Invalid projection type.');
    });
  });
  describe('Test cinema.swapSeatsInHall', () => {
    it('should return that the swap was unsuccessful for invalid first value', () => {
      assert.equal(
        cinema.swapSeatsInHall('invalid', 10),
        'Unsuccessful change of seats in the hall.'
      );
    });
    it('should return that the swap was unsuccessful for invalid second value', () => {
      assert.equal(
        cinema.swapSeatsInHall(10, 'invalid'),
        'Unsuccessful change of seats in the hall.'
      );
    });
    it('should return that the swap was unsuccessful for invalid input values', () => {
      assert.equal(
        cinema.swapSeatsInHall('invalid', 'invalid'),
        'Unsuccessful change of seats in the hall.'
      );
    });
    it('should return that the swap was unsuccessful for first value for -10', () => {
      assert.equal(
        cinema.swapSeatsInHall(-10, 10),
        'Unsuccessful change of seats in the hall.'
      );
    });
    it('should return that the swap was unsuccessful for second value for -10', () => {
      assert.equal(
        cinema.swapSeatsInHall(10, -10),
        'Unsuccessful change of seats in the hall.'
      );
    });
    it('should return that the swap was unsuccessful for first value for 0', () => {
      assert.equal(
        cinema.swapSeatsInHall(0, 10),
        'Unsuccessful change of seats in the hall.'
      );
    });
    it('should return that the swap was unsuccessful for second value for 0', () => {
      assert.equal(
        cinema.swapSeatsInHall(10, 0),
        'Unsuccessful change of seats in the hall.'
      );
    });
    it('should return that the swap was unsuccessful for invalid 0 values', () => {
      assert.equal(
        cinema.swapSeatsInHall(0, 0),
        'Unsuccessful change of seats in the hall.'
      );
    });
    it('should return that the swap was unsuccessful for first value 25', () => {
      assert.equal(
        cinema.swapSeatsInHall(25, 10),
        'Unsuccessful change of seats in the hall.'
      );
    });
    it('should return that the swap was unsuccessful for second value 25', () => {
      assert.equal(
        cinema.swapSeatsInHall(10, 25),
        'Unsuccessful change of seats in the hall.'
      );
    });
    it('should return that change of seats in hall was successful', () => {
      assert.equal(
        cinema.swapSeatsInHall(1, 20),
        'Successful change of seats in the hall.'
      );
    });
  });
});
