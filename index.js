/**
 * Created by summer on 17/1/10.
 */
const mount = require('koa-mount');
const serve = require('koa-static');
const koa = require('koa');
const restc = require('restc');

// // for express
// app.use(restc.express());
// for koa
var a = koa();
a.use(restc.koa());
a.use(serve('.'));
// // ...and koa2
// app.use(restc.koa2());

var b = koa();
b.use(function *(next) {
  yield next;
  this.body = { message: 'Hello world!'};
});

var app = koa();
app.use(mount('/hello', a));
app.use(mount('/world', b));

app.listen(3000);