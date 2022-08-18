
const path = require('path');
const rootDir = require('../util/path');

exports.contactPage = (req,res,next)=>{
    res.sendFile(path.join(rootDir, 'views', 'contactUs.html'))
}

exports.onSuccess = (req,res,next)=>{
    res.sendFile(path.join(rootDir, 'views', 'success.html'))
}