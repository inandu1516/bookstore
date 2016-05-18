//https://www.youtube.com/watch?v=qrIvv6OTN2Y

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

Book = require('./models/book');
User = require('./models/users');

// Connect to Mongoose
mongoose.connect('mongodb://localhost/bookstore');
var db = mongoose.connection;

app.get('/', function(req, res){
    res.send('Please use /api/books or /api/genres');
});

app.get('/books', function(req, res){
    Book.getBooks(function(err, books){
        if(err){
            throw err;
        }
        res.json(books);
    });
});

app.get('/users', function(req, res){
    console.log("app.get('/books/users");
    User.getUsers(function(err, users){
        if(err){
            throw err;
        }
        res.json(users);
    });
});

app.post('/registerUser', function(req, res){
    console.log("app.get('/registerUser");
    var user = req.body;
    // console.log(user.name);
    // console.log(user.password);
    // console.log(user.email);
    User.registerUser(user, function(err, user){
        if(err){
            throw err;
        }
        res.json(user);
    });
});

app.get('/login/:name', function(req, res){
    var userName = req.params.name;
    var userPassword = req.params.password;
    console.log("app.get'/login/:name' --> name : " + userName);
    console.log("app.get'/login/:name' --> password : " + userPassword);
    User.getUser(req.params.name, function(err, user){
        if(err){
            throw err;
        }
        res.json(user);
    });
});

app.get('/books/details/:id', function(req, res){
    Book.getBookById(req.params.id, function(err, book){
        if(err){
            throw err;
        }
        res.json(book);
    });
});

app.post('/books', function(req, res){
    var book = req.body;
    Book.addBook(book, function(err, book){
        if(err){
            throw err;
        }
        res.json(book);
    });
});

app.put('/books/:_id', function(req, res){
    var id = req.params._id;
    var book = req.body;
    Book.editBook(id, book, {}, function(err, book){
        if(err){
            throw err;
        }
        res.json(book);
    });
});

app.delete('/books/:_id', function(req, res){
    var id = req.params._id;
    Book.deleteBook(id, function(err, book){
        if(err){
            throw err;
        }
        res.json(book);
    });
});


app.listen(3000);
console.log('Running on port 3000...');