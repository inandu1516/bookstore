var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    author: {
        type: String,
    },
    pages: {
        type: String,
    },
    img_url: {
        type: String,
    },
    create_date: {
        type: Date,
        default: Date.now()
    }
});

var Book = mongoose.model('Book', bookSchema);

module.exports = Book;

// Get all Books
module.exports.getBooks = function (callback) {
    Book.find(callback);
};

// Get Book by id
module.exports.getBookById = function (id, callback) {
    Book.findById(id, callback);
};

// Add Book
module.exports.addBook = function (book, callback) {
    Book.create(book, callback);
};

// Update Book
module.exports.editBook = function(id, book, options, callback){
    var query = {_id: id};
    var update = {
        title: book.title,
        genre: book.genre,
        description: book.description,
        author: book.author,
        pages: book.pages,
        img_url: book.img_url
    };
    Book.findOneAndUpdate(query, update, options, callback);
};

// Delete Book
module.exports.deleteBook = function(id, callback){
    var query = {_id: id};
    Book.remove(query, callback);
};