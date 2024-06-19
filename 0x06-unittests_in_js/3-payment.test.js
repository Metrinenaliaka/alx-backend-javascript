const expect = require('chai').expect;
const sinon = require('sinon');

const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');


describe('sendPaymentRequestToApi', () => {
  it('Tests usage of Utils.calculateNumber()', () => {
    const calcSpy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);

    expect(calcSpy.calledWith('SUM', 100, 20)).to.be.true;
    calcSpy.restore();
  });
});
