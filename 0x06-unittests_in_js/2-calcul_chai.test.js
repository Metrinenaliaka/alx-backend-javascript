const expect = require('chai').expect;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber() with type \'SUM\'', function () {
  it('Returns sum of 2 numbers', function () {
    expect(calculateNumber('SUM', 1, 3)).to.equal(4);
    expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
    expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
    expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
    expect(calculateNumber('SUM', -0.4, -0.4)).to.equal(0);
    expect(calculateNumber('SUM', -0.4, -0.2)).to.equal(0);
    expect(calculateNumber('SUM', -0.2, -0.4)).to.equal(0);
    expect(calculateNumber('SUM', -0.6, -0.8)).to.equal(-2);
    expect(calculateNumber('SUM', -0.8, -0.5)).to.equal(-1);
})
});

describe('calculateNumber() with type \'SUBTRACT\'', function () {
  it('Returns difference of 2 numbers', function () {
    expect(calculateNumber('SUBTRACT', 10, 5)).to.equal(5);
    expect(calculateNumber('SUBTRACT', 10, 4.5)).to.equal(5);
    expect(calculateNumber('SUBTRACT', 10.3, 4.5)).to.equal(5);
    expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
    expect(calculateNumber('SUBTRACT', 1, 3.7)).to.equal(-3);
    expect(calculateNumber('SUBTRACT', 1.2, 3.7)).to.equal(-3);
    expect(calculateNumber('SUBTRACT', 1.5, 3.7)).to.equal(-2);
    expect(calculateNumber('SUBTRACT', -0.4, -0.4)).to.equal(0);
    expect(calculateNumber('SUBTRACT', -0.4, -0.2)).to.equal(0);
    expect(calculateNumber('SUBTRACT', -0.2, -0.4)).to.equal(0);
    expect(calculateNumber('SUBTRACT', 0, 0)).to.equal(0);
    expect(calculateNumber('SUBTRACT', -0.6, -0.8)).to.equal(0);
    expect(calculateNumber('SUBTRACT', -0.8, -0.5)).to.equal(-1);
  });
});

describe('calculateNumber() with type \'DIVIDE\'', function () {
  it('Returns division of 2 numbers', function () {
    expect(calculateNumber('DIVIDE', 1, 1)).to.equal(1);
    expect(calculateNumber('DIVIDE', 1, 3.7)).to.equal(0.25);
    expect(calculateNumber('DIVIDE', 1.2, 3.7)).to.equal(0.25);
    expect(calculateNumber('DIVIDE', 1.5, 3.7)).to.equal(0.5);
    expect(calculateNumber('DIVIDE', -0.4, -0.4)).to.equal('Error');
    expect(calculateNumber('DIVIDE', -0.4, -0.2)).to.equal('Error');
    expect(calculateNumber('DIVIDE', -0.2, -0.4)).to.equal('Error');
    expect(calculateNumber('DIVIDE', 0, 0)).to.equal('Error');
    expect(calculateNumber('DIVIDE', -0.6, -0.8)).to.equal(1);
    expect(calculateNumber('DIVIDE', -0.8, -0.5)).to.equal('Error');
  })
});
