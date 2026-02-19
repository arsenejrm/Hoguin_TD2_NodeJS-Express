var express = require('express');
var router = express.Router();

/* GET redirection page. */
router.get('/', function(req, res, next) {
    res.render('redirection', { title: 'Redirection' });
});


module.exports = router;
