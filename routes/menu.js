const express = require('express');
const router = express.Router();
const testActions = require('../actions/api/test');

router.get('/', testActions.homepage);

router.post('/', (req, res) => {
    res.send('Got a post request')
});
router.put('/user/:id', (req, res) => {
    res.send(req.params)
});
router.delete('/user/:id', (req, res) => {
    res.send(('Got a delete request at /user'))
});

module.exports = router;