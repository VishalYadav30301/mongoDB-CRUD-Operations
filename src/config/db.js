const {MongoClient} = require('mongodb');
const url = process.env.MONGODB_URI || 'mongodb://localhost:27017/';
const dbName ='LibraryDB';
let client;
async function connectDB() {
    try{
        client= new MongoClient(url);
        await client.connect();
        console.log('Connected to MongoDB successfully');
        return client.db(dbName);
    }catch(err)
    {
        console.error('Error connecting to MongoDB:', err);
        throw err;

    }
    
}


async function closeDB() {
    if(client)
    {
        await client.close();
        console.log('MOngoDB Connection closed');
    }
    
}

module.exports= {connectDB, closeDB};