const express = require('express');
const router = express.Router();
const userActions = require('../actions/api/user-action');


//get users
router.get('/user', userActions.getAllUsers);

//post user
router.post('/user', userActions.saveUser);

//edit user
router.put('/user/:id', userActions.updateUser);

//delete user
router.delete('/user/:id', userActions.deleteUser);

module.exports = router;