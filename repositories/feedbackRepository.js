const db = require('../db');

module.exports = {
    create(data) {
        return db.feedback.insertOne(data);
    },
    getAll() {
        return db.feedback.find().toArray();
    },
    // getFeedbackByName: async (name) =>{
    //     const feedback = await db.feedback
    //         .findOne({ feedback: 
    //             { '$regex': `^${feedback}$`, 
    //                 $options:'i' } 
    //         });
        
    //     if (!feedback) {
    //         throw new Error('Item not found');
    //     }
        
    //     return item;
    // },
    update(update) {
        const updatedItem = await.db.feedback.updateOne({

        },
            { $set: update }
        );
    }
};