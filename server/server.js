const path = require('path');
const publicPath = path.join(__dirname, '../public');
var express = require('express');
const http = require('http');
const socketIO = require('socket.io');
var port = process.env.PORT || 3000;



var app = express();
var server = http.createServer(app);
var io = socketIO(server);




app.use(express.static(publicPath));

io.on('connection', (socket) => {
		console.log('hiii new user is connected via socket io');

		socket.on('createMessage', (message) => {
				console.log('create message from browser to server', message); 
		});


			socket.emit('newMessage', {
				from : 'safouene@gmail.com',
				to : 'chawki@gmail.com',
				content : 'the content of email',
				created_at : new Date()
			});
});







server.listen(port, () => {
		console.log('server started in port '+port);
});