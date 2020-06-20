const db = require('../db');

module.exports = {
    create (data) {
        return db.users.insertOne(data);
    },
    getAll () {
        return db.users.find().toArray();
    }
};