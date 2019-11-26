// bodyParser用来解析客服端请求的body的内容

const express = require("express")
const fs = require("fs")
var util = require("util");

const bodyParser = require('body-parser');

const app = express()


// var urlencodedParser = bodyParser.urlencoded({
// 	extended: false
// })
// var jsonParser = bodyParser.json()

// app.use(jsonParser)
// app.use(urlencodedParser)

app.get("/index.html", (req, res) => {
	res.sendFile(__dirname + '/index.html')
})

app.post("/index.html", (req, res) => {
	// console.log(util.in);
	console.log(util.inspect(req.files, {
		depth: 1
	}));
	res.send("上传成功")
})


app.listen("8484", "localhost", () => {
	console.log("start");
})