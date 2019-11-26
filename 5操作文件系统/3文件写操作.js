const fs = require("fs")

// fs.writeFile(path , data,optiong,fn)
// fs.writeFileSync(path,data,Option)


// 创建并写入  message.txt文件

// fs.writeFileSync(__dirname + "/message.txt", "我喜欢编程", (err) => {
// 	if (err) {
// 		console.log("文件写入不成");
// 	} else {
// 		console.log("文件写入成功");
// 	}
// })

// const buf = Buffer.from("我喜欢编程")

// fs.writeFileSync(__dirname + "/message2.txt", buf, (err) => {
// 	if (err) {
// 		console.log("文件写入不成");
// 	} else {
// 		console.log("文件写入成功");
// 	}
// })


// -----追加数据-------

const options = {
	flag: 'a'
}

// fs.writeFile(__dirname + "/message.txt", '\n 这是追加的数据', options, (err) => {
// 	if (err) {
// 		console.log("数据追加失败");
// 	} else {
// 		console.log("数据追加成功");
// 	}
// })

fs.appendFile(__dirname + "/message.txt", '\n 这是追加zzz的数据', (err) => {
	if (err) {
		console.log("数据追加失败");
	} else {
		console.log("数据追加成功");
	}
})