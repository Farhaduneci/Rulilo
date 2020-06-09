const router = require('express').Router();
const passport = require('passport');

router.get('/', (req, res) => res.render('login.ejs'));

router.post('/', passport.authenticate('local', {
    failureRedirect: '/login',
    failureFlash: true
    }),
    (req, res) => res.render('index.ejs', {name: req.user.name })
)

module.exports = router; 