const express = require('express');

const Entry = require('./BusinessLayer/word');
const path = require('path');
const constants = require('./Config/Constants');

const app = express();

app.use(express.static('public'));
app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname + '/public/dict.html'));
});

app.get('/entry/:word?', (req, res, next) => {
    let word = req.params.word;
    if (word) {
        Entry.findByWord(word, (err, data) => {
            if (err) {
                res.status(404).send(err);
            }
            else {
                res.send(data);
            }
        });
    }
    else{
        res.send([]);
        next();
    }
});

app.listen(constants.PORT, () => {
    console.log(`Server is listening on port ${constants.PORT}`);
});
