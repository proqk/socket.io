
var http = require('http');
var fs = require('fs');
var socketio = require('socket.io');

var server = http.createServer(function (request, response){
	fs.readFile('index.html', function (error, data){
		response.writeHead(200, { 'Content-Type': 'text/html' });
		response.end(data);
	});
}).listen(52273, function(){
	console.log('Run!!');
});

var io = socketio.listen(server);
//io.set('log level', 2);

io.sockets.on('connection', function (socket){
	socket.on('chat', function (data){
//		console.log('clinet send data!', data);
		io.sockets.emit('chat', data);
	});
});
