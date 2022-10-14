let { assert } = require('chai');
let { ChristmasMovies } = require('./christmasMovies');

describe('Test the entire functionality of the class', () => {
  let instance = {};
  beforeEach(() => (instance = new ChristmasMovies()));

  describe('instance properties', () => {
    it('should return -> not undefined', () => {
      assert.notEqual(instance.movieCollection, undefined);
      assert.notEqual(instance.watched, undefined);
      assert.notEqual(instance.actors, undefined);
    });
  });
  describe('Tests ChristmasMovies.buyMovie', () => {
    it('should throw error if not watched', () => {
      instance.buyMovie('Dracula', ['Who']);
      instance.buyMovie('Not Dracula', ['Who']);
      assert.throws(
        () => instance.discardMovie('Dracula'),
        'Dracula is not watched'
      );
      assert.throws(
        () => instance.discardMovie('Not Dracula'),
        'Not Dracula is not watched'
      );
    });
    it('should throw error if not in the collection', () => {
      assert.throws(
        () => instance.discardMovie('Cobra'),
        'Cobra is not at your collection!'
      );
      assert.throws(
        () => instance.discardMovie('Justice League'),
        'Justice League is not at your collection!'
      );
    });
    it('should return message if discarded movie', () => {
      instance.buyMovie('Dr. Strange', ['Marvel']);
      instance.watched['Dr. Strange'] = 1;
      assert.equal(
        instance.discardMovie('Dr. Strange'),
        'You just threw away Dr. Strange!'
      );
    });
  });
  describe('Tests should check watchMovie function', () => {
    it('should throw error for no such movie in the collection', () => {
      assert.throws(
        () => instance.watchMovie('Movie'),
        'No such movie in your collection!'
      );
    });
    it('should add watched movie to the watched movie array correctly', () => {
      instance.buyMovie('New', ['one']);
      instance.watchMovie('New');
      assert.equal(instance.watched['New'], 1);
    });
  });
  describe('Check buyMovie function', () => {
    it('should return the correct message from the buyMovie function', () => {
      assert.equal(
        instance.buyMovie('abc', ['B', 'A', 'B']),
        'You just got abc to your collection in which B, A are taking part!'
      );
    });
    it('should return the given movies was already bought', () => {
      assert(instance.buyMovie('a', ['b']));
      assert.throws(
        () => instance.buyMovie('a', ['b']),
        'You already own a in your collection!'
      );
    });
  });
  describe('Check favouriteMovie function', () => {
    it('should throw error for no watched movies yet', () => {
      assert.throws(
        () => instance.favouriteMovie(),
        'You have not watched a movie yet this year!'
      );
    });
    it('should return the correct favourite movie', () => {
      instance.watched.NewOne = 1;
      instance.watched.MyFavourite = 2;
      assert.equal(
        instance.favouriteMovie(),
        'Your favourite movie is MyFavourite and you have watched it 2 times!'
      );
    });
  });
  describe('Tests instance.mostStarredActor', () => {
    it('should throw error if not any watched movies yet', () => {
      assert.throws(
        () => instance.mostStarredActor(),
        'You have not watched a movie yet this year!'
      );
    });
    it('should return the the most starred actor', () => {
      instance.buyMovie('Star', ['Sad', 'Das']);
      instance.buyMovie('Scary Mary', ['Sad', 'WAS']);
      instance.buyMovie('The Snow', ['Sad', 'WAS']);
      assert.equal(
        instance.mostStarredActor(),
        'The most starred actor is Sad and starred in 3 movies!'
      );
    });
  });
});
