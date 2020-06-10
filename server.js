const passport = require('passport');
const express = require('express');
const app = express();

require('./startup/configApp')(app, passport);
require('./startup/database')();
require('./startup/passport')(passport);
require('./startup/route')(app);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));