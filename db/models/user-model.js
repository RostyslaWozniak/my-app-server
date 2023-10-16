const mongoose = require('mongoose');

const UserShcema = new mongoose.Schema({
    name: { type: String, required: true },
    password: { type: String, required: true },
    isUserLogged: Boolean,
    order: [],
    isOrderSended: Boolean,    
});

module.exports = mongoose.model('User', UserShcema);

