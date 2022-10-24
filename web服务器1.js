const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer();

server.on('request',(req,res) => {
    const url = req.url;
    let fpath = '';
    if(url === '/')
        fpath = path.join(__dirname,'./index.html');
    else
        fpath = path.join(__dirname,url);
    // res.setHeader('Content-Type','text/html;charset=utf-8');
    fs.readFile(fpath,'utf8',(err,dataStr) => {
        if(err){
            return res.end('404 Not found');
        }
        res.end(dataStr);
    })
})

server.listen(8888,() => {
    console.log('server run at http://192.168.43.169');
})