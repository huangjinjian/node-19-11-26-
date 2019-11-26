// socket.address 可以用来获取 socket端口对象的地址信息

const net = require("net")

const server = net.createServer((socket) => {
	console.log("socket的地址信息：" + JSON.stringify(socket.address()));
	console.log("server的地址信息：" + JSON.stringify(server.address()));
})

server.listen(4141, () => {
	console.log("开启服务器");
})