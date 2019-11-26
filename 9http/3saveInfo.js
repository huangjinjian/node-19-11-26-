// 讲客户端的信息保存在txt文件中

const http = require("http")
const fs = require("fs")

const server = http.createServer((req, res) => {
	let out = fs.createWriteStream(__dirname + "/request.txt")
	out.write("客户端的请求方法为" + req.method + "\r\n")
	out.write("客户端的请求url为" + req.url + "\r\n")
	out.write("客户端的请求头对象为" + JSON.stringify(req.headers) + "\r\n")
	out.write("客户端的请求HTTP版本为" + req.httpVersion + "\r\n")

	req.on("data", (data) => {
		console.log("服务器接收到数据:" + data);
	})
	req.on("end", () => {
		console.log("接收数据完毕");
	})

	out.end()
})


server.listen(8080, () => {
	console.log("start");
})