/**
 * what we need here
 *      - rest endpoint with one get route with a parameter of text
 *          - whenever a request comes, it will communicate with mysql and execute the get query
*           - format the response to a JSON and respond back to a caller
            - a promise will be returned, then resolved

            a server to listen to a request
            a one route request reciever
            a call to mysql for dataa
            map response to json
            return back to caller
 * 
 * 
 */

const express = require('express'); 
const cors = require('cors');
const Entry = require('./Entry');

const port = 8001;

const app = express();

app.use(cors());


app.get('/', (req, res) => {
    res.json({
        message: 'Hello World'
    });
});

app.get('/entry/:word', (req, res) => {
     
    let word = req.params.word;
    Entry.findByWord(word, (err, data) => {
        if(err){
            res.status(404).send(err);
        }
        else {
            res.send(data);
        }
    });
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
