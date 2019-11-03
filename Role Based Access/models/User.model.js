const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); // To hash the password
const uniqueVaidator = require('mongoose-unique-validator'); // To seprate users from other users

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    contact: {
        type: String,
        unique: true
    }
});

UserSchema.plugin(uniqueVaidator);

const User = module.exports = mongoose.model('User', UserSchema);