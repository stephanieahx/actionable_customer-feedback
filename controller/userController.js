const userRepository = require('../repositories/userRepository');
const { validate } = require('../validator/userValidator'); //import validator
const sessionController = require('./sessionController');

module.exports = {
    //think about what functions are requried to handle my APIs
    // post request, create route 
    async create(req, res) {
        try {
            validate(req.body);
            await userRepository.create(req.body);
            res.redirect('/');
        } catch (err) {
            res.render('errors/404', { err });
        }
    },
    getForm(req, res) {
        res.render('users/registration'); //res.redirect('users/registration')
    },
    async getAll(req, res) {
        const users = await userRepository.getAll();
        res.render('users/index', { 
            users: users, 
            currentUser: req.session.currentUser });
    },
    async delete(req, res) {
        try {
            const id = await userRepository.delete(req.params.id);
            res.redirect('/users');
        } catch (err) {
            console.log('error', err);
        }
    },
};

