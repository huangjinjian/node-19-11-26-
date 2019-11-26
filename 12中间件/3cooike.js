const express = require("express")

const cookie = require("cookie-parser");

const app = express()

app.use(cookie())

app.get("/index.html", (req, res) => {
	console.log(req.cookies);
	res.sendFile(__dirname + '/cookie.html')
})


app.post("/index.html", (req, res) => {
	if (req.cookies["id"]) {
		let str = ""
		for (var key in req.cookies) {
			str += "cookie的key：" + key + " cookie值：" + req.cookies[key] + "<br>"
		}
		res.send(str)
	} else {
		res.cookie('id', "userId", {
			maxAge: 600000
		});
		res.cookie('admin', "qq123456", {
			maxAge: 600000
		});
		res.send()
	}
})



app.listen("8000", "localhost", () => {
	console.log("start");
})