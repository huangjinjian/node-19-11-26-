const express = require("express")

const app = express()


app.get('/', (req, res) => {
	res.sendFile(__dirname + '/ajax.html')
})

app.post("/index/api", (req, res) => {
	req.on("data", (data) => {
		res.send(JSON.parse(data.toString()))
	})
})

app.listen(8484, "localhost")