// 判断 对象是否为buf对象
// isBuffer(obj)

const obj = {}

const buf = Buffer.from("我喜欢编程")

console.log(Buffer.isBuffer(obj)); // false
console.log(Buffer.isBuffer(buf)); // true


// Buffer.byteLength 用于计算一个字符串的字节数

Buffer.byteLength(string, encoding)