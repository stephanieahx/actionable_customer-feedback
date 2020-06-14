const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    name: {
        'type': 'string',
    },
    // department: {
    //     type: String,
    //     required: 'Required'
    // },
    // position: {
    //     type: String,
    //     required: 'Required'
    // },
    // // admin: {
    // //     type: Boolean
    // // }
});

mongoose.model('users', userSchema)