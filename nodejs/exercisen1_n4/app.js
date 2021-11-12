const http = require('http');
const myDate = require('./myModule');


http.createServer((req,res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });

    res.write('<h1>Hello Word </h1>');
    res.write("The date and time are currently: " + myDate.myDate());
    
    
    res.write(req.url);
    res.end();

}).listen(8080, ()=> {
    console.log("listening to request on port 8080");
});