var express = require('express');
var router = express.Router();

/* GET tab_bord page. */
router.get('/', function(req, res, next) {
    res.render('tab_bord', { title: 'Express' });
});


module.exports = router;
