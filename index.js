const express = require('express');
const { port } = require('./config');
const menuRouter = require('./routes/menu-api');
const userRouter = require('./routes/users-api');
const ordersRouter = require('./routes/orders-api');
const bodyParser = require('body-parser');
const cors = require('cors');
//db
require('./db/mongoose');
 
const app = express();

//parsers (Do odczytu kontentu)
app.use(bodyParser.json());

//fix cors
app.use(cors());
//routes menu
app.use('/api', menuRouter);

//routes users
app.use('/api', userRouter);

app.use('/api', ordersRouter);
 

//server
app.listen(port, () => {
    console.log(`App is listening on port http://localhost:${port}`)
});