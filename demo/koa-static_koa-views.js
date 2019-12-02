const koa = require('koa');
const views = require('koa-views');
const static = require('koa-static')
const path = require('path');
const bodyParser = require('koa-bodyparser');
const Router = require('koa-router');
const router = new Router();
const app = new koa();

//加载模板引擎
app.use(views(__dirname + './views', {
    map: {html: 'ejs'}
}))

app.use(static(
    path.join(__dirname, '/static')
))

router.get('/', async(ctx, next)=>{
    await ctx.render('index'); //渲染模板
})

router.post('/', (ctx, next)=>{
    let postData = ctx.request.body;
    ctx.body = postData;
})

app.use(bodyParser()).use(router.routes()).use(router.allowedMethods())

app.listen(3000, ()=>{
    console.log('sever post 3000')
});