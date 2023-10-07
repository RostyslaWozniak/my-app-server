const express = require('express');
const router = express.Router();
const menuActions = require('../actions/api/action-menu');

router.get('/', menuActions.saveMenu);



module.exports = router;