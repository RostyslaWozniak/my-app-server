const express = require('express');
const menuActions = require('../actions/api/menu-action');

const router = express.Router();

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