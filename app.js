//const http  =  require('http');
const express =  require('express')
const bodyParser =  require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({extended:false}))

app.use('/add-product',(req,res,next)=>{
    //console.log('in the another middleware');
    //res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit"> Add Product</button></form>');
    res.send('<form action="/product" method="POST"><input type="text" name="title"><input type="number" name="size"><button type="submit"> Add Product</button></form>');

});

app.use('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');

})
app.use('/',(req,res,next)=>{
    //console.log('in second middleware');
    res.send('<h1>Hello To Node js</h1>')
   


})

/*const server = http.createServer(app);
server.listen(3000)*/
app.listen(3000)