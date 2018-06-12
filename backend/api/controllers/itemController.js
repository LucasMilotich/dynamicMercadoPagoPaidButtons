'use strict';

var mongoose = require('mongoose'),
Item = mongoose.model('Items');

exports.list_all_items = function(req, res) {
  console.log("list_all_items.");

  Item.find({}, function(err, item) {
    if (err)
      res.send(err);
    res.json(item);
  });
};

exports.create_an_item = function(req, res) {
  var new_link = new Item(req.body);
  new_link.save(function(err, item) {
    if (err)
      res.send(err);

    generarLinkMP(item).then(function (unLink){
      console.log("link: "+unLink);
      item.buttonLink=unLink;
      console.log(item);
      res.json(item);  
    });
  });
};


exports.read_an_item_by_Id = function(req, res) {
  console.log("read_an_item_by_Id :"+req.params.productCode);
  Item.findById(req.params.linkId, function(err, item) {
    if (err)
      res.send(err);
    res.json(item);
  });
};

exports.read_an_item_by_ProductCode = function(req, res) {
  console.log("read_an_item_by_ProductCode: "+req.params.productCode);
  Item.findOne({productCode:req.params.productCode}, function(err, item) {
    if (err)
      res.send(err);
    res.json(item);
  });
};

exports.update_an_item = function(req, res) {
  console.log("update_an_item :" + req.params.productCode);
  Item.findOneAndUpdate({productCode: req.params.productCode}, req.body, {new: true}, function(err, item) {
    if (err)
      res.send(err);

    generarLinkMP(item).then(function (unLink){
      console.log("link: "+unLink);
      item.buttonLink=unLink;
      console.log(item);
      res.json(item);  
    });

  });
};


exports.delete_an_item = function(req, res) {
  console.log("delete_an_item :"+req.params.productCode);
  Item.remove({
    productCode: req.params.productCode
  }, function(err, item) {
    if (err)
      res.send(err);
    res.json({ message: 'Item eliminado correctamente' });
  });
};

function generarLinkMP(item){
  return new Promise(function (fulfill, reject){
   var MP = require ("mercadopago");
  var mp = new MP ("1488228270354975", "ruoQpNwW3bloRs0fmggUngxsYIz4umVv");
  // var mp = new MP ("CLIENT_ID", "CLIENT_SECRET");
  var preference = {
    "items": [
    {
      "title": item.buttonTitle,
      "quantity": item.buttonQuantity,
                "currency_id": "ARS", // Available currencies at: https://api.mercadopago.com/currencies
                "unit_price": item.buttonPrice
              }
              ]
            };

            mp.createPreference (preference, function (err, data){
              if (err) {
                reject (err);
              } else {
                console.log(data.response.init_point);
                fulfill( data.response.init_point);
              }
            });
          });
}
