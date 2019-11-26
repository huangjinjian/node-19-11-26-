const path = require("path")


// 将多个参数值得 合并为一个路径字符串
// const myPath = path.join(__dirname, "a", "b", "c")
// console.log(myPath);
// C:\Users\Administrator\Desktop\node-1\6path\a\b\c


// resolve 方法 返回绝对路径

// const myPath = path.resolve("a", 'b', "c")

// console.log(myPath);

// C:\Users\Administrator\Desktop\node-1\a\b\c

console.log(path.dirname("./foo/bar/baz/asdf"));