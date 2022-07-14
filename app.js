const express=require('express');

const app = express();
const bodyParser = require('body-parser');
const loginRoute=require('./group/login')
const messageRoute = require('./group/message')

app.use(bodyParser.urlencoded({ extended:false}))

app.use(loginRoute)
app.use(messageRoute)
app.listen(3000)

