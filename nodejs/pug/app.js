const express = require('express');
const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index', {'title': "My First Pug Template Using express"});
});

app.listen(9000, ()=> {
    console.log("express server listening @ 1000 ...");
});