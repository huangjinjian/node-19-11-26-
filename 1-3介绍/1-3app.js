var http = require('http')
http.createServer((req, res) => {
	res.writeHead(200, '', {
		'content-type': 'text/html;charset=utf-8'
	});

	res.write('hello world');

	res.end();
}).listen(8081)


console.log('服务器启动');