//const http  =  require('http');
const express =  require('express')
const app = express();

app.use((req,res,next)=>{
    console.log('in the middleware');
    next();

})
app.use((req,res,next)=>{
    console.log('in second middleware');
    res.send('<h1>hello to node js</h1>')
    //res.send( { key1: value })


})

/*const server = http.createServer(app);
server.listen(3000)*/
app.listen(3000)