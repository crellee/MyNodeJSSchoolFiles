//express.js

//Sort of constructor
var express = require('express');
var app = express();				//<- npm install express

var fs = require('fs');

var obj = require('./module/obj.js');
//one way of using a json object
var objJSON = require('./contact.json'); // you can require a file like this

//jade, handlebars, ejs, etc.		<- engines
app.set('view engine', 'ejs'); 	//<- fortæller vi skal bruge ejs engine
								//npm install ejs


//CRUD:

//app.get(); 	//read
//app.post(); //create
//app.put();  //update
//app.delete();//delete

// route:
app.get('/', function(req, res){
	//res.send('<h1>Home Page</h1>');
	res.render('index', obj);
}); //<- getting the root of the request (root:3000)

app.get('/contact', function(req, res){
	//res.send('<h1>Contact Page</h1>');
		res.render('index', {title : 'Contact Page', name : 'Chriz'});
});

app.get('/object', function(req, res){
	//res.send('<h1>Contact Page</h1>');
		res.render('index', indexinfo);
});

app.get('/newcontact', function(req, res){
	//res.send('<h1>Contact Page</h1>');
		//res.render('contact', objJSON);
		fs.readFile('contact.json', 'utf-8', function(err, data) {
			res.render('contact', JSON.parse(data));

		});
});

app.listen(3001);



var indexinfo = {
	title: 'Home Page',
	getInfo: function() {
		return 'my name';
	}
	
};

//var objJSON = {"title" : "Contact", "name" : "Chris"}



/*
var http = require('http');
http.createServer(function(req, res) {
	res.write('Hello World');
	res.end();
}).listen(3000);
*/