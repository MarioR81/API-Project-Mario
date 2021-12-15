const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    birthdate: {
        type: Date
    },
    joinDate: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('Users', UserSchema);