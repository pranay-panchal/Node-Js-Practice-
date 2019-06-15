const express = require('express')
const app = express();
const bodyParser = require('body-parser');
app.listen(8080);

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({extended: true}));

console.log('Server started on port 8080');

app.get('/student');

module.exports = app;