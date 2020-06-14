const MongoClient = require('mongodb').MongoClient;
const url = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const DB_NAME = 'actionableFeedback';
const COLLECTIONS = {
    USERS: 'users',
}

const client = new MongoClient(MONGO_URL, { useUnifiedTopology: true });

module.exports = {
    async connect () {
        console.log('Connected to MongoDB.');
        const db = connection.db(DB_NAME);
        this.users = db.collection(COLLECTIONS.USERS);
    },
    disconnect() {
        return client.close();
    },
};