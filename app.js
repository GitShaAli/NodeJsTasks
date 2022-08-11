const http = require('http');
const fs = require('fs');

const server= http.createServer((req,res)=>{
    // console.log(req.url,req.method,req.headers);
    res.setHeader('Content-Type','text/html');
    const method = req.method;
    if(req.url=='/'){
        res.write('<html>')
        res.write('<head><title>First Page</title></head>')
        res.write(`<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>`)
        res.write('</html>')
        return res.end();
    }
    if(req.url=='/message' && method=="POST"){
        fs.writeFileSync('message.txt','DUMMY');
        res.statusCode = 302;
        res.setHeader('Location','/');
        return res.end();
    }
    
        res.write('<html>')
        res.write('<head><title>First Page</title></head>')
        res.write(`<body><h1>Welcome to main Page</h1></body>`)
        res.write('</html>')
        res.end();
});

server.listen(3000)