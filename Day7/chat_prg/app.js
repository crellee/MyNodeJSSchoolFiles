var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res)
{
	res.sendFile(__dirname + '/index.html');
});

var intid = 0;
io.on('connection', function(socket)
{
	socket.on('chat message', function(msg)
	{
		intid = intid + 1;
		//String stringid = intid.toString();
		io.emit('chat message', 'Person with id ' + intid + ' said: \n' + msg);
	});
});

http.listen(3000);