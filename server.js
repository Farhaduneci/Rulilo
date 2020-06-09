const express = require('express');
const app = express();

app.set('view-engine', 'ejs');
app.use(express.urlencoded({ extended: false }));

require('./startup/database')();
require('./startup/route')(app);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));