//require stuff
var bodyParser = require('body-parser');
var express = require('express');

//declare global variables
var app = express();

//set use statements

//define routes
app.get(function(req, res){
	res.render('/');
});

//listen to port 3000
app.listen(3000);