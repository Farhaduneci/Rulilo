const {User, validate} = require('../model/user');
const router = require('express').Router();
const bcrypt = require('bcrypt');
const notAuthed = require('../middleware/notAuthed');

router.get('/', notAuthed, (req, res) => res.render('register.ejs'));

router.post('/', notAuthed, async (req, res) => {
    const { error } = validate(req.body); 
    if (error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({ email: req.body.email });
    if (user) return res.status(400).send('User already registered.');

    user = new User(req.body);
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();

    res.redirect('/login');
});

module.exports = router; 