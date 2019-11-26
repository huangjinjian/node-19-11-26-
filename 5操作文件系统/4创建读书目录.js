// 创建目录用的是
// fs.mkdir(path , mode , fn)

const fs = require("fs")

// 创建
// fs.mkdir(__dirname + "/testDir", (err) => {
// 	if (err) {
// 		console.log('创建目录失败');
// 	} else {
// 		console.log("创建目录成功");
// 	}
// })

// fs.writeFile(__dirname + "/testDir/test.txt", "test", (err) => {
// 	if (err) console.log("创建失败");
// 	else {
// 		console.log("创建成功");
// 	}
// })


// 读取目录
fs.readdir(__dirname + "/testDir", (err, files) => {
	if (err) console.log("读取目录不成功");
	else {
		console.log(files);
	}
})