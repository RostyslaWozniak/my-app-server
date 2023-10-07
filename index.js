const express = require('express');
const app = express();
const { port } = require('./config');
const menuRouter = require('./routes/api-menu');
const bodyParser = require('body-parser')
//db
require('./db/mongoose');

//parsers (Do odczytu kontentu)
app.use(bodyParser.json());

//routes
app.use('/api', menuRouter);

//server
app.listen(port, () => {
    console.log(`App is listening on port http://localhost:${port}`)
})