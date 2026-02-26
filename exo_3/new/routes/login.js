var express = require('express');
var User = require('../controllers/userController.js')
const req = require("express/lib/request");
var router = express.Router();

/* GET home page. */

router.get('/', function (req, res, next) {
    res.render('login', {title: 'Login'});
});

router.post('/', async (req, res, next) => {
    var data = req.body;
    var auth_result = await User.authUser(data.email, data.mdp);
    switch (auth_result) {
        case 0:
            req.session.isLog = true;
            req.session.email = data.email;
            res.redirect('/profile');
            break;
        case 1:
            res.render('login', {title: 'login', error: 1});
            break;
        case 2:
            res.render('login', {title: 'login', error: 2});
            break;
        case 3:
            res.render('login', {title: 'login', error: 3});
            break;
        default:
            console.log("CPT dans login.js");
    }
});


module.exports = router;
