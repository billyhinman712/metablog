//require stuff
var bodyParser = require('body-parser');
var ejsLayouts = require('express-ejs-layouts');
var express = require('express');

//declare global variables
var app = express();

//set use statements
app.set('view engine', 'ejs');
app.use(ejsLayouts);
app.use(bodyParser.urlencoded({extended: false}));

//include controllers/routers
app.use('/articles', require('./controllers/articles'));
app.use('/authors', require('./controllers/authors'));
app.use('/comments', require('./controllers/comments'));

//define routes
app.get('/', function(req, res){
	res.render('home');
});

app.get('*', function(req, res){
	console.log('wildcard route');
	res.render('error');
});

//listen to port 3000
app.listen(3000);