var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, {
	useNewUrlParser: true
}, function (err, db) {
	if (err) throw err;
	var dbo = db.db("run");
	var myobj = {
		userId: 1,
		firstName: "菜鸟教程",
		userName: "www.run"
	};
	dbo.collection("test").insertOne(myobj, function (err, res) {
		if (err) throw err;
		console.log("文档插入成功");
		db.close();
	});
	// 	// var myobj = [{
	// 	// 		name: '菜鸟工具',
	// 	// 		url: 'https://c.runoob.com',
	// 	// 		type: 'cn'
	// 	// 	},
	// 	// 	{
	// 	// 		name: 'Google',
	// 	// 		url: 'https://www.google.com',
	// 	// 		type: 'en'
	// 	// 	},
	// 	// 	{
	// 	// 		name: 'Facebook',
	// 	// 		url: 'https://www.google.com',
	// 	// 		type: 'en'
	// 	// 	}
	// ]; dbo.collection("test").insertMany(myobj, function (err, res) {
	// 	if (err) throw err;
	// 	console.log("插入的文档数量为: " + res.insertedCount);
	// 	db.close();
	// });
});