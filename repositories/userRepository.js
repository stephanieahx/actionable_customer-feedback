const db = require('../db');

module.exports = {
    create (data) {
        return db.users.insertOne(data);
    },
    getAll () {
        return db.users.find().toArray();
    }, 
    async find (name) {
        const result = await db.users.findOne({ name: name});
        if(!result) throw new Error(`No account registered to ${name}`);
        return result;
    }
};