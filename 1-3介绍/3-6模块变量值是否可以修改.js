// 测试模块的变量值是否可以修改

var md = require('./3-6-1')

var md2 = require('./3-6-1')


console.log(md == md2);

// md.add()

// 情况如下

// module.exports = {
// 	a,
// 	add
// }
// console.log(md.a);
// console.log(md2.a);的值得 都是0  是不会变化的


// module.exports = {
// 	get a() {
// 		return b;
// 	},
// 	add
// }
// console.log(md.a);
// console.log(md2.a);的值得 都是1  是不会变化的
// 这里的情况是 a的获取值是一个函数 动态的获取的