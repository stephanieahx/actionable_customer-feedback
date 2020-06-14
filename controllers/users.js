const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();
const userModel = mongoose.model('users');

router.get('/add', (req, res) => {
    res.render("add-user")
});

router.post('/add', (req, res) => {
    var users = new userModel();
    users.name = req.body.name;
    users.department = req.body.department;
    users.position = req.body.position;

    users.save((err, doc) => {
        if (!err) {
            res.redirect('/users/list')
            // res.json({ message: 'successful', status: 'OK' })
        }
        else {
            res.send('Error occured.')
        }
    });
})

router.get('/list', (req, res) => {

    // Getting
    userModel.find((err, docs) => {
        if (!err) {
            console.log(docs);
            res.render('list', { data: docs })
        }
    })
});

module.exports = router;