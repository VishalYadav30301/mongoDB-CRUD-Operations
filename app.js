// Import MongoDB driver
const { MongoClient } = require('mongodb');

// MongoDB Connection URL
const url ='mongodb://localhost:27017/'; // Replace with your connection string
const client = new MongoClient(url);

// Database and Collection Name
const dbName = 'LibraryDB';
const collectionName = 'Books';

// Main Function for MongoDB Operations
async function main() {
    try {
        await client.connect();
        console.log('Connected to MongoDB successfully!');

        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        
        await collection.insertOne({
            title : 'Introduction to GitHub' , Author : 'Vishal Yadav', year: 1975
        });
// CREATE - Insert Documents

        await collection.insertMany([
            { title: 'Introduction to MongoDB', author: 'John Doe', year: 2021 },
            { title: 'Mastering MongoDB', author: 'Jane Smith', year: 2023 }
        ]);

        console.log('Data inserted successfully!');

// READ - Fetch Data
        const books = await collection.find({}).toArray();
        console.log('Books in the collection:', books);

// UPDATE - Update Documents
        await collection.updateOne(
            { title: 'Introduction to MongoDB' },
            { $set: { author: 'Updated Author' } }
        );
        console.log('Document updated successfully!');

// DELETE - Remove Document
        await collection.deleteOne({ title: 'Mastering MongoDB' });
        console.log('Document deleted successfully!');

    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
    } finally {
        await client.close();
        console.log('MongoDB connection closed.');
    }
}

// Run the main function
main().catch(console.error);
 