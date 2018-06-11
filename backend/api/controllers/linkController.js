'use strict';

var mongoose = require('mongoose'),
  Link = mongoose.model('Links');

exports.list_all_tasks = function(req, res) {
  Link.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};




exports.create_a_link = function(req, res) {
  var new_link = new Link(req.body);
  new_link.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.read_a_link = function(req, res) {
  Link.findById(req.params.linkId, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.update_a_link = function(req, res) {
  Link.findOneAndUpdate({_id: req.params.linkId}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.delete_a_link = function(req, res) {

  Link.remove({
    _id: req.params.linkId
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Link successfully deleted' });
  });
};


