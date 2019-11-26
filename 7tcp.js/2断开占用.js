// 创建两个相同的断开tcp服务器的时候 第二会触发error事件

const net = require("net")

const server = net.createServer((socket) => {
	console.log("客户端与服务端建立连接");
})

server.listen(8055, () => {
	console.log("创建服务器成功");
})

server.on("error", (e) => {
	if (e.code == "EADDRINUSE") {
		console.log("服务器端口被占用");
	} else {
		console.log("服务器开启出错");
	}
})