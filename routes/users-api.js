const express = require('express');
const router = express.Router();
const userActions = require('../actions/api/user-action');


//get users
router.get('/user', userActions.getAllUsers);

//get user
router.get('/user/:id', userActions.getUser);

//post user
router.post('/user', userActions.saveUser);

//update user
router.patch('/user/:id', userActions.updateUser);

//edit user
router.put('/user/:id', userActions.editUser);

//delete user
router.delete('/user/:id', userActions.deleteUser);

module.exports = router;  
