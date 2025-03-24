class Book {
    constructor(db) {
        this.collection = db.collection('Books');
    }

    // Create a new book
    async createBook(bookData) {
        try {
            const result = await this.collection.insertOne(bookData);
            console.log('Book created successfully:', result.insertedId);
            return result;
        } catch (err) {
            console.error('Error creating book:', err);
            throw err;
        }
    }

    // Get all books
    async getAllBooks() {
        try {
            const books = await this.collection.find({}).toArray();
            console.log('Books fetched successfully:', books);
            return books;
        } catch (err) {
            console.error('Error fetching books:', err);
            throw err;
        }
    }

    // Update a book
    async updateBook(title, updateData) {
        try {
            const result = await this.collection.updateOne(
                { title },
                { $set: updateData }
            );
            console.log('Book updated successfully:', result.modifiedCount);
            return result;
        } catch (err) {
            console.error('Error updating book:', err);
            throw err;
        }
    }

    // Delete a book
    async deleteBook(title) {
        try {
            const result = await this.collection.deleteOne({ title });
            console.log('Book deleted successfully:', result.deletedCount);
            return result;
        } catch (err) {
            console.error('Error deleting book:', err);
            throw err;
        }
    }
}

module.exports = Book;