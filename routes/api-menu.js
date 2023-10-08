const express = require('express');
const router = express.Router();
const menuActions = require('../actions/api/action-menu');


//get menu items
router.get('/menu_items', menuActions.getAllMenuItems);

//get menu item
router.get('/menu_items/:id', menuActions.getMenuItem);

//post menu item
router.post('/menu_items', menuActions.saveMenuItem);

//edit menu item
router.put('/menu_items/:id', menuActions.updateMenuItem);

//delete menu item
router.delete('/menu_items/:id', menuActions.deleteMenuItem);

module.exports = router;