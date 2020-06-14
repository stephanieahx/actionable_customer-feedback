const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/actionableFeedback', { useNewUrlParser: true, useUnifiedTopology: true }, (error) => {
    if (!error) {
        console.log('Success! Connected.')
    }
    else {
        console.log('Error connecting to database.')
    }
});

const users = require('./user.model');