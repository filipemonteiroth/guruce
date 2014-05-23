var io = require('socket.io').listen(3090),
	redis = require('redis'),
	clientRedis = redis.createClient();

clientRedis.subscribe("new_user");

io.sockets.on("connection", function(socket) {
	
});

clientRedis.on("message", function(channel, message) {
	console.log("Channel: " + channel);
	console.log(message);
	io.sockets.emit(channel, message);
});