const net = require("net")
const client = new net.Socket()

client.setEncoding("utf8")
client.connect(8080, "localhost", () => {
	console.log("已经连接服务器端");

	setTimeout(() => {
		client.write("你好")
		// client.end("再见")
	}, 3000)

})
client.on("data", (data) => {
	console.log("已经接受到服务器发过来的数据：" + data);
})

client.on("error", (err) => {
	console.log("与服务端连接或通信的过程中发生了一个错误：" + err.code)
	client.destroy()
})