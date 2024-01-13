const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const app = express();

dotenv.config({path: './config.env'});

require('./db/conn');

// const User = require('./model/userSchema');

app.use(express.json()); // Json karke jo bhi data usko object me convert kar do


//We make the router file to make our route easy
app.use(require('./router/auth'));

// const DB = process.env.DATABASE;
const PORT = process.env.PORT;
//Middleware
const middleware = (req,res,next) =>{
    console.log("Hello my Middleware");
    next();
}



app.get('/',(req,res) => {
    res.send(`Hello world from the server`);
});

app.get('/about',middleware,(req,res) => {
    res.send(`Hello about world from the server`);
});

app.get('/contact',(req,res) => {
    res.send(`Hello contact world from the server`);
});

app.get('/signin',(req,res) => {
    res.send(`Hello signin world from the server`);
});

app.get('/signup',(req,res) => {
    res.send(`Hello signup world from the server`);
});


app.listen(PORT,()=>{
    console.log(`Server: ${PORT}`);
});