var http = require('http');
var fs = require('fs');

http.createServer((req,res)=>{
fs.readFile('practice.html', (err,data)=>{
    res.writeHead(200 , {'Content-Type':'text/html'});
    res.write(data);
    return res.end();
});
}).listen(4200);

// append Content to existing file , if doesn't exists it created new
fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });


// fs.appendFile() appends specific content to file
// fs.open() open file in writing format with w flat
// fs.writeFile() - replaces existing file

// delete specific file
fs.unlink('mynewfile2.txt', function (err) {
    if (err) throw err;
    console.log('File deleted!');
  });