const mongoose = require('mongoose');

const OrderShcema = new mongoose.Schema({
    userName: String, 
    order: [], 
    date: String,
    isOrderCompleted: Boolean, 
    totalPrice: String, 
});

module.exports = mongoose.model('Order', OrderShcema);