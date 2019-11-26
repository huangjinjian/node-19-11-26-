var b = 1;

var add = function () {
	b++
}

module.exports = {
	a: b,
	// get a() {
	// 	return b;
	// },
	add
}

// let _a = 0;

// module.exports = {
// 	get a() {
// 		return _a;
// 	},
// 	// set a(v) {
// 	// 	_a = v;
// 	// },
// 	add() {
// 		_a++;
// 	}
// };