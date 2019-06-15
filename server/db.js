
var mongoose =  require('mongoose');

const url = 'mongodb://localhost:27017/todo-mean';

mongoose.connect(url, (err) => {
        if(err){
            console.log(`can not connect to mongodb error : ${err}`);
        }else{
            console.log('application connected to mongodb');
        }
});