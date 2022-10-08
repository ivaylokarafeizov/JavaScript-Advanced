let { assert } = require('chai');
let { PaymentPackage } = require('../../PaymentPackage');

describe('Test the entire class functionality', () => {
  describe('Test instance creation', () => {
    let paymentPackage;
    beforeEach(() => {
      paymentPackage = new PaymentPackage('Frank', 10);
    });

    it('name should be correct', () => {
      assert.equal(paymentPackage._name, 'Frank', 'name should be Frank');
    });
    it('value should be correct', () => {
      assert.equal(paymentPackage._value, 10, 'value should be 10');
    });
    it('VAT should be correct', () => {
      assert.equal(paymentPackage._VAT, 20, 'VAT should be 20');
      assert.equal(typeof paymentPackage._VAT, 'number', 'VAT type -> number');
    });
    it('active should be correct', () => {
      assert.equal(paymentPackage._active, true, 'active -> true');
      assert.equal(typeof paymentPackage._active, 'boolean', 'type: boolean');
    });
  });
  describe('Test getters', () => {
    let paymentPackage;
    beforeEach(() => {
      paymentPackage = new PaymentPackage('Frank', 10);
    });

    it('test name', () => {
      assert.equal(paymentPackage.name, 'Frank');
    });
    it('test value', () => {
      assert.equal(paymentPackage.value, 10);
    });
    it('test VAT', () => {
      assert.equal(paymentPackage.VAT, 20);
    });
    it('test active', () => {
      assert.equal(paymentPackage.active, true);
    });
  });
  describe('Test setters', () => {
    let paymentPackage;
    beforeEach(() => {
      paymentPackage = new PaymentPackage('Frank', 10);
    });

    it('set incorrect name type', () => {
      assert.throws(() => {
        new PaymentPackage(10, 10);
      }, 'Name must be a non-empty string');
    });
    it('set empty name', () => {
      assert.throws(() => {
        new PaymentPackage('', 10);
      }, 'Name must be a non-empty string');
    });
    it('set incorrect value type', () => {
      assert.throws(() => {
        new PaymentPackage('Frank', '5');
      }, 'Value must be a non-negative number');
    });
    it('set negative value', () => {
      assert.throws(() => {
        new PaymentPackage('Frank', -20);
      }, 'Value must be a non-negative number');
    });
    it('set correct value', () => {
      assert.equal(paymentPackage.value, 10);
      paymentPackage.value = 20;
      assert.equal(paymentPackage.value, 20);
      paymentPackage.value = 0;
      assert.equal(paymentPackage.value, 0);
    });
    it('set incorrect VAT type', () => {
      assert.throws(() => {
        paymentPackage.VAT = 'f';
      }, 'VAT must be a non-negative number');
    });
    it('set negative VAT value', () => {
      assert.throws(() => {
        paymentPackage.VAT = -55;
      }, 'VAT must be a non-negative number');
    });
    it('set incorrect active type', () => {
      assert.throws(() => {
        paymentPackage.active = 'f';
      }, 'Active status must be a boolean');
    });
  });
  describe('Test toString() function', () => {
    let paymentPackage;
    beforeEach(() => {
      paymentPackage = new PaymentPackage('Frank', 10);
    });

    it('test active status', () => {
      let res = [
        `Package: Frank`,
        `- Value (excl. VAT): 10`,
        `- Value (VAT 20%): ${10 * (1 + 20 / 100)}`,
      ].join('\n');
      assert.equal(paymentPackage.toString(), res);
    });
    it('test not active status', () => {
      let res = [
        `Package: Frank (inactive)`,
        `- Value (excl. VAT): 10`,
        `- Value (VAT 20%): ${10 * (1 + 20 / 100)}`,
      ].join('\n');
      paymentPackage.active = false;
      assert.equal(paymentPackage.toString(), res);
    });
  });
});
