/**
 * Created by yangchongduo on 2017/7/10.
 */
//Controller 一般不会自己产出数据，也不会包含复杂的逻辑，复杂的过程应抽象为业务逻辑层 Service。
module.exports = app => {
	//NewService 本身服务导出的名字是什么
	class NewService extends app.Service {
		* list(page = 1) {
			// read config
			const { serverUrl, pageSize } = this.app.config.news;
			// use build-in http client to GET hacker-news api
			const { data: idList } = yield this.ctx.curl(`${serverUrl}/topstories.json`, {
				data: {
					orderBy: '"$key"',
					startAt: `"${pageSize * (page - 1)}"`,
					endAt: `"${pageSize * page - 1}"`,
				},
				dataType: 'json',
			});
			// parallel GET detail, see `yield {}` from co
			const newsList = yield Object.keys(idList).map(key => {
				const url = `${serverUrl}/item/${idList[key]}.json`;
				return this.ctx.curl(url, { dataType: 'json' });
			});
			return newsList.map(res => res.data);
		}
	}
	return NewService;
};