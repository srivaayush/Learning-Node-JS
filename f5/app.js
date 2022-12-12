
const express = require('express');
const bodyparser =require('body-parser');


const app=express();


app.use(bodyparser.urlencoded({extended:false}));

app.post('/',(req,res, next)=>{
    console.log('This always runs!');
    next();
});

app.use('/add-product',(req,res, next)=>{
    
    res.send('<form action ="/product" method ="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
    // Allows request to continue to next middleware in line
    // next();
});

app.use('/product',(req,res, next)=>{
    console.log(req.body);
    res.redirect('/');
});


app.use('/',(req,res, next)=>{
    // console.log('In another middleware');
    res.send('<h1>Hello From Express!!</h1>');
});
// const server = http.createServer(app);

// server.listen(3000);
app.listen(3000);
