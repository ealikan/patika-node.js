const koa = require("koa"); 
const router = require("koa-router"); 
const app = new koa(); 
const _ = new router();
  
_.get("/", (ctx)=>{ ctx.body = "<h1>İndex Sayfasına hoşgeldiniz. </h1>"; });
  

_.get("/hakkimda", (ctx)=>{ ctx.body = "<h1>hakkimda Sayfasına hoşgeldiniz. </h1>"; });


_.get("/iletisim", (ctx)=>{ ctx.body = "<h1>iletisim Sayfasına hoşgeldiniz. </h1>"; }); 


app.use(_.routes()); 


app.listen(3000);