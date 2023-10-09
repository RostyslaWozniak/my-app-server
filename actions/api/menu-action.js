const MenuItem = require('../../db/models/menu-model');

class MenuActions {
    
    async getAllMenuItems(req, res){
        try{
            const menu = await MenuItem.find();
            res.status(200).json(menu);
        } catch(err){
            res.status(500).json({message: err.message})
        }
    }
    
    async getMenuItem(req, res){
        try{
            const menuItem = await MenuItem.findById(req.params.id);
            if(menuItem == null){
                return res.status(404).json({message: 'Brak  artykułu z podanym ID'})
            }
            res.status(200).json(menuItem);
        }catch(err){
            res.status(500).json({message: err.message});
        }
    }

    async saveMenuItem(req, res){
        const { name, price, ingredients, category } = req.body;
        const menuItem = new MenuItem({
            name,
            price,
            ingredients,
            category,
        });
        try{
            await menuItem.save();
            res.status(201).send(menuItem);
        }catch(err){
            res.status(422).json({message: err.message})
        }
    }

    async updateMenuItem(req, res){
        const { name, price, ingredients, category } = req.body;
        try{
            const menuItem = await MenuItem.findById(req.params.id);
            if(menuItem == null){
                return res.status(404).json({message: 'Brak  artykułu z podanym ID'})
            }
            menuItem.name = name;
            menuItem.price = price;
            menuItem.ingredients = ingredients;
            menuItem.category = category;
            await menuItem.save();
            res.status(201).json(menuItem);
        }catch(err){
            res.status(500).json({message: err.message});
        }
    }

    async deleteMenuItem(req, res){
        try{
            const menuItem = await MenuItem.findById(req.params.id);
            if(menuItem == null){
                return res.status(404).json({message: 'Brak  artykułu z podanym ID'})
            }
            await menuItem.deleteOne();
            res.status(204).send();
        }catch(err){
            res.status(500).json({ message: err.message })
        }
    }
}
module.exports = new MenuActions();



