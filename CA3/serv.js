
const express = require('express');
var app = express();
const hbs  =require('hbs');



hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine','hbs');


app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () =>{
	return new Date().getFullYear()
});

hbs.registerHelper('screamIt', (text) =>{
	return text.toUpperCase();
});


	app.get('/',(req,res)=>{

			res.render('home.hbs',{
		pageTitle:'Home Page',
		welcomeMessage:'Welcome to the homepage',

});
});




app.get('/about',(req,res)=>{

			res.render('about.hbs',{
		pageTitle:'About Page',


});
	});

	app.get('/contact',(req,res)=>{

				res.render('contact.hbs',{
			pageTitle:'Contact Page',


	});
		});


		app.get('/login',(req,res)=>{

					res.render('login.hbs',{
				pageTitle:'Login Page',


		});
			});



app.get('/error',(req,res)=>{

			res.render('error.hbs',{
		pageTitle:'An Error Had been occured',


});
	});


app.listen(3000);
