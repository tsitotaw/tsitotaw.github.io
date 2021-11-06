const sql = require("./db");

const Entry = function(entry){
    this.word = entry.word;
    this.wordtype = entry.wordtype;
    this.definition = entry.definition;
};

Entry.findByWord = (word, result) => {
    sql.query(`SELECT * FROM entries WHERE word = '${word}'`, (err, res) => {
        if(err){
            console.error(err);
            result(err, null);
            return;
        }
        result(null, res);
    });
};

module.exports = Entry;