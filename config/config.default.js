//config cookie 模板 每个请求的地址
exports.keys = 'xxx';
// 模板的配置 使用模板之前是不是需要引入模板 引入哪种模板就以哪种哪种模板以插件的形式接入
exports.view = {
	defaultViewEngine: 'nunjucks',
	mapping: {
		'.tpl': 'nunjucks',
	},
};
// 具体请求的配置
exports.news = {
	pageSize: 5,
	serverUrl: 'https://hacker-news.firebaseio.com/v0',
};
//中间件的配置
exports.middleware = [
	'robot'
];
exports.robot = {
	ua: [
		/Baiduspider/i,
	]
};