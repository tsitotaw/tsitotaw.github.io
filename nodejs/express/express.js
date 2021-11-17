const express=require('express');
const app=express();

app.set('view engine','pug');
//app.use(express.static("public"))
app.use(express.urlencoded({extended:true}))

const userRouter=require('./routes/users')
app.use('/users',userRouter)


app.get('/',function(req,res){

   res.render('add');

});


//function logger(req,res,next){
//console.log(req.originalUrl)
//nextX()

//}
app.listen(3000);

/*
app.post('/result', urlencodedParser, function (req, res) {

var num1 = parseInt(req.body.num1)

var num2 = parseInt(req.body.num2)

var op = req.body.operation;

var result;

if (op == "add") result = (num1 + num2).toString();

if (op == "substract") result = (num1 - num2).toString();

if (op == "divide") result = (num1 / num2).toString();

if (op == "multiply") result = (num1 * num2).toString();

res.send("The answer is: "+result);

});



app.listen(port, function () {

console.log('Successfully started Simple Calculator App !')

})

*/