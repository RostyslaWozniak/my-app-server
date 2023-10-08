const mongoose = require('mongoose');

const MenuItemShcema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    ingredients: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Menu', MenuItemShcema);

