var express = require('express');
var router = express.Router();

/* GET subscription page. */
router.get('/', function(req, res, next) {
    if (req.session.isLog) {
        res.render('subscription', {
            title: 'Subscription',
            is_session: true
        });
    } else {
        res.redirect('/redirection');
    }
});

module.exports = router;
