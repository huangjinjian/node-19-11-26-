//  获取客户端的信息

const http = require("http")

const server = http.createServer((req, res) => {
	req.on("data", () => {
		console.log("读取数据");
	})
	req.on("end", () => {
		console.log("读取数据完毕");
	})
	console.log(req.url);
	res.end()
})

server.listen(8080, () => {
	console.log("start");
})