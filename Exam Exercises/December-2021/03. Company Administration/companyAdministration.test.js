let { assert } = require('chai');
let { companyAdministration } = require('./companyAdministration');

describe('Test object functionality', () => {
  describe('Test companyAdministration.hiringEmployee', () => {
    it('should throw error if invalid position', () => {
      assert.throws(() => {
        companyAdministration.hiringEmployee('John', 'Cleaner', 5);
      }, 'We are not looking for workers for this position.');
    });
    it('should return message if the years experience are equal to 0', () => {
      assert.equal(
        companyAdministration.hiringEmployee('John', 'Programmer', 0),
        'John is not approved for this position.'
      );
    });
    it('should return message if the years experience are equal to 3', () => {
      assert.equal(
        companyAdministration.hiringEmployee('John', 'Programmer', 3),
        'John was successfully hired for the position Programmer.'
      );
    });
    it('should return message if the years experience are greater than 3', () => {
      assert.equal(
        companyAdministration.hiringEmployee('John', 'Programmer', 15),
        'John was successfully hired for the position Programmer.'
      );
    });
    it('should return message if the employee does not meet the requirements', () => {
      assert.equal(
        companyAdministration.hiringEmployee('John', 'Programmer', 2),
        'John is not approved for this position.'
      );
    });
  });
  describe('Test companyAdministration.calculateSalary', () => {
    it('should return error if not number', () => {
      assert.throws(() => {
        companyAdministration.calculateSalary('Lily');
      }, 'Invalid hours');
    });
    it('should return error if negative number', () => {
      assert.throws(() => {
        companyAdministration.calculateSalary(-4);
      }, 'Invalid hours');
    });
    it('should return BGN 15 pay per hour.', () => {
      assert.equal(companyAdministration.calculateSalary(1), 15);
    });
    it('should return BGN 0 if hours zero', () => {
      assert.equal(companyAdministration.calculateSalary(0), 0);
    });
    it('should return salary for more than 160 hours + additional 1000 bonus.', () => {
      assert.equal(companyAdministration.calculateSalary(161), 3415);
    });
    it('should return salary for 160 hours + additional 1000 bonus.', () => {
      assert.equal(companyAdministration.calculateSalary(160), 2400);
    });
  });
  describe('Test companyAdministration.firedEmployee', () => {
    it('should throw error for invalid index value', () => {
      assert.throw(() => {
        companyAdministration.firedEmployee(['Sam', 'Mark', 'Emma'], 'really');
      }, 'Invalid input');
    });
    it('should throw error for array value not array', () => {
      assert.throw(() => {
        companyAdministration.firedEmployee(10, 10);
      }, 'Invalid input');
      assert.throw(() => {
        companyAdministration.firedEmployee();
      }, 'Invalid input');
      assert.throw(() => {
        companyAdministration.firedEmployee(NaN, 'str');
      }, 'Invalid input');
      assert.throw(() => {
        companyAdministration.firedEmployee(NaN);
      }, 'Invalid input');
    });
    it('should throw error for index not integer value', () => {
      assert.throw(() => {
        companyAdministration.firedEmployee(['Sam', 'Mark', 'Emma'], 5);
      }, 'Invalid input');
      assert.throw(() => {
        companyAdministration.firedEmployee(['Sam', 'Mark', 'Emma'], 0.42324);
      }, 'Invalid input');
      assert.throw(() => {
        companyAdministration.firedEmployee(['Sam', 'Mark', 'Emma'], -5.42324);
      }, 'Invalid input');
    });
    it('should throw error for invalid index value less than zero', () => {
      assert.throw(() => {
        companyAdministration.firedEmployee(['Sam', 'Mark', 'Emma'], -1);
      }, 'Invalid input');
    });
    it('should throw error for invalid index value equal to array length', () => {
      assert.throw(() => {
        companyAdministration.firedEmployee(['Sam', 'Mark', 'Emma'], 3);
      }, 'Invalid input');
    });
    it('should throw error for invalid index value bigger than array length', () => {
      assert.throw(() => {
        companyAdministration.firedEmployee(['Sam', 'Mark', 'Emma'], 9);
      }, 'Invalid input');
    });
    it('should remove employee at the given index 0', () => {
      assert.equal(
        companyAdministration.firedEmployee(['Sam', 'Mark', 'Emma'], 0),
        'Mark, Emma'
      );
    });
    it('should remove employee at the given index 1', () => {
      assert.equal(
        companyAdministration.firedEmployee(['Sam', 'Mark', 'Emma'], 1),
        'Sam, Emma'
      );
    });
    it('should remove employee at the given index 2', () => {
      assert.equal(
        companyAdministration.firedEmployee(['Sam', 'Mark', 'Emma'], 2),
        'Sam, Mark'
      );
    });
  });
});
