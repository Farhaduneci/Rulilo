const {User, validate} = require('../model/user');
const router = require('express').Router();
const bcrypt = require('bcrypt');

router.get('/', (req, res) => res.render('register.ejs'));

router.post('/', async (req, res) => {
    res.send(req.body)
});

module.exports = router; 