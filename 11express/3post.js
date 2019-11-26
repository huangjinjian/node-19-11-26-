const express = require("express")
const fs = require("fs")
const qs = require("querystring")

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


const app = express()

app.get("/", (req, res) => {

	let file = fs.createReadStream(__dirname + "/index.html", {
		encoding: 'utf8'
	})
	file.on("data", (data) => {
		res.send(data)
	})
})



app.post("/", (req, res) => {
	req.on("data", (data) => {
		insert(res, data.toString())
	})
})

// 数据库插入数据

function insert(res, data) {
	MongoClient.connect(url, {
		useNewUrlParser: true
	}, function (err, db) {
		if (err) throw err;
		var dbo = db.db("run");
		dbo.collection("test").insertOne(qs.parse(data), function (err, res2) {
			if (err) {
				res.send("数据保存不成")
			} else {
				res.send("文档插入成功");
				db.close();
			}
		});
	});
}


app.listen(8280, "localhost")