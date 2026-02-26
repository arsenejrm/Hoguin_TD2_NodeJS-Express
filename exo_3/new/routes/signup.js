var express = require('express');
var User = require("../controllers/userController")
var router = express.Router();
var url = require("url");

/* GET signup page. */
router.get('/', function(req, res, next) {
    res.render('signup', { title: 'Signup' });
});

router.post('/', async (req,res,next) => {
    var error = "";
    var data = req.body;
    var creation_result = await User.createUser(data.email, data.mdp, data.re_mdp);
    switch (creation_result) {
        case 0:
            res.redirect("/login");
            break;
        case 1:
            res.render('signup', {title: 'signup', error: 1});
            break;
        case 2:
            res.render('signup', {title: 'signup', error: 2});
            break;
        case 3:
            res.render('signup', {title: 'signup', error: 3});
            break;
        case 4:
            res.render('signup', {title: 'signup', error: 4});
            break;
        default:
            res.redirect("/signup");

    }
});

module.exports = router;
