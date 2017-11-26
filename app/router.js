//
//统一控制路由
module.exports = app => {
	app.get('/', app.controller.home.index);
	app.get('/news', app.controller.news.list);
};