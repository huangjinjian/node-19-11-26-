if (module == require.main) {
	console.log('这是主模块');
}

// require.main该函数 主要是判断该模块是否为主模块
// node 直接运行的模块 js   即为主模块

// require 多次引入相同的模块 不会多次加载