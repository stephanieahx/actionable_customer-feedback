const userRepository = require('../repositories/userRepository');
const bcrypt = require('bcrypt');
const express = require('express');
// const sessions = express.Router();

module.exports = {
    async create(req, res) {
        const foundUser = await userRepository.find(req.body.name);
        if (bcrypt.compareSync(req.body.password, foundUser.password)) {
            req.session.currentUser = foundUser;
            res.redirect('/');
        } else {
            res.send('<a href="/">Incorrect password. Try again.</a>')
        }
    },

    async home(req, res) {
        return res.render('index');
    },

    newForm(req, res) {
        return res.render('users/register'); 
    },

    destroy(req, res) {
        return req.session.destory(() => {
            res.redirect('/');
        });
    }
};