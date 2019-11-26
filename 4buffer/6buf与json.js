// buf 与json 的 转化

// JSON.stringify()可以将buf转化为字符串 

// JSON.parse()可以将字符串转为数组


const buf = Buffer.from("我喜欢编程")

const str = JSON.stringify(buf)

const arr = JSON.parse(str)

const buf2 = Buffer.from(arr)

const str2 = buf2.toString()

console.log(str2);