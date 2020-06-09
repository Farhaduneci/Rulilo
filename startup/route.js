require('express-async-errors'); // Catch all the errors and call next()
const register = require('../route/register');
const error = require('../middleware/error');
const login = require('../route/login');

module.exports = function(app) {
    app.use('/register', register);
    app.use('/login', login);
    app.use(error);
}