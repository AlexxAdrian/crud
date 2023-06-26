const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    user: String,
    rol: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;