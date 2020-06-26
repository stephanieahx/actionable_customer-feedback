const userRepository = require('../repositories/userRepository');
// const ajvUserValidator = require('../formatters/httpResponseFormatter');

module.exports = {
    async getAll(req, res) {
        const users = await userRepository.getAll();
        res.render('users/index', { users });
    },
    getForm(req, res) {
        res.render('users/registration');
    },
    async create(req, res) {
        try {
            // ajvUserValidator.users.validate(req.body);
            const user = await userRepository.create(req.body);
            // httpResponseFormatter.formatOkResponse(req, user);
            res.redirect('/users');
        } catch (err) {
            console.log('error', err);
            httpResponseFormatter.formatErrorResponse(res, err)
        }
    }
};

