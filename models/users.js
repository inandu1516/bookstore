var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    productes : [
                    { 
                        type: ObjectId,     //Sustituirá les ID's amb la info de 'books'
                        ref: 'Book' 
                    }
                ]
});

User = mongoose.model('User', userSchema);

module.exports = User;

// Register a User
module.exports.registerUser = function (user, callback) {
    User.create(user, callback);
};

// Get All Users
module.exports.getUsers = function (callback) {
    User.find(callback);
};

// Get Unique User By Name
module.exports.getUser = function (name, callback) {
    /** http://mongoosejs.com/docs/3.4.x/docs/populate.html
     * populate() sustituirá les ID's dels productes amb la seva informació real del document books
     * */
    User.findOne({name: name}, callback).populate('productes');
};



/**

 db.users.insert(
    {
     "name": "Inge",
     "productes": [
             ObjectId("5734a0315becb6e778a1b8d0"),
             ObjectId("5734cbfad1c080e81feaebd5"),
             ObjectId("5736831812aebb882740904c")
         ]
    }
 )
 
 var result = db.users.findOne({"name":"Inge"},{"productes":1})
 var compras = db.books.find({"_id":{"$in":result["productes"]}})


 */
