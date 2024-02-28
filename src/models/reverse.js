const mongoose = require('mongoose');

const Reverse = new mongoose.Schema({
    fullName: {
        type: String,
        // required: true,
        description: "The full name of the user."
    },
    username: {
        type: String,
        // required: true,
        description: "The username chosen by the user."
    },
    email: {
        type: String,
        // required: true,
        // unique: true,
        description: "The email address of the user."
    },
    phoneNumber: {
        type: String,
        // required: true,
        description: "The phone number of the user."
    },
    password: {
        type: String,
        // required: true,
        description: "The password chosen by the user."
    },
    confirmPassword: {
        type: String,
        // required: true,
        description: "Confirmation of the password chosen by the user."
    },
    gender: {
        type: String,
        enum: ["Male", "Female", "Other"],
        // required: true,
        description: "The gender of the user."
    }
});

module.exports = mongoose.model('Teverse', Reverse);
