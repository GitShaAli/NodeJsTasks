const http = require('http');
const fs = require('fs');

const server= http.createServer((req,res)=>{
    // console.log(req.url,req.method,req.headers);
    res.setHeader('Content-Type','text/html');
    const method = req.method;
    if(req.url=='/'){

        res.write('<html>')
        res.write('<head><title>First Page</title></head>')
        const msg = fs.readFileSync('./message.txt', 'utf8');
        res.write(`<body><form action="/message" method="POST"><p style="color:red;">${msg}</p><input type="text" name="message"><button type="submit">Send</button></form></body>`)
        res.write('</html>')
        return res.end();
    }
    if(req.url=='/message' && method=="POST"){
        const body = [];
        req.on('data',(chunk)=>{
            console.log(chunk);
            body.push(chunk);
        })
        return req.on('end',()=>{
            const parseBody = Buffer.concat(body).toString();
            const message = parseBody.split('=')[1];
            fs.writeFile('message.txt',message,err=>{
                res.statusCode = 302;
                res.setHeader('Location','/');
                return res.end();
            });
        })
    }
    
        res.write('<html>')
        res.write('<head><title>First Page</title></head>')
        res.write(`<body><h1>Welcome to main Page</h1></body>`)
        res.write('</html>')
        res.end();
});

server.listen(3000)