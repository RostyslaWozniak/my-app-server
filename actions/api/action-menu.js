const Menu = require('../../db/models/model-menu');

module.exports = {
    saveMenu(req, res){
        res.send('Strona główna działa');
        const newMenu = new Menu({
            name: "Pierogi ruskie",
            price: 12.99,
            ingredients: "Z ziemniakami i koperkiem",
            category: "obiad",
        });
        newMenu.save().then(() => {
            console.log('Zostało zapisane')
        });
    }
}