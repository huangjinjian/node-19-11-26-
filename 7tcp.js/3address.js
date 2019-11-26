// address 用来查看服务器监听的地址信息


const net = require("net")

const server = net.createServer(() => {
	console.log('连接成功');

})

server.listen(8055, () => {
	let address = server.address()
	console.log("服务器监听的地址信息：" + JSON.stringify(address));
})