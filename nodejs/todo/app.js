const express = require('express');
const constants = require('./constants');
const todoRouter = require('./routes/todoRoute');

const app = express();
/* we need to build a rest api for our todo

    -   we need to install mysql
    -   we need to define our model
    -   we need routes
    -   setup database table
    -   setup db connection

*/

app.use('/todos', todoRouter)

app.listen(constants.port, (req, res) => {
    console.log(`Server listening @ port ${constants.port}`);
});