const Book = require('../models/bookModel');

let bookModel;

async function init(db){
    bookModel = new Book(db);
}

async function createBook(req, res) {
    try{
        const bookData = req.body;
        const result = await bookModel.createBook(bookData);
        res.status(201).json({message: 'Book creating successfully', data: result});
    }catch(err){
        res.status(500).json({message : 'Error Creating book', error: err.meaasge});
    }
    
}
 
async function getAllBooks(req, res) {
    try{
        const books = await bookModel.getAllBooks();
        res.status(200).json({message: 'Books fetched successfully!', data: books});

    }catch(err)
    {
        res.status(500).json({message : 'Error fetching books', error : err.message});
    }
    
}



//Updating a book
async function updateBook(req, res) {
    try{
        const {title} = req.params;
        const updateData = req.body;
        const result = await bookModel.updateBook(title, updateData);
        res.status(200).json({message: 'Book updated successfully!', data : result});
    }catch(err){
        res.status(500).json({message: 'Error Updating book' , error: err.message});
    }
    
}

//Delete a book
async function deleteBook(req, res){
    try{
        const {title} = req.params;
        const result = await bookModel.deleteBook(title);
        res.status(200).json({message : 'Book deleted successfully', data:result});
    }catch(err){
        res.status(500).json({message: 'Error deleting book', error: err.message});
    }
    
}

module.exports= {init , createBook ,getAllBooks ,deleteBook ,updateBook };