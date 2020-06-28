const db = require('../db');
const { ObjectId } = require('mongodb');

module.exports = {
    create(submittedFeedback) {
        return db.feedback.insertOne(submittedFeedback);
    },
    
    getAll() {
        return db.feedback.find().toArray();
    },

    update(id, updatedData) {
        return db.feedback.updateOne(
            { "_id": ObjectId(id) },
            { $addToSet: { actionItem: updatedData } }
        )
    },

    delete(id) {
        return db.feedback.deleteOne(
            { "_id": ObjectId(id) });
    },
}