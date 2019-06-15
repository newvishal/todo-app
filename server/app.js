
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
        extended : true
}));

app.use(express.static(path.join(__dirname,'../client')));
require('./db');
require('./routes')(app);

var port = 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

exports = module.exports = app;
