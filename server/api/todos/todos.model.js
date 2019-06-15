
var mongoose = require('mongoose');

var todoSchema =  mongoose.Schema({
        name : { type : String , required: true },
        completed : { type : String , required :true},
        description : String
});

var todoModel = mongoose.model('Todo',todoSchema);
exports = module.exports = todoModel;