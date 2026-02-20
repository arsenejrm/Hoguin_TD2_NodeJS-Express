var express = require('express');
var User = require("../model/modelUsers")
var router = express.Router();

/* GET signup page. */
router.get('/', function(req, res, next) {
    res.render('signup', { title: 'Signup' });
});

router.post('/', async (req,res,next) => {
    var error = "";
    var data = req.body;
    console.log(data.email);
    console.log(data.mdp);
    console.log(data.re_mdp);
    if (data.email !== undefined && data.mdp !== undefined && data.re_mdp !== undefined && data.email !== "" && data.mdp !== "" && data.re_mdp !== "") {
        if (data.mdp !== data.re_mdp) {
            var user_data = await User.getUserData({email: data.email})
            if (user_data === []) {
                const user = new User.User({email: data.email, mdp: data.mdp});
                user.save()
                    .then((result) => { console.log("ok")})
                    .catch((err) => {console.log("erreur")});
            } else {
                error = "not_free";
            }
        } else {
            error = "meme_mdp";
        }
    } else {
        error = "missing";
        console.log("y a pas tout");
    }
    if (error !== "") {
        res.redirect(url.format({
            pathname:"/signup",
            query: {
                "error": error
            }
        }));
    }
});

module.exports = router;
