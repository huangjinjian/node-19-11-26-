// pipe方法  可以用来将socket收到的数据流 写入到文件目标对象

const net = require("net")
const fs = require("fs")
let file = fs.createWriteStream(__dirname + "/message.txt")

const server = net.createServer((socket) => {
	socket.pipe(file)
})

server.listen(8080, () => {
	console.log("启动服务器");
})