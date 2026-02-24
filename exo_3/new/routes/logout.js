var express = require('express');
var session = require("express-session");
var router = express.Router();

/* GET logout page. */
router.get('/', function(req, res, next) {
    req.session.destroy();
    res.render('logout', { title: 'Logout' });
});


module.exports = router;
