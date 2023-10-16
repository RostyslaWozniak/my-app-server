const User = require('../../db/models/user-model');

class UserActions {

    async getAllUsers(req, res){
        try{
            const users = await User.find();
            res.status(200).json(users);
        } catch(err){
            res.status(500).json({message: err.message})
        }
    }

    async getUser(req, res){
        try{
            const user = await User.findById(req.params.id);
            res.status(200).json(user);
        } catch(err){
            res.status(404).json({message: "Brak użutkownika z podanym ID"})
        }
    }
   
    async saveUser(req, res){
        const { name, password, isUserLogged } = req.body;
        const user = new User({
            name,
            password,
            isUserLogged,
            order: [], 
            isOrderSended: false,
        })
        try{
            await user.save();
            res.status(200).send(user)
        }catch(err){
            res.status(404).json({message: err.message})
        }
    }

    async updateUser(req, res){
        const { name, password, isUserLogged, order, isOrderSended } = req.body;
        try{
            const user = await User.findById(req.params.id);
            if(user == null){
                return res.status(404).json({message: 'Brak  użytkownika z podanym ID'})
            }
            user.name = name ?? user.name;
            user.password = password ?? user.password;
            user.isUserLogged = isUserLogged ?? user.isUserLogged;
            user.order = order ?? user.order;
            user.isOrderSended = isOrderSended ?? user.isOrderSended;
            await user.save();
            res.status(201).json(user);
        }catch(err){
            res.status(500).json({message: err.message});
        }
    }

    async editUser(req, res){
        const { name, password, isUserLogged, order, isOrderSended } = req.body;
        try{
            const user = await User.findById(req.params.id);
            if(user == null){
                return res.status(404).json({message: 'Brak  użytkownika z podanym ID'})
            }   
            user.name = name ?? user.name;
            user.password = password ?? user.password;
            user.isUserLogged = isUserLogged ?? user.isUserLogged;
            user.order = order ?? user.order;
            user.isOrderSended = isOrderSended ?? user.isOrderSended;
                
            await user.save();
            res.status(201).json(user);
        }catch(err){
                res.status(500).json({message: err.message});
        }
    }

    async deleteUser(req, res){
        
        res.send('delete user')
    }
}
module.exports = new UserActions();