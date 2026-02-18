var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('login', { title: 'Express' });
});

exports.postAuth = (req,res,next) => {
    console.log('middleware auth', req.method);
    console.log(req.body.username);
    console.log(req.body.password);
    req.session.isLog=true;
    console.log(req.session.isLog)
    res.redirect('/');
}

module.exports = router;
