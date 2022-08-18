const path = require('path');

const express = require('express');

const router = express.Router();

const rootDir = require('../util/path');

router.get('/',(req,res,next)=>{
    // res.send('<h1> Shop Page </h1>') ;
    res.sendFile(path.join(rootDir, 'views', 'shop.html'))
})

module.exports = router;