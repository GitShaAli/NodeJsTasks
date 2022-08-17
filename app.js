const http = require('http');

// const routes = require('./routes');

// const server= http.createServer(routes)

// console.log(routes.someText)

const express = require('express');

const app = express();

app.use((req,res,next)=>{
    console.log("In the middleware")
    next();
})

app.use((req,res,next)=>{
    console.log("In the next middleware");
    res.send('<h1> hello to node js </h1>') ;
    // res.send( { key1: "value" })
})
// const server= http.createServer(app)

// server.listen(3000)

app.listen(3000);