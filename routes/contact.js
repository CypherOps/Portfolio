var bodyParser = require('body-parser');
var express = require('express');
var app = express();


//get function for contact
app.get('/contact',function(req,res){
  res.render('contact');
});




module.exports = app;
