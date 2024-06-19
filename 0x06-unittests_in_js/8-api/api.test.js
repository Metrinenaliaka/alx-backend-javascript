const expect = require('chai').expect;
const request = require('request');

describe('Index page', () => {
  describe('GET /', () => {
    it('Tests output of GET / request', (done) => {
      request('http://localhost:7865', (err, res, body) => {
        expect(res.statusCode).to.equal(200);
        expect(body).to.equal('Welcome to the payment system');
        done();
      });
    });
  });
});
