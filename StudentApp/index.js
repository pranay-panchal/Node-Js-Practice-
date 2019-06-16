const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const studentController = require('../StudentApp/src/controller/student.controller');

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({extended: true}));


app.get('/student', studentController.getStudentInfo);
app.get('/student/id/:id', studentController.getStudentById);
app.post('/student', studentController.addStudentInfo);

app.listen(8080);

console.log('Server started on port 8080');

module.exports = app;