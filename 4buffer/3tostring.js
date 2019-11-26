// Buffer对象与字符串对象之间的相互转换
// buf.toString(encoding, sta ,end )

// var buf = new Buffer("我喜欢编程")
// // console.log(buf);
// // {/* <Buffer e6 88 91 e5 96 9c e6 ac a2 e7 bc 96 e7 a8 8b> */}
// var str = buf.toString("utf8", 0, buf.length)
// console.log(str);




// Buffer.from(array) 返回一个新的 Buffer， 其中包含提供的八位字节数组的副本。

// Buffer.from(arrayBuffer[, byteOffset[, length]]) 返回一个新的 Buffer， 它与给定的 ArrayBuffer 共享相同的已分配内存。

// Buffer.from(buffer) 返回一个新的 Buffer， 其中包含给定 Buffer 的内容的副本。

// Buffer.from(string[, encoding]) 返回一个新的 Buffer， 其中包含提供的字符串的副本。

// Buffer.alloc(size[, fill[, encoding]]) 返回一个指定大小的新建的的已初始化的 Buffer。 此方法比 Buffer.allocUnsafe(size) 慢， 但能确保新创建的 Buffer 实例永远不会包含可能敏感的旧数据。 如果 size 不是数字， 则将会抛出 TypeError。

// Buffer.allocUnsafe(size) 和 Buffer.allocUnsafeSlow(size) 分别返回一个指定大小的新建的未初始化的 Buffer。 由于 Buffer 是未初始化的， 因此分配的内存片段可能包含敏感的旧数据。

// 如果 size 小于或等于 Buffer.poolSize 的一半， 则 Buffer.allocUnsafe() 返回的 Buffer 实例可能是从共享的内部内存池中分配。 Buffer.allocUnsafeSlow() 返回的实例则从不使用共享的内部内存池。






// ---------  创建的方法-----------


// const buf = Buffer.from([120, 120, 120, 120])
// console.log(buf);

// const buf = Buffer.from("我喜欢编程")

// console.log(buf);

{
	/* <Buffer e6 88 91 e5 96 9c e6 ac a2 e7 bc 96 e7 a8 8b> */
}

// const str = buf.toString()

// console.log(str);

const buf = Buffer.alloc(10)

console.log(buf);

const buf2 = Buffer.alloc(20, 1)

console.log(buf2);

const buf3 = Buffer.alloc(20, "我喜欢编程")
console.log(buf3);