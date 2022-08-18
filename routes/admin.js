const path = require('path');

const express = require('express');

const router = express.Router();

const rootDir = require('../util/path');

router.get('/add-product',(req,res,next)=>{
    // res.send('<form action="/admin/add-product" method = "POST"><input type="text" name="title"><input type="text" name="size"><button type="submit">Add Product</button></form>') ;
    res.sendFile(path.join(rootDir, 'views', 'addProduct.html'))
})

router.post('/add-product',(req,res,next)=>{
    console.log(`Title : ${req.body.title} &  Size : ${req.body.size}`);
    res.redirect('/shop/');
})

module.exports = router;