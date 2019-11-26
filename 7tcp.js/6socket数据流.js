// socket 对象可以用来读取客户端发送的流数据

// 每次接受客户端发送的数据流时触发data事件

const net = require("net")

const server = net.createServer((socket) => {
	socket.on("data", (data) => {
		console.log(data.toString());
		console.log(socket.bytesRead);
	})
	socket.on("end", () => {
		console.log("客户端断开连接");
	});
})

server.listen(8080, () => {
	console.log('开启服务器');
})