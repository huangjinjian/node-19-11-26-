const express = require("express")

const app = express()

app.get("/", (req, res) => {
	res.send("你好")
})

app.listen(8082, 'localhost')