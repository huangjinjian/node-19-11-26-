// html文件可以通过res的sendfile方法 显示

// sendfile 发送的是一个文件  参数为路径

const express = require('express')

const app = express()

app.get("/index.html", (req, res) => {
	res.sendFile(__dirname + '/index2.html')
})




app.listen(8181, "localhost")