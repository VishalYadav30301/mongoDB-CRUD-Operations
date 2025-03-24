const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

async function setupRoutes(db){
    await bookController.init(db);

    // Create a new book
    router.post('/books', bookController.createBook);

    // get all books
    router.get('/books', bookController.getAllBooks);

    // update a book
    router.patch('/books/:title', bookController.updateBook);

    // Delete a book
    router.delete('/books/:title', bookController.deleteBook);
    
    return router;
    
}

module.exports = setupRoutes;