const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true,
        index: true
    },
    mobile: {
        type: Number,
        required: false
    },
    password: {
        type: String,
        required: true
    },
    verified: {
        email: {
            type: Boolean
        },
        mobile: {
            type: Boolean
        }
    },
    address: {
        pincode: {
            type: Number,
        },
        state: {
            type: String
            // will be from enums
        },
        city: {
            type: String
        },
        area: {
            type: String
        },
        landmark: {
            type: String
        }
    }
});

module.exports = mongoose.model('User', UserSchema);