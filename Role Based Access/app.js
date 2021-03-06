const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const passport = require('passport');

//Mongoose config
mongoose.set('useCreateIndex', true);

//Bring in the database object
const config = require('./config/database');

//Connect with the database
mongoose.connect(config.database, {
        useNewUrlParser: true
    })
    .then(() => {
        console.log('Database connected successfully ' + config.database);
    }).catch(err => {
        console.error(err);
    })

const app = express();

// parsing requests
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded());

// defining the middlewares
app.use(cors());

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (request, response) => {
    return response.json({
        message: "This is nodejs Role based authentication system"
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});