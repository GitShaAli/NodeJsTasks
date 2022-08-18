const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const adminRoute = require('./routes/admin');

const shopRoute = require(`./routes/shop`);

const contactRoute = require(`./routes/contact`);

const path = require('path')





app.use(bodyParser.urlencoded({extended: false}))

app.use(express.static(path.join(__dirname,'public')))

app.use('/admin',adminRoute);
app.use('/shop',shopRoute);
app.use(contactRoute);



app.use((req,res,next)=>{
    // res.status(404).send('<h1>Page not found</h1>')
    res.status(404).sendFile(path.join(__dirname,'views', 'pageNotFound.html'))
})
app.listen(3000);


// const http = require('http');

// const routes = require('./routes');
// const server= http.createServer(routes)

// console.log(routes.someText)

// app.use('/',(req,res,next)=>{
//     console.log("This always runs")
//     next();
// })

// app.use('/add-product',(req,res,next)=>{
//     res.send('<form action="/product" method = "POST"><input type="text" name="title"><input type="text" name="size"><button type="submit">Add Product</button></form>') ;
// })

// app.post('/product',(req,res,next)=>{
//     console.log(`Title : ${req.body.title} &  Size : ${req.body.size}`);
//     res.redirect('/');
// })

