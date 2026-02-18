var express = require('express');
var router = express.Router();
var path = require("path")

/* GET home page. */
router.get('/', function(req, res, next) {
  if (req.session.isLog) {
    res.render('index', { title: 'Express', is_session: 'yes'});
  } else {
    res.render('index', { title: 'Express', is_session: 'no'});
  }
});
/* GET home page. */
router.get('/index', function(req, res, next) {
  if (req.session.isLog) {
    res.render('index', { title: 'Express', is_session: 'yes'});
  } else {
    res.render('index', { title: 'Express', is_session: 'no'});
  }
});

module.exports = router;
