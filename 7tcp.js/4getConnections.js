// getConnections 可以用来查看tcp服务器建立连接的客服端的连接数量‘’

const net = require("net")

const server = net.createServer((socket) => {
	console.log("连接成功");
	server.getConnections((err, count) => {
		console.log("当前服务器连接的个数为：" + count);
		server.maxConnections = 2
		console.log("当前服务器最大连接的个数为：" + server.maxConnections);
	})

})

server.listen(4646, () => {
	console.log("开启服务器");
})