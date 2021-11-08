const express = require('express');
const router = express.Router();
const todoController = require('./../Controller/TodoController');


router.get('/', (req, res) => {
    let todos = [];
    todoController.getAllTodo((req, result) => {
        todos = result;
        res.send(todos);
    });    
});
router.get('/:id', (req, res) => {
    res.send("Hello Get By Id");
});
router.post('/', (req, res) => {
    res.send("Hello POST");
});
router.put('/', (req, res) => {
    res.send("Hello PUT");
});
router.delete('/', (req, res) => {
    res.send("Hello Delete");
});

module.exports = router;