const router = require('express').Router();
const authed = require('../middleware/authed');

router.get('/', authed, (req, res) => res.render('index.ejs', { user: req.user }));

module.exports = router;