var express = require('express');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

//express object
var app = express();

//include routes files
var homeroutes = require('./routes/home');
var contactroutes = require('./routes/contact');
var portroutes = require('./routes/portfolio');

//set up emplate engine
app.set('view engine','ejs');


//static files
app.use(express.static('./public'));



//use routes
app.use(homeroutes);
app.use(contactroutes);
app.use(portroutes);


//listen to port
app.listen(3000);
console.log('you are listening to port 3000');
