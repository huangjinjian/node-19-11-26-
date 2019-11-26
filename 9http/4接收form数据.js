// 接收表单发送的数据

const http = require("http")

const server = http.createServer((req, res) => {

	if (req.url !== "/favicon.ico") {
		req.on("data", (data) => {
			console.log(decodeURIComponent(data));
		})
		req.on("end", () => {
			console.log('数据接收完毕');
		})
	}
	res.end()
}).listen(8081, "localhost", () => {
	console.log("start");
})