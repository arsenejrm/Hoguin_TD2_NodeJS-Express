var express = require('express');
var router = express.Router();

/* GET profile page. */
router.get('/', function(req, res, next) {
    if (req.session.isLog) {
        res.render('profile', {
            title: 'Profile',
            email: req.session.email,
            is_session: true
        });
    } else {
        res.redirect('/redirection');
    }
});

module.exports = router;
