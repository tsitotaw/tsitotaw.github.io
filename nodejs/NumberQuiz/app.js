const url = require('url');
const constants = require('./Config/Constants');
let express = require('express');
let app = express();
app.set('view engine','pug')
app.use(express.urlencoded());
app.get('/', function (req, res) {
    let i = isNaN(parseInt(req.query.index)) ? 0 : req.query.index;
    let score = isNaN(parseInt(req.query.score)) ? 0 : req.query.score;    
    if(i<5)
        res.render('quiz',{ score:score, index:i,question:constants.QUESTIONS[i]}); 
    else
        res.render('result',{points:parseInt(score)})
});

app.post("/sumbit",(req,res)=>{
    let score = isNaN(parseInt(req.body.score)) ? 0 : parseInt(req.body.score);
    let index = isNaN(parseInt(req.body.index)) ? 0 : parseInt(req.body.index);

    if(isNaN(parseInt(req.body.index))){
        req.body.index = "0";
    }
    if(parseInt(req.body.useranswer) === parseInt(constants.ANSWERS[index])){
        score++;
    }
    
    index ++;
    res.redirect(url.format({
        pathname:"/",
        query: { "index": index, "score": score++ }
      }));
});

app.get('/back', function (req, res) {
    res.redirect(url.format({
        pathname:"/",
        query: {
           "index": 0,
           "score": 0
         }
      }));
});

app.listen(constants.PORT, ()=> {
    console.log(`Server is litening to http://localhost:${constants.PORT} ....`);
});