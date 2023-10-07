const express = require('express');
const app = express();
const { port } = require('./config');
const menuRouter = require('./routes/menu');

//routes
app.use('/', menuRouter)

//server
app.listen(port, () => {
    console.log(`App is listening on port http://localhost:${port}`)
})