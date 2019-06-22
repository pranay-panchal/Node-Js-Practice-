const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const studentRoutes = require('./src/routes/student');

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(studentRoutes);

app.use('/', (req, res, error) => {
    if (error) {
        res.status(500).json({
            sucess: false,
            message: 'Oops Something went wrong!'
        });
    }
});

app.listen(8080);

console.log('Server started on port 8080');

module.exports = app;