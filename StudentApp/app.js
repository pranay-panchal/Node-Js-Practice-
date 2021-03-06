const express = require('express');
const app = express();
const studentRoutes = require('./src/api/student');
const path = require('path');

app.use(express.text());
app.use(express.json());
app.use(express.urlencoded());

app.use('/admin', studentRoutes);

app.use('/', (req, res, error) => {
    if (error) {
        // res.sendFile(path.join(__dirname, 'views', '../', 'notFound.html'));
        res.status(500).json({
            sucess: false,
            message: 'Oops Something went wrong!'
        });
    }
});

app.listen(8080, (error) => {
    if(error) {
        console.log('error starting the server');
    } else {
        console.log('Listening to requests on port 8080...')
    }
});


module.exports = app;