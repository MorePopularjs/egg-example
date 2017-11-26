// module.exports = app => {
// 	class NewsController extends app.Controller {
// 		* list() {
// 			const dataList = {
// 				list: [
// 					{ id: 1, title: 'this is news 1', url: '/news/1' },
// 					{ id: 2, title: 'this is news 2', url: '/news/2' }
// 				]
// 			};
// 			yield this.ctx.render('news/list.tpl', dataList);
// 		}
// 	}
// 	return NewsController;
// };
//app.controller.news.list
module.exports = app => {
	class NewsController extends app.Controller {
		* list() {
			const ctx = this.ctx;
			console.log(ctx.app.cities)
			//
			console.log('ctx====>',ctx);
			app.logger
			const page = ctx.query.page || 1;
			//ctx上面增加了很多其他的属性 service 用来发送请求
			const newsList = yield ctx.service.news.list(page);
			yield ctx.render('news/list.tpl', { list: newsList });
		}
	}
	return NewsController;
};