var http = require('http');
var dt = require('./myModules');
http.createServer((req,res)=>{
res.writeHead(200,{'Content-Type':'text/html'});
res.write('Current Date and Time is :' + dt.currentDateTime());
res.write(req.url)
res.end('Hello World');
}).listen(4200)