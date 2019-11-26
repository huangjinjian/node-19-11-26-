// concat 方法 用于将几个buf对象结合创建为一个新的部分对象
// Buffer.concat([], length)

var str1 = Buffer.from("我")
var str2 = Buffer.from("喜")
var str3 = Buffer.from("欢")
var str4 = Buffer.from("编")
var str5 = Buffer.from("程")

var buf = Buffer.concat([str1, str2, str3, str4, str5])
var str = buf.toString()

console.log(str);