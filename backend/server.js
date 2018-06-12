var express = require('express'),
app = express(),
port = 3000,
mongoose = require('mongoose'),
  Link = require('./api/models/linkModel'), //created model loading here
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/LinksDB'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/linkRoutes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('link generator for dynamicMercadoPagoPaidButtons. RESTful API server started on: ' + port);
