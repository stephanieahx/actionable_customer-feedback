const db = require('../db');

module.exports = {
    create (data) {
        return db.feedback.insertOne(data);
    },
    getAll () {
        return db.feedback.find().toArray();
    }
};