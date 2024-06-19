const getPaymentTokenFromAPI = require('./6-payment_token');
const { expect } = require('chai');

describe('getPaymentTokenFromAPI', function() {
    it('handles when success is true', function(done) {
        getPaymentTokenFromAPI(true)
            .then((response) => {
                expect(response).to.deep.equal({ data: 'Successful response from the API' });
                done();
            })
            .catch((error) => done(error));
    });

    it('should do nothing when success is false', function() {
        const result = getPaymentTokenFromAPI(false);
        expect(result).to.be.undefined;
    });
});

