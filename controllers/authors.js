var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
	res.render('authors/index');
});

router.get('/new', function(req, res){
	res.send('new author form goes here');
});

router.get('/:id', function(req, res){
	res.send('author show page');
});

router.post('/', function(req, res){
	res.send('/authors POST route reahced');
});

module.exports = router;