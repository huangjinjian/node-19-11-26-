// buf 与数值之间的转换

const buf = Buffer.from([0, 16, 32, 48])

console.log(buf);

//---<Buffer 00 10 20 30> -- 

console.log(buf.readUInt8(0));