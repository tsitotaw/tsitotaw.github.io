const express = require('express');

const app = express();
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send(`
    <form action="http://localhost:7080/calculate" method="post">
        <fieldset>
            <legend>
                Enter two numbers
            </legend>
            <div>
                <input type="number" name="firstNumber" /><br />
                <input type="number" name="secondNumber" /><br />
                <select name="type"> 
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option value="*">*</option>
                    <option value="/">/</option>
                </select>
                <input type="submit" value="Click" style="width:150px;"/>
            </div>
        </fieldset>
        
    </form>
    `);
});

app.post('/calculate', (req, res) => {
    let params = req.body;

    let result = 0;
    switch(params.type){
        case '+':
            result = Number(params.firstNumber) + Number(params.secondNumber);
            break;
        case '-':
            result = Number(params.firstNumber) - Number(params.secondNumber);
            break;
        case '*':
            result = Number(params.firstNumber) * Number(params.secondNumber);
            break;
        case '/':
            result = Number(params.firstNumber) / Number(params.secondNumber);
            break;
    }
    
    res.send(`
                <h1> The answer is ${result} </h1> 
                <a href="http://localhost:7080"> Another Calculation </a>
            `);
});

app.listen(7080, (req, res) => {
    console.log("Listening on Port 7080.... ");
});