const express = require('express');
var app=express();
app.use(express.static(__dirname + '/views'));

app.get('/',(req,res)=>{
  res.send({
    name:'Andrew',
    likes:[
      'Bikes',
      'Cities'
    ]
  });
});

app.get('/about',(req,res)=>{
  res.send('About Page');
});

app.get('/bad',(req,res)=>{
  res.send({
    errorMessage:'Unable to handle the request'
  });
});

app.listen(3000,()=>{
  console.log('Server is up on port 3000');
});
/*

const hbs=require('hbs');
var app=express();
app.set('view engine','hbs');


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


home.hbs
<html>
<head>
<meta charset="utf-8">
<title>ABot page</title>
</head>
</body>
<h1>{{pageTitle}}</h1>
<p style="color:blue">{{message}}</p>
<p>hi how are you NodeJs {{currentYear}}</p>
  </body>
  </html>

*/
