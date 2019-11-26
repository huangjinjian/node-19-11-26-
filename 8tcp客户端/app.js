const net = require("net")

const server = net.createServer((socket) => {

	socket.on("data", (data) => { // 客户端发送数据的时候触发接受事件
		console.log("接受客服端发过来的数据:" + data);
		// setTimeout(() => {
		// 	socket.write("收到了")
		// }, 3000)
	})

	socket.setTimeout(10000, () => { // 设置多少秒后 客户端未发送数据的时候  也就是连接超时事件
		console.log('连接超时');
	})

	socket.on("error", (err) => { // 当客户端ctrl+c 退出连接的时候会触发
		console.log("与客户端连接或通信的过程中发生了一个错误：" + err.code)
		socket.destroy()
	})

	socket.on("end", () => { //服务端（客户端）可以主动的用end方法来关闭和客户端（服务端）的连接 客户端就会触发end的事件
		console.log("客户端连接被关闭");
	})

	socket.on("close", (had_error) => {
		if (had_error) {
			console.log("由于一个错误导致的socket端口关闭");
		} else {
			console.log("socket端口被正常关闭");
		}
	})
})

server.listen(8080, () => {
	console.log("开启服务器");
})

server.on("error", (err) => { // 这个事件主要是和服务器启动的时候有关  例如端口被占用了  等原因
	console.log(err.code);
})