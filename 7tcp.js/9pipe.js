const net = require("net")
const fs = require("fs")
let file = fs.createWriteStream(__dirname + "/message3.txt")

const server = net.createServer((socket) => {
	socket.pipe(file, {
		end: false
	})
	socket.on("end", () => {
		file.end("这不是传送送过来的数据")
	})
})

server.listen(8080, () => {
	console.log("启动服务器");
})