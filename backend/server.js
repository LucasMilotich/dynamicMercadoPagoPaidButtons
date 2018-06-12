var express = require('express'),
app = express(),
port = 8080,
mongoose = require('mongoose'),
  Link = require('./api/models/itemModel'), //created model loading here

  
  bodyParser = require('body-parser');
  app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/LinksDB'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/itemRoutes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('link generator for dynamicMercadoPagoPaidButtons. RESTful API server started on: ' + port);
