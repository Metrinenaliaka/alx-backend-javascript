const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber() with type \'SUM\'', function () {
  it('Returns sum of 2 numbers', function () {
    assert.equal(calculateNumber('SUM', 1, 3), 4);
    assert.equal(calculateNumber('SUM', 1, 3.7), 5);
    assert.equal(calculateNumber('SUM', 1.2, 3.7), 5);
    assert.equal(calculateNumber('SUM', 1.5, 3.7), 6);
    assert.equal(calculateNumber('SUM', -0.4, -0.4), 0);
    assert.equal(calculateNumber('SUM', -0.4, -0.2), 0);
    assert.equal(calculateNumber('SUM', -0.2, -0.4), 0);
    assert.equal(calculateNumber('SUM', -0.6, -0.8), -2);
    assert.equal(calculateNumber('SUM', -0.8, -0.5), -1);
})
});

describe('calculateNumber() with type \'SUBTRACT\'', function () {
  it('Returns difference of 2 numbers', function () {
    assert.equal(calculateNumber('SUBTRACT', 10, 5), 5);
    assert.equal(calculateNumber('SUBTRACT', 10, 4.5), 5);
    assert.equal(calculateNumber('SUBTRACT', 10.3, 4.5), 5);
    assert.equal(calculateNumber('SUBTRACT', 1, 3), -2);
    assert.equal(calculateNumber('SUBTRACT', 1, 3.7), -3);
    assert.equal(calculateNumber('SUBTRACT', 1.2, 3.7), -3);
    assert.equal(calculateNumber('SUBTRACT', 1.5, 3.7), -2);
    assert.equal(calculateNumber('SUBTRACT', -0.4, -0.4), 0);
    assert.equal(calculateNumber('SUBTRACT', -0.4, -0.2), 0);
    assert.equal(calculateNumber('SUBTRACT', -0.2, -0.4), 0);
    assert.equal(calculateNumber('SUBTRACT', 0, 0), 0);
    assert.equal(calculateNumber('SUBTRACT', -0.6, -0.8), 0);
    assert.equal(calculateNumber('SUBTRACT', -0.8, -0.5), -1);
  });
});

describe('calculateNumber() with type \'DIVIDE\'', function () {
  it('Returns division of 2 numbers', function () {
    assert.equal(calculateNumber('DIVIDE', 1, 1), 1);
    assert.equal(calculateNumber('DIVIDE', 1, 3.7), 0.25);
    assert.equal(calculateNumber('DIVIDE', 1.2, 3.7), 0.25);
    assert.equal(calculateNumber('DIVIDE', 1.5, 3.7), 0.5);
    assert.equal(calculateNumber('DIVIDE', -0.4, -0.4), 'Error');
    assert.equal(calculateNumber('DIVIDE', -0.4, -0.2), 'Error');
    assert.equal(calculateNumber('DIVIDE', -0.2, -0.4), 'Error');
    assert.equal(calculateNumber('DIVIDE', 0, 0), 'Error');
    assert.equal(calculateNumber('DIVIDE', -0.6, -0.8), 1);
    assert.equal(calculateNumber('DIVIDE', -0.8, -0.5), 'Error');
  })
});
