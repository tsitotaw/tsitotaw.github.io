const todoRepository = require('./../DAL/repository');

const getAllTodo = () => {
    return todoRepository.getAllTodo();
};

module.exports = getAllTodo;