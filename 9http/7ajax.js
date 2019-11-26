// 创建一个服务器给ajax访问

const http = require("http")

const server = http.createServer((req, res) => {
	if (req.url !== "/favicon.ico") {
		res.writeHead(200, {
			'content-Type': 'text/html',
			'content-encoding': 'utf8',
			'Access-Control-Allow-Origin': 'http://localhost'
		})
		res.write("你好")
	}
	res.end()

}).listen(8181, () => {
	console.log("start");
})