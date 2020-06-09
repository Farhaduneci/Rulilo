const router = require('express').Router();
const passport = require('passport');
const notAuthed = require('../middleware/notAuthed');

router.get('/', notAuthed, (req, res) => res.render('login.ejs'));

router.post('/', notAuthed, passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
    })
)

module.exports = router; 