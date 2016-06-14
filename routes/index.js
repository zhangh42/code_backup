var express = require('express');
var router = express.Router();
var util = require('util');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.redirect('admin');
});

router.get('/admin', function(req, res, next) {
    res.render('admin');
});

router.get('/register', function (req, res, next) {
    res.render('register')
});

router.get('/home', function (req, res, next) {

    res.render('home', {})
});

router.get('/read', function (req, res, next) {

    res.render('read', {})
});

router.get('/receive', function (req, res, next) {

    res.render('receive', {})
});

router.get('/status', function (req, res, next) {

    res.render('status', {})
});

router.get('/write', function (req, res, next) {

    res.render('write', {})
});

// 处理post请求
router.post('/admin_form', function (req, res, next) {
    var body = util.inspect(req.body);
    res.end(body);
});

router.post('/register_form', function (req, res, next) {
    var body =req.body;
    console.log(typeof (body));
    res.render('home',body);
});

module.exports = router;
