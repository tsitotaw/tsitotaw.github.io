const {dbConfig} = require('./../constants');
const mysql = require('mysql');
const Todo = require('./../BL/Todo');


const connection = mysql.createConnection({
    host:dbConfig.host,
    user: dbConfig.user,
    password: dbConfig.password,
    database: dbConfig.database
});

const getAllTodo = (req, result) => {
    connection.connect();

    const sql = "select * from todos";
    connection.query(sql, (err, res) => {
        if(err)
            throw new Exception;
        
        result(null, res);
    });
};

module.exports = getAllTodo;