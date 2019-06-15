
var Todo = require('./todos.model');

function index(req,res){
        Todo.find({}, (err, todos) => {
                if(err){
                        res.status(500).json({
                                message : err.message
                        });
                }else{
                        res.status(200).json({
                            message : "Todos",
                            todos : todos
                        })
                }
        });
}

function create(req, res){
       var newtodo = req.body;
       Todo.create(newtodo , (err, savedTodo) => {
                if(err){
                    res.status(500).json({
                            message: err.message
                    })
                }else{
                    res.status(200).json({
                            message: "Todo created",
                            todo : savedTodo
                    });
                }
       });
}

function update(req, res){
           var todoId = req.params.todoId;
           var updatedTodo = req.body;
           Todo.findByIdAndUpdate(todoId , updatedTodo , {new :true} , (err, savedTodo) => {
                        if(err){
                                res.status(500).json({
                                        message : err.message
                                });
                        }else{
                                res.status(200).json({
                                        message : "Todo updated successfully", 
                                        todo : savedTodo
                                })
                        }
           });     
}

function remove(req, res){
             var id = req.params.id;
             Todo.findByIdAndRemove(id , (err, deletedTodo ) => {
                     if(err){
                             res.status(500).json({
                                     message : err.message
                             })
                     }else{
                             res.status(200).json({
                                     message : "Todo Deleted Successfully",
                                     todo : deletedTodo
                             })
                     }
             })   
}

function get(req, res){
        var id = req.params.id;
        Todo.findById(id , (err , getTodo) => {
                if(err){
                        res.status(500).json({
                                message : err.message
                        })
                }else{
                        res.status(200).json({
                                message : "Todo Get Successfully" ,
                                todo : getTodo
                        })
                }
        })
}

exports = module.exports = {
    index: index ,
    create : create ,
    update : update ,
    remove : remove ,
    get : get
}