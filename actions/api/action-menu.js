const Menu = require('../../db/models/model-menu');

class MenuActions {
    getAllMenuItems(req, res){
        res.send('Api działa');
    }
    getMenuItem(req, res){
        res.send(`info o menu ${req.params.id}`);
    }
    saveMenuItem(req, res){
        
        // const newMenu = new Menu({
        //     name: "Pierogi ruskie",
        //     price: 12.99,
        //     ingredients: "Z ziemniakami i koperkiem",
        //     category: "obiad",
        // });
        // newMenu.save().then(() => {
        //     console.log('Zostało zapisane')
        // });
        const { name, price, ingredients, category } = req.body;
        const info = `Nazwa: ${name}, cena: ${price}`
        res.send(info);


    }
    updateMenuItem(req, res){
        res.send(`${req.params.id} updated`);
    }
    deleteMenuItem(req, res){
        res.send(`${req.params.id} deleted`);
    }
    
}
module.exports = new MenuActions();