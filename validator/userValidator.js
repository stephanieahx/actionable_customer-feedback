const ajv = require('ajv'); //require ajv library 
const Ajv = new ajv({ // add ajv settings
    useDefault: true,
    coerceTypes: true,
    allErrors: true,
});
const userSchema = require('./schema/userSchema'); //import schema
const validator = Ajv.compile(userSchema);
const ValidationError = require('../exceptions/ValidatorError');

module.exports = {
        validate(data) {
            const isValid = validator(data);
            if(!isValid){
                console.log(`Validation Error: ${JSON.stringify(validator.errors)}`);
                throw new ValidationError(validator.errors);
            }
            // Add default values for createdAt and updatedAt
            data.createdAt = data.createdAt ? new Date(data.createdAt) : new Date();
            data.updatedAt = data.updatedAt ? new Date(data.updatedAt) : new Date();
            data.admin = "false";
            return isValid;
        }
};
