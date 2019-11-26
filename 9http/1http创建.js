// 1创建http服务器

const http = require("http")

const server = http.createServer((req, res) => {
	console.log("客服端访问");
})

server.listen(8080, () => {
	console.log('启动服务器');
	// server.close()
})

// 服务端和客户端建立起连接的时候 触发connection事件
server.on("connection", (socket) => {
	console.log("客户端连接已建立");
	// console.log(socket);
})


// 2关闭服务器
server.on("close", () => {
	console.log("服务器已经关闭");
})

// 3服务器端口被占用  就会触发error事件

server.on("error", (e) => {
	if (e.code == "EADDRINUSE") {
		console.log("端口被占用");
	}
})

server.timeout = 3000

server.on("timeout", (socket) => {
	console.log("服务器连接超时");
})