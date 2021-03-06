const express = require('express');
const hbs=require('hbs');
var app=express();
app.set('view engine','hbs');
app.use(express.static(__dirname + '/views'));


app.get('/',(req,res)=>
 {
  res.render('home.hbs',{
  pageTitle:'Home--Page',
  message:'welcome to my website',
  currentYear:new Date().getFullYear()
});
});

app.get('/about',(req,res)=>
 {
  res.render('about.hbs',{
  pageTitle:'About--Page',
  message:'welcome to my website',
  currentYear:new Date().getFullYear()
});
});

app.listen(3000,()=>{
  console.log('Server is up on port 3000');
});
