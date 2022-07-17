const path = require('path');

const express  =  require('express');

const rootDir = require('../util/path')

const router =  express.Router();

/*router.get('/',(req,res,next)=>{
  
    res.send('<h1>Hello To Node js</h1>'
        
        );

});*/


/*router.get('/add-product',(req,res,next)=>{
  
    res.send(
        '<form action="/shop/add-product" method="POST"><input type="text " name="title"><button type="submit"> Add Product</button></form>'
        );

});

router.post('/add-product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/shop');

});

router.get('/',(req,res,next)=>{
    res.send('<h1>Hello To Node js</h1>')
})*/

router.get('/',(req,res,next)=>{
  
    res.sendFile(path.join(rootDir,'views','shop.html'))

});

module.exports= router;