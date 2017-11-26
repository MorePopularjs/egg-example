// module.exports = app => {
// 	// 首先koa由四个文件 context request response context
// 	app.cache = new Cache();
// };
module.exports = app => {
	app.beforeStart(function* () {
		// 应用会等待这个函数执行完成才启动
		app.cities = yield app.curl('http://example.com/city.json', {
			method: 'GET',
			dataType: 'json',
		});
	});
};