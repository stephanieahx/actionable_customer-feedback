const chai = require('chai');
const { expect } = chai;
const asserttype = require('chai-asserttype');
chai.use(asserttype);
const { validate } = require('../userValidator');

describe('User Validator', () => {
    it('should pass validation if name and password combination are inputed', async () => {
        const result = validate({ name: 'tom', password: '123' });
        expect(result).to.be.true;
    });

    it('should fail the validation if name is omited', () => {
        try {
            validate({ password: '111'});
        } catch (err) {
            expect(err).to.be.ok;
            expect(err.message).to.equal('Error validating logs');
        }
    });
    it('should have createdAt as default values equal to currentTime if createdAt if createdAt is not provided', () => {
        const data = { name: 'tom', password: '123'};
        const result = validate(data);
        expect(result).to.be.true;
        expect(data.createdAt).to.be.data();
    });
});