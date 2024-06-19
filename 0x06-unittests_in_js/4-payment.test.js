const expect = require('chai').expect;
const sinon = require('sinon');

const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');


describe('sendPaymentRequestToApi', () => {
  it('Tests usage of Utils.calculateNumber()', () => {
    const calcStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    const consoleSpy = sinon.spy(console, 'log');
    sendPaymentRequestToApi(100, 20);

    expect(calcStub.calledWith('SUM', 100, 20)).to.be.true;
    expect(calcStub.alwaysReturned(10)).to.be.true;
    expect(consoleSpy.calledWith('The total is: 10')).to.be.true;

    calcStub.restore();
    consoleSpy.restore();
  });
});
