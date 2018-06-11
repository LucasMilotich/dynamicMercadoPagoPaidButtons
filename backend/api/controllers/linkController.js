'use strict';

var mongoose = require('mongoose'),
Link = mongoose.model('Links');

exports.list_all_links = function(req, res) {
  console.log("list_all_links.");

  Link.find({}, function(err, link) {
    if (err)
      res.send(err);
    res.json(link);
  });
};

exports.create_a_link = function(req, res) {
  var new_link = new Link(req.body);
  new_link.save(function(err, link) {
    if (err)
      res.send(err);
    res.json(link);
  });
};


exports.read_a_link_by_Id = function(req, res) {
  console.log("read_a_link_by_Id :"+req.params.productCode);
  Link.findById(req.params.linkId, function(err, link) {
    if (err)
      res.send(err);
    res.json(link);
  });
};

exports.read_a_link_by_ProductCode = function(req, res) {
  console.log("read_a_link_by_ProductCode: "+req.params.productCode);
  Link.findOne({productCode:req.params.productCode}, function(err, link) {
    if (err)
      res.send(err);
    res.json(link);
  });
};

exports.update_a_link = function(req, res) {
  console.log("update_a_link :" + req.params.productCode);
  Link.findOneAndUpdate({productCode: req.params.productCode}, req.body, {new: true}, function(err, link) {
    if (err)
      res.send(err);
    res.json(link);
  });
};


exports.delete_a_link = function(req, res) {
  console.log("delete_a_link :"+req.params.productCode);
  Link.remove({
    _id: req.params.linkId
  }, function(err, link) {
    if (err)
      res.send(err);
    res.json({ message: 'Link successfully deleted' });
  });
};


