// var Koa = require('koa');
// var app = new Koa();
//
// app.use(function *(){
// 	this.body = 'Hello World';
// });
//
// app.listen(3000);
// process.on('SIGINT',function () {
// 	console.log('xxx')
// 	process.exit(1)
// })
// setTimeout(()=>{
// 	process.kill(process.getuid(),'xxxx')
// 	// process.exit(1)
// },2000)
// process.on('xxxx',function () {
// 	console.log('ggggg')
// })
// process.on('exit',function () {
// 	console.log('vvv')
// })
const path=require('path')
console.log(path.resolve(__dirname))