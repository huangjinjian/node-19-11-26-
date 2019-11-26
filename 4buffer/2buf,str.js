// buf对象可以通过下标修改数据,str对象不可以通过下标修改对象

var buf = new Buffer(11)
// buf.length 
// buf[1] = 1  是可以的

// var str = "字符串"
// str[1] = "付"  修改不了


// 另外buf 还有个slice方法  用来分享buf数据 并不是复制

// var buf = new Buffer(20)

// var subBuf = buf.slice(2,4)

// subBuf[1] = 1

// 则原来的subBuf的内存字节流也会变动