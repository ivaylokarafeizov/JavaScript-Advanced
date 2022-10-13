let { assert } = require('chai');
let { Repository } = require('./Repository.js');

describe('Test the functionality of the Repository class', () => {
  let instance = {};

  beforeEach(
    () =>
      (instance = new Repository({
        name: 'string',
        age: 'number',
        birthday: 'object',
      }))
  );

  describe('Test count of Map elements', () => {
    it('should return that Map size is 0', () => {
      assert.equal(instance.count, 0);
    });
  });
  describe('Test should add valid object', () => {
    it('should return zero id for only one object added', () => {
      assert.equal(instance.add({ name: 'Jack', age: 10, birthday: {} }), 0);
    });
  });
  describe('Tests should check getId function', () => {
    it('should return that entity with the given id does not exist', () => {
      assert.throws(
        () => instance.getId(10),
        'Entity with id: 10 does not exist!'
      );
    });
  });
  describe('Tests should check update function', () => {
    it('should throw error for no id presented in the data', () => {
      assert.throws(
        () => instance.update(0, {}),
        'Entity with id: 0 does not exist!'
      );
    });
    it('should throw error for missing property', () => {
      instance.add({ name: '', age: 0, birthday: {} });
      assert.throws(
        () => instance.update(0, { age: 1, birthday: { date: 0 } }),
        Error
      );
    });
    it('should throw TypeError for invalid type input', () => {
      instance.add({ name: '', age: 0, birthday: {} });
      assert.throws(
        () => instance.update(0, { name: 0, age: 1, birthday: { date: 0 } }),
        TypeError
      );
    });
  });
  describe('Tests should check delete function', () => {
    it('should delete the given index', () => {
      instance.add({ name: '', age: 1, birthday: {} });
      instance.add({ name: '', age: 1, birthday: {} });
      instance.del(1);
      assert.equal(instance.data.has(1), false);
    });
    it('should throw error for not existing index', () => {
      assert.throws(
        () => instance.del(-10),
        'Entity with id: -10 does not exist!'
      );
    });
  });
});
