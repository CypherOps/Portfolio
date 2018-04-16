var bodyParser = require('body-parser');
var express = require('express');
var app = express();


//get function for home
app.get('/portfolio',function(req,res){
  res.render('portfolio');
});




module.exports = app;
