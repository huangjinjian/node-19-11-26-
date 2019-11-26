// fs.readFile(path,option,fn)
// fs.readFileSync(path,option)


const fs = require("fs")

// ----------读----------

// fs.readFile(__dirname + "/test.txt", (err, data) => {
// 	if (err) {
// 		console.log(err)
// 	} else {
// 		console.log(data)
// 		console.log(data.toString());
// 	}
// })

// fs.readFile("./5操作文件系统/test.txt", "utf8", (err, data) => {
// 	if (err) {
// 		console.log("文件不存在");
// 	} else {
// 		console.log(data);
// 	}
// })

try {
	let data = fs.readFileSync(__dirname + "/test.txt", "utf8")
	console.log(data);
} catch (err) {
	console.log('文件不存在');
}