// 转换url字符串与查询字符串

// ？之后 #之前的 都是查询字符串

const qs = require("querystring")

// querystring 主要用来转换查询字符串的

// const str = "param1=1&name=zzz&age=2500"

// console.log(qs.parse(str));

// const obj = qs.parse(str)

// console.log(qs.stringify(obj));


const url = require("url")

const qsUrl = "www.baidu.com?name=cn&age=2500#page=1"

console.log(url.parse(qsUrl))

const obj2 = url.parse(qsUrl)

console.log(url.format(obj2));