var express = require('express');
var router = express.Router();

/* GET logout page. */
router.get('/', function(req, res, next) {
    res.render('logout', { title: 'Logout' });
});


module.exports = router;
