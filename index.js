const express = require('express');
const app = express();
const { port } = require('./config');
const menuRouter = require('./routes/api-menu');
//db
require('./db/mongoose');
//routes
app.use('/', menuRouter);

//server
app.listen(port, () => {
    console.log(`App is listening on port http://localhost:${port}`)
})