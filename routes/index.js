var express = require('express');
var router = express.Router();
var util = require('util');

var temp = {
    username:"meme",
    email_id:"121355@example.com"
};
/**
 * 登陆界面
 */
router.get('/admin', function(req, res, next) {
    res.render('admin');
});

/**
 * 注册界面
 */
router.get('/register', function (req, res, next) {
    res.render('register');
});

// 处理post请求
router.post('/admin_form', function (req, res, next) {
    var body = util.inspect(req.body);
    res.cookie('id','123456',{
        maxAge: 60*1000,
        httpOnly:true,
        signed:true
    });
    res.end(body);
});

router.post('/action_form',function (req, res, next) {
    var body = util.inspect(req.body);
    res.end(body);
})

router.post('/register_form', function (req, res, next) {
    var body =req.body;
    res.cookie('id','000000',{
        maxAge: 3600*1000,
        httpOnly:true,
        signed:true
    });
    res.redirect('home');
});

/**
 * 检查是否登陆
 */
router.use(function (req, res, next) {
    if (req.signedCookies.id == undefined){
        res.redirect('admin');
    }
    next();
});

/* GET home page. */
router.get('/', function (req, res, next) {
    if (req.signedCookies.id){
        res.redirect("home");
    }
});


router.get('/home', function (req, res, next) {
    if (req.signedCookies.id){
        res.render('home',temp)
    }
});

router.get('/read', function (req, res, next) {
    res.render('read', temp)
});

router.get('/receive', function (req, res, next) {

    res.render('receive', temp)
});

router.get('/status', function (req, res, next) {

    res.render('status', temp)
});

router.get('/write', function (req, res, next) {

    res.render('write', temp)
});



module.exports = router;
