// 复制缓存区数据

// buf.copy(targetBuf, targetStart, start, end)
var bufStr = Buffer.from("我喜欢编程")

var buf = Buffer.alloc(120)

console.log(buf);

var buf2 = bufStr.copy(buf, 10)

console.log(buf);