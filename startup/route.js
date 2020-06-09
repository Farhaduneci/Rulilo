require('express-async-errors'); // Catch all the errors and call next()
const error = require('../middleware/error');
const register = require('../route/register');
const login = require('../route/login');
const index = require('../route/index');
const logout = require('../route/logout');

module.exports = function(app) {
    app.use('/register', register);
    app.use('/login', login);
    app.use('/logout', logout);
    app.use('/', index);
    app.use(error);
}