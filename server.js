const session = require('express-session');
const flash = require('express-flash');
const passport = require('passport');
const express = require('express');
require('dotenv').config();
const app = express();

app.set('view-engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(flash());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false, saveUninitialized: false
}))
app.use(passport.initialize());
app.use(passport.session());

require('./startup/database')();
require('./passport-config')(passport);
require('./startup/route')(app);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));