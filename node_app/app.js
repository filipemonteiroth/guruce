var io = require('socket.io').listen(3090),
	redis = require('redis'),
	clientRedis = redis.createClient(),
	clientRedisPublish = redis.createClient();

clientRedis.subscribe("new_user");
clientRedis.subscribe("users_loaded");

io.sockets.on("connection", function(socket) {
	socket.on("get_users", function(data) {
		console.log(data);
		console.log(socket.id);
		var message = {socket: socket.id};
		clientRedisPublish.publish("get_users", JSON.stringify(message));
	});
});

clientRedis.on("message", function(channel, message) {
	console.log("Channel: " + channel);
	console.log(message);
	if (channel == "users_loaded") {
		message = JSON.parse(message);
		socket = io.sockets.sockets[message.socket];
		socket.emit(channel, message);
	} else {
		io.sockets.emit(channel, message);
	}	
});