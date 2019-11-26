// url 实践

const http = require("http")

const url = require("url")

const server = http.createServer((req, res) => {

	if (req.url !== "favicon.ico") {
		let url_parse = url.parse(req.url)
		console.log(url_parse);
		res.write("<html><head><meta charset='utf-8'/></head>")

		switch (url_parse.pathname) {
			case "/":
			case "/index.html":
				res.write("<body>你访问的是首页</body></html>")
				break;

			default:
				res.write("<body>你访问的不是首页</body></html>")
				break;
		}
	}

}).listen(8282, () => {
	console.log("start");
})