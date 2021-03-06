var express = require('../node_modules/express');
var app = express();
var io = require('../node_modules/socket.io').listen(app.listen(3333, function () {
	console.log('Socket io listening on port 3333!')
}));

io.sockets.on('connection', function (socket) {
    socket.emit('message', { message: 'Ready to chat chit!'});
    socket.on('send', function (data) {
		console.log(data);
        io.sockets.emit('message', data);
    });
});
