const express = require('express');
const router = express.Router();
const ordersActions = require('../actions/api/order-actions');


//get orders
router.get('/order', ordersActions.getOrders);

//post order
router.post('/order', ordersActions.postOrder);

//patch order
router.patch('/order/:id', ordersActions.patchOrder);

//delete order
router.delete('/order/:id', ordersActions.deleteOrder)

module.exports = router;