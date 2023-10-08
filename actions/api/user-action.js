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

    async saveUser(req, res){
        const { name, password } = req.body;
        const user = new User({
            name,
            password,
        })
        try{
            await user.save();
            res.status(200).send('save user')
        }catch(err){
            res.status(404).json({message: err.message})
        }
        
    }

    async updateUser(req, res){
        
        res.send('update user')
    }

    async deleteUser(req, res){
        
        res.send('delete user')
    }
}
module.exports = new UserActions();