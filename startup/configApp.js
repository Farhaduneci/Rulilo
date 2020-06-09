const session = require('express-session');
const flash = require('express-flash');
const express = require('express');
require('dotenv').config();

module.exports = function (app, passport) {
    app.set('view-engine', 'ejs');
    app.use(express.urlencoded({ extended: false }));
    app.use(flash());
    app.use(session({
        secret: process.env.SESSION_SECRET,
        resave: false, saveUninitialized: false
    }))
    app.use(passport.initialize());
    app.use(passport.session());    
}