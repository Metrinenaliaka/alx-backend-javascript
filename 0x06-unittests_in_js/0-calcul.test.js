const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function () {
  it('Returns sum of rounded integers', function () {
    assert.equal(calculateNumber(1, 3), 4);
    assert.equal(calculateNumber(1, 3.7), 5);
    assert.equal(calculateNumber(1.2, 3.7), 5);
    assert.equal(calculateNumber(1.5, 3.7), 6);
    assert.equal(calculateNumber(-0.4, -0.4), 0);
    assert.equal(calculateNumber(-0.4, -0.2), 0);
    assert.equal(calculateNumber(-0.2, -0.4), 0);
    assert.equal(calculateNumber(0, 0), 0);
    assert.equal(calculateNumber(-0.6, -0.8), -2);
    assert.equal(calculateNumber(-0.8, -0.5), -1);
  })
  it('handlng edge cases', () => {
    assert.equal(calculateNumber(Infinity, 1), Infinity);
    assert.equal(calculateNumber(-Infinity, -1), -Infinity);
  })
});
