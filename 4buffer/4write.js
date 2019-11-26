// buffer 的对象的write方法

// buf.write(str , offset , length , encoding)

var buf = Buffer.from("喜欢")

// console.log(buf);

const buf2 = Buffer.from("我喜欢编程")

// console.log(buf2);

{
	/* <Buffer e5 96 9c e6 ac a2>
	<Buffer e6 88 91 e5 96 9c e6 ac a2 e7 bc 96 e7 a8 8b> */
}

const str = buf2.write("热", 4, 3)

console.log(buf2.toString());