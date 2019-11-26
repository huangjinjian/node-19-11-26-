var _name, _age;
var name = '',
	age = 0;

var foo = function (name, age) {
	this.name = name ? name : '默认名字cn'
	_name = name ? name : '默认名字cn'
	_age = age ? age : "默认的年龄19"
}

// 设置私有变量_name
foo.prototype.setName = function (name) {

	_name = name
}
// 获取私有变量_name
foo.prototype.getName = function () {
	return _name
}
// 设置私有变量_age
foo.prototype.setAge = function (age) {
	_age = age
}
// 获取私有变量_age
foo.prototype.getAge = function () {
	return _age
}

foo.prototype.name = name
foo.prototype.age = age

foo.staticName = "1";
foo.staticFunction = function () {
	console.log(foo.staticName);
}

module.exports = foo