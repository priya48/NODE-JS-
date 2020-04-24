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
app.get('/mca',(req,res)=>{
			res.render('mca.hbs',{
		pageTitle:'MCA Page',
});
	});
	app.get('/phycis',(req,res)=>{
				res.render('phycis.hbs',{
			pageTitle:'Physics Page',
	});
		});
		app.get('/geology',(req,res)=>{
					res.render('geology.hbs',{
				pageTitle:'Geology Page',
		});
			});
app.get('/error',(req,res)=>{
			res.render('error.hbs',{
		pageTitle:'An Error Had been occured',
});
	});
app.listen(3000);
