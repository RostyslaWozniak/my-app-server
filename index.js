const express = require('express');
const app = express();
const { port } = require('./config');
const menuRouter = require('./routes/api-menu');
const userRouter = require('./routes/users-api');
const bodyParser = require('body-parser');
const cors = require('cors');
//db
require('./db/mongoose');

//parsers (Do odczytu kontentu)
app.use(bodyParser.json());

//fix cors
app.use(cors());
//routes menu
app.use('/api', menuRouter);

//routes users
app.use('/api', userRouter);

//server
app.listen(port, () => {
    console.log(`App is listening on port http://localhost:${port}`)
})