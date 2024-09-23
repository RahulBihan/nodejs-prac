var http = require('http');
var url = require('url');
var dt = require('./myModules');
var dt = require('./myModules');
http.createServer((req,res)=>{
res.writeHead(200,{'Content-Type':'text/html'});
res.write('Current Date and Time is :' + dt.currentDateTime());
var q = url.parse(req.url , true).query;
var text = q.year + ' ' + q.month;
res.end(text);
}).listen(4200)