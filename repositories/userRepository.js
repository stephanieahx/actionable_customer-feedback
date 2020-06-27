const db = require('../db');
const bcrypt = require('bcrypt')
const SALT_ROUND = process.env.SALT_ROUND || 10; //storing as environment variable
const { ObjectId } = require('mongodb');

module.exports = {
    //2 methods to collect (create) and retrieve (find) user records 
    async create(data) {
        try {
            data.password = bcrypt.hashSync(data.password, bcrypt.genSaltSync(SALT_ROUND));
            const { insertedCount } = await db.users.insertOne(data);
            if (!insertedCount) throw new Error('insertion failure');
            return true;
        } catch (err) {
            throw new Error(`Due to ${err.message}, you are not allowed to insert this item ${JSON.stringify}`)
        }
    },
    async find(name) {
        const result = await db.users.findOne({ name: name });
        if (!result) throw new Error(`No account registered to ${name}`);
        return result;
    },

    getAll() {
        return db.users.find().toArray();
    },

    delete(id) {
        return db.users.deleteOne(
            { "_id": ObjectId(id) });
    },

    update(id, adminStatus) {
        console.log(id);
        console.log('admin below');
        console.log(adminStatus)
        return db.users.update(
            { "_id": ObjectId(id) },
            { $set: { admin: adminStatus } }
        )
    },
};