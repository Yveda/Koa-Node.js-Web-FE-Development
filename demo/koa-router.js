const koa = require('koa');
const app = new koa();
const bodyParser = require('koa-bodyparser');
const Router = require('koa-router');
const router = new Router();

router.get('/', (ctx, next)=>{
    
})

router.post('/', (ctx, next)=>{

})

app.use(bodyParser()).use(router.routes()).use(router.allowedMethods())

app.listen(3000);