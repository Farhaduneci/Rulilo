const app = require('express')();
const passport = require('passport');

app.set('view-engine', 'ejs');

app.get('/', (req, res) => res.render('index.ejs'));

app.get('/register', (req, res) => res.render('register.ejs'));

app.get('/login', (req, res) => res.render('login.ejs'));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));