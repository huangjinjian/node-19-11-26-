// 如何创建buffer

// 3种 

// 1、
// var buf = new Buffer(size)

// 2、
// var buf = new Buffer(数组)

// 3、
// var buf = new Buffer(str, encoding)
// var bar = new Buffer('我是')
// var bar = new Buffer('我是','utf8')
// var bar = new Buffer('我是','utf16le')

// fill方法
// ArrayBuffer.fill(value, star, end)


// REPL 环境显示的是16进制的