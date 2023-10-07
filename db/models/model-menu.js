const mongoose = require('mongoose');


const Menu = mongoose.model('Menu', {
    name: String,
    price: Number,
    ingredients: String,
    category: String,
});

module.exports = Menu;

