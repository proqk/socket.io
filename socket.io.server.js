
var http = require('http');
var fs = require('fs');
var socketio = require('socket.io');

var server = http.createServer(function (request, response){
	fs.readFile('index.html', function (error, data){
		response.writeHead(200, { 'Content-Type': 'text/html' });
		response.end(data);
	});
}).listen(52273);

var io = socketio.listen(server);
io.set('log level', 2);
io.sockets.on('connection', function (socket){
	socket.on('rint', function (data){
		console.log('clinet send data!', data);
		socket.emit('smart', data);
	});
});