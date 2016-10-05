var http = require('http'); // module require http
const fs = require('fs');

//var file;


var server = http.createServer(function(req, res)
{
	fs.readFile('index.html' , 'utf-8' , function(err, data)
{
	res.writeHead(200, {'Content-type' : 'text/html'});
	/*res.write('<body><h1>Hello World!</h1></body>');*/
	res.write(data);
	res.end();

	});
});

server.listen(3000);


