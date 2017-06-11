var socket = io();
socket.on('connect',function () {
		console.log('hiii new user is connected via socket io');


		socket.emit('createMessage', {
			from : 'safouene',
			text : 'content of message',
			createdAt : new Date()
		});
});



socket.on('newMessage', function (message){
	console.log('newmessage from server to browser', message);
});