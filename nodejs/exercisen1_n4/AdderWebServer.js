var http = require('http');
var url = require('url');
var fs = require('fs');
var addmod = require('./addmod.js');
http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;
    if (q.pathname == "/add.js")
        addmod.add(req, res, q.query)
    else
        fs.readFile(filename, function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            if (err) {                
                return res.end("404 Not Found");
            }
            res.write(data);
            return res.end();
        });
}).listen(8080);