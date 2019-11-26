// 创建tcp服务器  tcp是数据流传输控制协议  
// socket是tcp的api

const net = require("net")

const server = net.createServer((socket) => {
	console.log("客户端与服务端链接已建立");
	// console.log(socket);
})

server.listen(8433, () => {
	console.log("服务器开启成功");
})