const http = require('http');

const server= http.createServer((req,res)=>{
    console.log(req.url,req.method,req.headers);
    let str = '';
    if(req.url=='/home')    str='Welcome home';
    else if(req.url=='/about')    str='Welcome to About Us page';
    else if(req.url=='/node')    str='Welcome to my Node Js project';
    else                    str='Welcome to main Page';
    res.setHeader('Content-Type','text/html');
    res.write('<html>')
    res.write('<head><title>First Page</title></head>')
    res.write(`<body><h1>${str}</h1></body>`)
    res.write('</html>')
    res.end();
});

server.listen(4000)