var express = require('express');
var User = require('../model/modelUsers.js')
const req = require("express/lib/request");
var router = express.Router();

/* GET home page. */

router.get('/', function (req, res, next) {
    res.render('login', {title: 'Login'});
});

router.post('/', async (req, res, next) => {
    var data = req.body;
    if (data.email !== undefined && data.mdp !== undefined && data.email !== "" && data.mdp !== "") {
        var user_result = await User.getUserData({"email": data.email});
        if (user_result !== null && user_result[0].email === data.email && user_result[0].mdp === data.mdp) {
            req.session.isLog = true;
            req.session.email = data.email;
        }
        res.redirect('/profile');
    }
});


module.exports = router;
