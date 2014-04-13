/*jslint node:true*/

/**
 * Module dependencies.
 */
//load koa
var koa = require('koa');
var router = require('koa-router');
var parse = require('co-body');
var public_dir = require('koa-static');
var app = module.exports = koa();
var views = require('co-views');
var config = require('./config/app');
 
//var User = require('./model/user').User;


var parser = function *parser( next) {
  this.request.body = yield parse.form(this);
  yield next;
}


var render = views(__dirname + '/' + config.view.folder_name, { ext: config.view.engine });

//use the router


app.use(public_dir(__dirname + "/public"));
var Router = require('koa-router');

var create_token = require('./util.js').token_create;
//var check_token = require('./util.js').token_check();

var default_router = new Router();

//=======================================
//HOME PAGE (containing loging links)
//=======================================

default_router.get('/', function *() {
    this.body = yield render('home.ejs');
});

default_router.get('/ticket/create', function *(){
    var info = this.request.query;
    //check if request is valid
    if (info){
    var token = yield create_token(info);
    this.body = yield render('qr.ejs',{token : token});

} else {
    this.body = "poor try hacker :p , is this the best you can do";
}
})
app.use(default_router.middleware());