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
});

describe('GET /cart/:id with id hello', () => {
  it('Tests output of GET /cart/hello', (done) => {
    request('http://localhost:7865/cart/hello', (err, res, body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});

describe('GET /available_payments', () => {
  it('Tests output of GET /available_payments', (done) => {
    request('http://localhost:7865/available_payments', (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal(JSON.stringify({
        payment_methods: {
          credit_cards: true,
          paypal: false,
        }
      }));
      done();
    });
  });
});

describe('POST /login', () => {
  it('Tests output of POST /login', (done) => {
    request.post({
      headers: { 'content-type': 'application/json' },
      url: 'http://localhost:7865/login',
      body: JSON.stringify({ userName: 'Betty' }),
    }, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Welcome Betty');
      done();
    });
  });
});
