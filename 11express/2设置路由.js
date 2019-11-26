const express = require("express")

const app = express()

app.get('/index.html/:id?/:name?', (req, res) => {
	console.log(req.params);
	let str = ""
	for (key in req.params) {
		str += "参数名；" + key + " 参数值: " + req.params[key] + "\n"
	}
	res.send(str)
})





app.listen(8012, "localhost")