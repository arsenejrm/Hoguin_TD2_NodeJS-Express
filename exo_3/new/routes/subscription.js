var express = require('express');
var router = express.Router();

/* GET subscription page. */
router.get('/', function(req, res, next) {
    res.render('subscription', { title: 'Subscription' });
});

module.exports = router;
