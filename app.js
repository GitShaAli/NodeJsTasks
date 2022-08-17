const http = require('http');

// const routes = require('./routes');

// const server= http.createServer(routes)

// console.log(routes.someText)

// app.use('/',(req,res,next)=>{
//     console.log("This always runs")
//     next();
// })

const express = require('express');
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.urlencoded({extended: false}))

app.use('/add-product',(req,res,next)=>{
    res.send('<form action="/product" method = "POST"><input type="text" name="title"><input type="text" name="size"><button type="submit">Add Product</button></form>') ;
})

app.post('/product',(req,res,next)=>{
    console.log(`Title : ${req.body.title} &  Size : ${req.body.size}`);
    res.redirect('/');
})

app.use('/',(req,res,next)=>{
    res.send('<h1> hello to node js </h1>') ;
})


app.listen(3000);