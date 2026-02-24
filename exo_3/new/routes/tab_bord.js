var express = require('express');
var router = express.Router();

/* GET tab_bord page. */
router.get('/', function(req, res, next) {
    if (req.session.isLog) {
        res.render('tab_bord', {
            title: 'Tab_bord',
            is_session: true
        });
    } else {
        res.redirect('/redirection');
    }
});


module.exports = router;
