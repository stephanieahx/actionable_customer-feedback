//json schema 
module.exports = {
    type: 'object',
    required: ['name', 'password'],
    properties: {
        name: {
            type: 'string'
        },
        password: {
            type: 'string'
        },
        createdAt: {
            type: 'string',
            format: 'date-time'
        },
        updatedAt: {
            type: 'string', 
            format: 'date-time'
        },
        admin: {
            type: 'boolean'
        }
    }
};