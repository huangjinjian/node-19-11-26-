// basicAuth中间件为网站添加身份认证功能

var express = require("express")

var app = express()


app.use(express.basicAuth("test", "123"));




app.get("/", (req, res) => {
	res.send("你好")
})





app.listen(8338, 'localhost', () => {
	console.log('start');
})