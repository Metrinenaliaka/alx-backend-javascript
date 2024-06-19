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

describe('GET /cart/:id', () => {
  it('Tests output of GET /cart/:id', (done) => {
    request('http://localhost:7865/cart/12', (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });
})
describe('GET /cart/:id with id hello', () => {
  it('Tests output of GET /cart/hello', (done) => {
    request('http://localhost:7865/cart/hello', (err, res, body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
})
